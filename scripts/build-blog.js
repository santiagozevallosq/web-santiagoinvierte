const fs = require('fs');
const path = require('path');
const fm = require('front-matter');
const { marked } = require('marked');

// Configuration
const POSTS_DIR = path.join(__dirname, '../content/posts');
const OUTPUT_DIR = path.join(__dirname, '../pages/blog');
const TEMPLATE_PATH = path.join(__dirname, '../templates/post-layout.html');
const BLOG_INDEX_PATH = path.join(__dirname, '../pages/blog.html');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Read Template
const template = fs.readFileSync(TEMPLATE_PATH, 'utf8');

// Function to format date
const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
};

// Process Posts
const posts = [];

fs.readdirSync(POSTS_DIR).forEach(file => {
    if (path.extname(file) === '.md') {
        const filePath = path.join(POSTS_DIR, file);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { attributes, body } = fm(fileContent);

        const htmlContent = marked(body);
        const fileName = path.basename(file, '.md') + '.html';
        const outputFilePath = path.join(OUTPUT_DIR, fileName);

        // Replace placeholders in template
        let postHtml = template
            .replace(/{{TITLE}}/g, attributes.title)
            .replace(/{{DATE}}/g, formatDate(attributes.date))
            .replace(/{{CATEGORY}}/g, attributes.category || 'General')
            .replace(/{{CONTENT}}/g, htmlContent);

        fs.writeFileSync(outputFilePath, postHtml);
        console.log(`Generated: ${fileName}`);

        posts.push({
            title: attributes.title,
            date: new Date(attributes.date),
            formattedDate: formatDate(attributes.date),
            description: attributes.description,
            category: attributes.category,
            link: `blog/${fileName}`, // Relative to pages/ directory? No, blog.html is in pages/ so link is blog/file.html
            image: attributes.image || 'https://via.placeholder.com/400x200'
        });
    }
});

// Sort posts by date (newest first)
posts.sort((a, b) => b.date - a.date);

// Update Blog Index (pages/blog.html)
// We need to read the blog index and replace the list section
if (fs.existsSync(BLOG_INDEX_PATH)) {
    const blogIndexTemplate = fs.readFileSync(BLOG_INDEX_PATH, 'utf8');

    // Generate HTML list
    const postsListHtml = posts.map(post => `
        <article class="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition-shadow">
            <div class="h-48 bg-gray-200 bg-cover bg-center" style="background-image: url('${post.image}')"></div>
            <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                    <span class="text-xs font-bold text-action-green uppercase tracking-wider">${post.category || 'Blog'}</span>
                    <span class="text-xs text-gray-500">${post.formattedDate}</span>
                </div>
                <h3 class="text-xl font-bold mb-2 text-primary leading-tight">
                    <a href="${post.link}" class="hover:text-action-green transition-colors">${post.title}</a>
                </h3>
                <p class="text-text-muted text-sm mb-4 line-clamp-3">
                    ${post.description}
                </p>
                <a href="${post.link}" class="text-primary font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                    Leer artículo <span class="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
            </div>
        </article>
    `).join('');

    // Regex to replace content between markers
    const updatedIndex = blogIndexTemplate.replace(
        /<!-- BLOG_LIST_START -->[\s\S]*?<!-- BLOG_LIST_END -->/,
        `<!-- BLOG_LIST_START -->\n<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">\n${postsListHtml}\n</div>\n<!-- BLOG_LIST_END -->`
    );

    fs.writeFileSync(BLOG_INDEX_PATH, updatedIndex);
    console.log('Updated Blog Index');
} else {
    console.error('Blog index file not found!');
}

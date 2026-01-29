document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('prompts-grid');
    const filters = document.getElementById('category-filters');

    // Load Prompts from Global Variable (defined in data/prompts.js)
    if (typeof PROMPTS_DATA !== 'undefined' && Array.isArray(PROMPTS_DATA)) {
        renderPrompts(PROMPTS_DATA);
    } else {
        console.error('PROMPTS_DATA not found. Make sure data/prompts.js is loaded.');
        grid.innerHTML = '<p class="col-span-full text-center text-red-500">Error: No se pudieron cargar los prompts.</p>';
    }

    // Render Prompts Function
    function renderPrompts(prompts) {
        grid.innerHTML = '';

        if (prompts.length === 0) {
            grid.innerHTML = '<p class="col-span-full text-center text-gray-400 py-10">No se encontraron prompts en esta categoría.</p>';
            return;
        }

        prompts.forEach(prompt => {
            const card = document.createElement('div');
            card.className = 'bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all overflow-hidden flex flex-col group';

            // Badge color based on category (simple logic)
            let badgeColor = 'bg-blue-100 text-blue-800';
            if (prompt.categoria === 'Productividad') badgeColor = 'bg-green-100 text-green-800';
            if (prompt.categoria === 'Sector Público') badgeColor = 'bg-purple-100 text-purple-800';

            card.innerHTML = `
                <div class="relative h-48 overflow-hidden bg-gray-100">
                    <img src="${prompt.imagen}" alt="${prompt.titulo}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                    <div class="absolute top-4 left-4">
                        <span class="px-3 py-1 rounded-full text-xs font-bold ${badgeColor}">
                            ${prompt.categoria}
                        </span>
                    </div>
                </div>
                <div class="p-6 flex flex-col flex-1">
                    <div class="flex items-center justify-between mb-3">
                        <span class="text-xs font-bold text-gray-400 uppercase tracking-wider">${prompt.herramienta}</span>
                        <span class="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded">${prompt.nivel}</span>
                    </div>
                    <h3 class="text-xl font-bold text-primary mb-2 line-clamp-1">${prompt.titulo}</h3>
                    <p class="text-text-muted text-sm mb-6 line-clamp-2">${prompt.descripcion}</p>
                    
                    <div class="mt-auto flex gap-3">
                        <button onclick="copyPrompt('${prompt.id}')" class="flex-1 flex items-center justify-center gap-2 bg-secondary hover:bg-gray-200 text-primary font-bold py-2.5 rounded-lg text-sm transition-colors" id="btn-${prompt.id}">
                            <span class="material-symbols-outlined text-sm">content_copy</span>
                            Copiar
                        </button>
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    // Filter Logic
    filters.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-btn')) {
            // Update UI
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('bg-primary', 'text-white');
                btn.classList.add('bg-white', 'text-gray-600');
            });
            e.target.classList.remove('bg-white', 'text-gray-600');
            e.target.classList.add('bg-primary', 'text-white');

            // Filter Data
            const category = e.target.getAttribute('data-category');
            if (category === 'all') {
                renderPrompts(PROMPTS_DATA);
            } else {
                const filtered = PROMPTS_DATA.filter(p => p.categoria === category);
                renderPrompts(filtered);
            }
        }
    });

    // Copy Function
    window.copyPrompt = (id) => {
        const promptData = PROMPTS_DATA.find(p => p.id === id);
        if (promptData) {
            navigator.clipboard.writeText(promptData.prompt).then(() => {
                const btn = document.getElementById(`btn-${id}`);
                const originalContent = btn.innerHTML;

                // Show Feedback
                btn.classList.remove('bg-secondary', 'text-primary');
                btn.classList.add('bg-green-600', 'text-white');
                btn.innerHTML = `<span class="material-symbols-outlined text-sm">check</span> Copiado`;

                // Revert after 2s
                setTimeout(() => {
                    btn.classList.remove('bg-green-600', 'text-white');
                    btn.classList.add('bg-secondary', 'text-primary');
                    btn.innerHTML = originalContent;
                }, 2000);
            });
        }
    };
});

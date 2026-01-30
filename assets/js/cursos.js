document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('courses-grid');
    if (!grid) return;

    fetch('../assets/data/cursos.json')
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(courses => {
            renderCourses(courses, grid);
        })
        .catch(error => {
            console.error('Error loading courses:', error);
            // Fallback for local testing without server (CORS restriction)
            console.log('Falling back to local data');
            renderCourses(fallbackCourses, grid);
        });
});

const fallbackCourses = [
    {
        "id": "ia-miniapps",
        "title": "Taller de creación de dashboards y mini aplicaciones",
        "description": " y Claude para automatizar tareas diarias y tomar mejores decisiones sin saber programar.",
        "level": {
            "text": "Principiante",
            "color": "green"
        },
        "badges": [
            {
                "text": "Popular",
                "color": "yellow",
                "icon": "⭐"
            }
        ],
        "features": [
            { "icon": "schedule", "text": "4 semanas de duración" },
            { "icon": "videocam", "text": "Clases grabadas + En vivo" },
            { "icon": "layers", "text": "8 módulos prácticos" },
            { "icon": "infinity", "text": "Acceso de por vida" }
        ],
        "cta": {
            "text": "Más información",
            "link": "https://notion.so/...",
            "style": "primary",
            "icon": "open_in_new"
        }
    },
    {
        "id": "automatizacion-emprendedores",
        "title": "Automatización para Emprendedores",
        "description": "Crea flujos de trabajo automáticos para marketing y ventas que funcionan mientras duermes.",
        "level": {
            "text": "Intermedio",
            "color": "blue"
        },
        "badges": [],
        "features": [
            { "icon": "schedule", "text": "3 semanas intensivas" },
            { "icon": "play_circle", "text": "100% Online a tu ritmo" },
            { "icon": "psychology", "text": "Plantillas de automatización" },
            { "icon": "group", "text": "Comunidad privada" }
        ],
        "cta": {
            "text": "Más información",
            "link": "https://notion.so/...",
            "style": "primary",
            "icon": "open_in_new"
        }
    },
    {
        "id": "prompt-engineering",
        "title": "Masterclass: Prompt Engineering",
        "description": "Técnicas avanzadas para obtener resultados de calidad profesional en modelos de lenguaje.",
        "level": {
            "text": "Avanzado",
            "color": "purple"
        },
        "badges": [
            {
                "text": "Lista de Espera",
                "color": "gray",
                "icon": "⏳"
            }
        ],
        "features": [
            { "icon": "timer", "text": "3 horas de sesión" },
            { "icon": "video_camera_front", "text": "Workshop En Vivo" },
            { "icon": "description", "text": "Biblioteca de Prompts" },
            { "icon": "person", "text": "Cupos Limitados (20)" }
        ],
        "cta": {
            "text": "Unirme a lista de espera",
            "link": "https://notion.so/...",
            "style": "outline",
            "icon": "notifications"
        }
    }
];

function renderCourses(courses, container) {
    container.innerHTML = courses.map(course => createCard(course)).join('');
}

function createCard(course) {
    // Generate badges HTML
    const levelBadge = createBadgeHtml(course.level.text, course.level.color, getLevelIcon(course.level.text));
    const otherBadges = course.badges.map(b => createBadgeHtml(b.text, b.color, b.icon)).join('');

    // Generate Features List
    const featuresHtml = course.features.map(f => `
        <li class="flex items-start gap-3 text-sm text-gray-600">
            <span class="material-symbols-outlined text-action-green text-[20px]">${f.icon}</span>
            <span>${f.text}</span>
        </li>
    `).join('');

    // CTA Classes
    const ctaClass = course.cta.style === 'primary'
        ? 'bg-primary text-white hover:bg-action-green'
        : 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white';

    return `
    <div class="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-action-green/30 transition-all duration-300 flex flex-col h-full overflow-hidden">
        <div class="p-6 flex flex-col h-full">
            <!-- Header: Badges -->
            <div class="flex flex-wrap gap-2 mb-4">
                ${levelBadge}
                ${otherBadges}
            </div>

            <!-- Title -->
            <h3 class="text-xl font-bold text-primary mb-3 group-hover:text-action-green transition-colors">
                ${course.title}
            </h3>

            <!-- Description -->
            <p class="text-text-muted text-sm mb-6 leading-relaxed">
                ${course.description}
            </p>

            <!-- Divider -->
            <div class="border-t border-gray-100 my-4"></div>

            <!-- Includes Block -->
            <div class="flex-1">
                <h4 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Incluye:</h4>
                <ul class="space-y-3">
                    ${featuresHtml}
                </ul>
            </div>

            <!-- CTA -->
            <div class="mt-8">
                <a href="${course.cta.link}" target="_blank"
                    class="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-bold transition-colors ${ctaClass}">
                    ${course.cta.text}
                    <span class="material-symbols-outlined text-sm">${course.cta.icon}</span>
                </a>
            </div>
        </div>
    </div>
    `;
}

function createBadgeHtml(text, color, icon) {
    const colorClasses = getBadgeColorClasses(color);
    const iconSpan = icon ? `${icon} ` : '';

    return `
    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colorClasses}">
        ${iconSpan}${text}
    </span>
    `;
}

function getBadgeColorClasses(color) {
    const map = {
        'green': 'bg-green-100 text-green-800',
        'yellow': 'bg-yellow-100 text-yellow-800',
        'blue': 'bg-blue-100 text-blue-800',
        'purple': 'bg-purple-100 text-purple-800',
        'gray': 'bg-gray-100 text-gray-800',
    };
    return map[color] || 'bg-gray-100 text-gray-800';
}

function getLevelIcon(levelText) {
    if (levelText.includes('Principiante')) return '🟢';
    if (levelText.includes('Intermedio')) return '🟡';
    if (levelText.includes('Avanzado')) return '🔵';
    return '';
}

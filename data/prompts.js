const PROMPTS_DATA = [
    {
        "id": "prompt-001",
        "titulo": "Resumir informes técnicos",
        "categoria": "Productividad",
        "nivel": "Principiante",
        "herramienta": "ChatGPT",
        "imagen": "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=2670&auto=format&fit=crop",
        "descripcion": "Convierte informes largos en resúmenes claros y accionables.",
        "prompt": "Actúa como un experto en análisis de documentos. Por favor, resume el siguiente informe técnico en 3 puntos clave, destacando las conclusiones principales y las acciones recomendadas. Utiliza un lenguaje claro y conciso:\n\n[PEGAR INFORME AQUÍ]"
    },
    {
        "id": "prompt-002",
        "titulo": "Ideas de contenido LinkedIn",
        "categoria": "Contenido",
        "nivel": "Intermedio",
        "herramienta": "Claude",
        "imagen": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop",
        "descripcion": "Lluvia de ideas creativa para posts de redes sociales.",
        "prompt": "Actúa como un estratega de contenido. Genera 10 ideas creativas para posts de LinkedIn sobre el tema '[TEMA]', enfocadas en profesionales del sector [SECTOR]. Para cada idea, sugiere un gancho (hook) inicial de la primera frase para captar la atención."
    },
    {
        "id": "prompt-003",
        "titulo": "Análisis de sentimientos",
        "categoria": "Análisis",
        "nivel": "Avanzado",
        "herramienta": "ChatGPT",
        "imagen": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
        "descripcion": "Evalúa el tono de comentarios de clientes o correos.",
        "prompt": "Analiza el sentimiento de los siguientes comentarios de clientes. Clasifícalos en Positivo, Negativo o Neutro, y extrae los 3 temas principales de queja o elogio. Presenta los resultados en una tabla markdown:\n\n[PEGAR COMENTARIOS]"
    },
    {
        "id": "prompt-004",
        "titulo": "Responder emails difíciles",
        "categoria": "Productividad",
        "nivel": "Principiante",
        "herramienta": "ChatGPT",
        "imagen": "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&w=2574&auto=format&fit=crop",
        "descripcion": "Escribe respuestas diplomáticas y profesionales.",
        "prompt": "Ayúdame a redactar una respuesta diplomática y profesional para el siguiente correo electrónico que recibí. El objetivo es rechazar la propuesta amablemente pero dejar la puerta abierta para el futuro, manteniendo un tono cordial y cercano:\n\n[PEGAR CORREO]"
    },
    {
        "id": "prompt-005",
        "titulo": "Diseño de políticas públicas",
        "categoria": "Sector Público",
        "nivel": "Avanzado",
        "herramienta": "Claude",
        "imagen": "https://images.unsplash.com/photo-1575320181282-9afab399332c?q=80&w=2670&auto=format&fit=crop",
        "descripcion": "Estructura inicial para diseño de programas públicos.",
        "prompt": "Actúa como un asesor de políticas públicas. Ayúdame a estructurar un borrador para un programa de [NOMBRE DEL PROGRAMA] dirigido a [PÚBLICO OBJETIVO]. Incluye: 1. Objetivos específicos, 2. Justificación basada en evidencia, 3. Componentes principales del programa, 4. Indicadores de éxito (KPIs)."
    },
    {
        "id": "prompt-006",
        "titulo": "Calendario Editorial Mensual",
        "categoria": "Contenido",
        "nivel": "Intermedio",
        "herramienta": "ChatGPT",
        "imagen": "https://images.unsplash.com/photo-1506784365371-06fd9e45ddfb?q=80&w=2670&auto=format&fit=crop",
        "descripcion": "Planifica un mes de contenido en minutos.",
        "prompt": "Actúa como un Social Media Manager. Crea un calendario editorial de 4 semanas para una marca personal sobre [TEMA]. Incluye 3 posts por semana. Para cada post define: Título, Formato (Carrusel/Video/Texto) y Objetivo principal. Presenta la respuesta en una tabla."
    },
    {
        "id": "prompt-007",
        "titulo": "Simplificar lenguaje burocrático",
        "categoria": "Sector Público",
        "nivel": "Principiante",
        "herramienta": "Claude",
        "imagen": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2670&auto=format&fit=crop",
        "descripcion": "Traduce textos complejos a lenguaje ciudadano claro.",
        "prompt": "Reescribe el siguiente texto administrativo utilizando los principios de Lenguaje Claro. El objetivo es que cualquier ciudadano pueda entenderlo fácilmente. Elimina tecnicismos innecesarios, usa voz activa y oraciones cortas:\n\n[PEGAR TEXTO ADMINISTRATIVO]"
    },
    {
        "id": "prompt-008",
        "titulo": "Extractor de datos",
        "categoria": "Análisis",
        "nivel": "Intermedio",
        "herramienta": "ChatGPT",
        "imagen": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
        "descripcion": "Extrae nombres, fechas y montos de textos desordenados.",
        "prompt": "Analiza el siguiente texto desestructurado y extrae todos los datos clave en formato JSON. Busca específicamente: 'Nombre del cliente', 'Fecha de transacción' y 'Monto total'. Si falta algún dato, déjalo como null:\n\n[PEGAR TEXTO]"
    },
    {
        "id": "prompt-009",
        "titulo": "Guiones para TikTok/Reels",
        "categoria": "Contenido",
        "nivel": "Intermedio",
        "herramienta": "ChatGPT",
        "imagen": "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=2574&auto=format&fit=crop",
        "descripcion": "Guiones virales con gancho, cuerpo y llamado a la acción.",
        "prompt": "Escribe un guion para un video corto de TikTok (60 segundos) sobre [TEMA]. Utiliza la estructura: 1. Gancho disruptivo (3 seg), 2. Plateamiento del problema, 3. Solución/Consejo clave, 4. CTA final. Usa un tono enérgico y cercano."
    },
    {
        "id": "prompt-010",
        "titulo": "Preparación de Reuniones",
        "categoria": "Productividad",
        "nivel": "Principiante",
        "herramienta": "Gemini",
        "imagen": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2670&auto=format&fit=crop",
        "descripcion": "Genera agenda y puntos clave antes de una reunión.",
        "prompt": "Tengo una reunión con [CLIENTE/JEFE] para discutir sobre [PROYECTO]. Ayúdame a prepararme. Genera una agenda de 30 minutos, una lista de 5 preguntas clave que debería hacerle para entender sus necesidades y una lista de posibles objeciones que podrían surgir."
    },
    {
        "id": "prompt-011",
        "titulo": "Memo de Política",
        "categoria": "Sector Público",
        "nivel": "Avanzado",
        "herramienta": "Claude",
        "imagen": "https://images.unsplash.com/photo-1541872703-74c59636a226?q=80&w=2670&auto=format&fit=crop",
        "descripcion": "Redacta un memo de decisión para altos directivos.",
        "prompt": "Escribe un Memo de Decisión dirigido a un Ministro/Secretario sobre el problema de [PROBLEMA]. Usa la estructura: 1. Resumen Ejecutivo, 2. Antecedentes, 3. Análisis de Opciones (Opción A vs Opción B), 4. Recomendación. Sé extremadamente conciso y directo."
    },
    {
        "id": "prompt-012",
        "titulo": "Optimización de Perfil",
        "categoria": "Contenido",
        "nivel": "Internedio",
        "herramienta": "ChatGPT",
        "imagen": "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2670&auto=format&fit=crop",
        "descripcion": "Mejora tu biografía y titular de LinkedIn.",
        "prompt": "Actúa como un experto en marca personal. Revisa mi titular y sección 'Acerca de' de LinkedIn. Sugiéreme 3 opciones optimizadas para cada uno, enfocadas en atraer a [CLIENTE IDEAL]. Mi experiencia actual es: [PEGAR EXPERIENCIA]"
    }
];

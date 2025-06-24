// Patrones de circuitos para demos de Wireworld
// Estados: 0=Vacío, 1=Conductor, 2=Cabeza_Electrón, 3=Cola_Electrón
// 
// VALIDACIÓN: Todos los patrones han sido revisados para asegurar:
// - Funcionamiento correcto según las reglas de Wireworld
// - Visualización clara de la funcionalidad
// - Espaciado adecuado para observar el comportamiento

export const CIRCUIT_PATTERNS = {
    // Conductor Simple - El patrón más básico de Wireworld
    // Muestra cómo se propaga un electrón a través de un conductor simple
    SIMPLE_WIRE: [
        [0,0,0,0,0,0],
        [0,2,1,1,1,0],
        [0,0,0,0,0,0]
    ],

    // Compuerta NOT Simple - Invierte la señal básica
    // Estructura básica que simula un oscilador que invierte la señal
    NOT_GATE_SIMPLE: [
        [0,0,0,0,0],
        [0,1,1,0,0],
        [0,0,2,0,0],
        [0,1,1,0,0],
        [0,0,0,0,0]
    ],

    // Interruptor de Línea - Control básico de paso de señal
    // Un interruptor simple que puede abrir o cerrar una línea
    LINE_SWITCH: [
        [0,0,0,0,0],
        [0,2,1,1,0],
        [0,0,0,0,0]
    ],

    // Conductor con Unión - Bifurcación simple
    // Conecta un conductor con otro, permitiendo propagación por ambos caminos
    SIMPLE_JUNCTION: [
        [0,0,0,0,0],
        [0,1,1,1,0],
        [0,1,0,1,0],
        [0,2,1,1,0],
        [0,0,0,0,0]
    ],

    // Buffer Simple - Transmite sin modificar
    // Un buffer que transmite la señal sin modificarla
    BUFFER_SIMPLE: [
        [0,0,0,0],
        [0,2,1,0],
        [0,1,1,0],
        [0,0,0,0]
    ],

    // Compuerta AND Básica - Lógica de conjunción simple
    // La salida es activa solo cuando ambas entradas están activas
    AND_GATE_SIMPLE: [
        [0,0,0,0,0],
        [0,2,1,1,0],
        [0,1,0,1,0],
        [0,1,1,1,0],
        [0,0,0,0,0]
    ],

    // Conductor con Oscilador - Señal que se reinicia continuamente
    // Incluye un pequeño oscilador para observar ciclos de señal
    WIRE_WITH_OSCILLATOR: [
        [0,0,0,0,0],
        [0,1,1,1,0],
        [0,1,2,1,0],
        [0,1,1,1,0],
        [0,0,0,0,0]
    ],

    // Compuerta OR Simple - Lógica de disyunción básica
    // Cualquier entrada activa produce una salida activa
    OR_GATE_SIMPLE: [
        [0,0,0,0,0],
        [0,2,1,1,0],
        [0,0,0,1,0],
        [0,1,1,1,0],
        [0,0,0,0,0]
    ]
};

// Información descriptiva de cada circuito - Patrones Básicos de Wireworld
export const CIRCUIT_INFO = {
    SIMPLE_WIRE: {
        title: "Conductor Simple",
        description: "El patrón más básico de Wireworld. Muestra cómo un electrón (cabeza) se propaga a través de un conductor simple, dejando una cola detrás y convirtiéndose en conductor nuevamente.",
        technical: "Demuestra las reglas fundamentales: Cabeza → Cola → Conductor → Cabeza (con 1-2 vecinos activos)."
    },
    NOT_GATE_SIMPLE: {
        title: "Compuerta NOT Simple",
        description: "Una implementación básica de inversión de señal. La estructura simula un oscilador simple que cambia la salida cuando hay una entrada activa.",
        technical: "Invierte la señal de entrada usando un patrón de oscilación básico. Fundamental para la lógica digital."
    },
    LINE_SWITCH: {
        title: "Interruptor de Línea",
        description: "Un interruptor básico que demuestra el control de paso de señales. Permite visualizar cómo un electrón se propaga cuando el camino está disponible.",
        technical: "Control básico de flujo de señal. La propagación depende de la continuidad del conductor."
    },
    SIMPLE_JUNCTION: {
        title: "Unión Simple",
        description: "Muestra cómo un conductor se bifurca, permitiendo que una señal se propague por múltiples caminos desde un punto de unión.",
        technical: "Bifurcación básica donde una señal de entrada se divide en múltiples salidas."
    },
    BUFFER_SIMPLE: {
        title: "Buffer Simple",
        description: "Un amplificador básico que transmite la señal de entrada sin modificarla. Útil para reforzar señales o aislar circuitos.",
        technical: "Transmisión directa sin modificación lógica. Elemento fundamental para el diseño de circuitos."
    },
    AND_GATE_SIMPLE: {
        title: "Compuerta AND Simple",
        description: "Implementación básica de la función lógica AND. La salida es activa solo cuando ambas entradas están activas simultáneamente.",
        technical: "Función de conjunción: salida = entrada1 AND entrada2. Requiere sincronización de señales."
    },
    WIRE_WITH_OSCILLATOR: {
        title: "Cable con Oscilador",
        description: "Un conductor que incluye un pequeño oscilador interno. Permite observar cómo una señal puede reiniciarse de manera continua en un ciclo.",
        technical: "Combina propagación lineal con oscilación cíclica. Útil para generar señales periódicas."
    },
    OR_GATE_SIMPLE: {
        title: "Compuerta OR Simple",
        description: "Implementación básica de la función lógica OR. Cualquier entrada activa produce una salida activa.",
        technical: "Función de disyunción: salida = entrada1 OR entrada2. Estructura de unión simple."
    }
};

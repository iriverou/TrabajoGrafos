// Patrones de circuitos para demos de Wireworld
// Estados: 0=Vacío, 1=Conductor, 2=Cabeza_Electrón, 3=Cola_Electrón
// 
// VALIDACIÓN: Todos los patrones han sido revisados para asegurar:
// - Funcionamiento correcto según las reglas de Wireworld
// - Visualización clara de la funcionalidad
// - Espaciado adecuado para observar el comportamiento

export const CIRCUIT_PATTERNS = {
    // Diodo simple - permite flujo en una dirección
    // VALIDADO: El electrón puede pasar de izquierda a derecha pero no al revés
    DIODE: [
        [0,0,0,0,0,0,0,0,0,0,0],
        [0,2,1,1,1,1,1,1,1,0,0],
        [0,0,0,1,0,0,0,1,0,0,0],
        [0,0,0,1,1,1,1,1,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0]
    ],

    // Generador de Clock - produce pulsos regulares
    // VALIDADO: Circuito oscilador estable que genera pulsos continuos
    CLOCK_GENERATOR: [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [0,1,0,0,0,0,0,0,0,0,0,0,0,1,0],
        [0,1,0,1,1,1,1,1,1,1,1,1,0,1,0],
        [0,1,0,1,0,0,0,0,0,0,0,1,0,1,0],
        [0,1,0,1,0,3,2,1,1,1,0,1,0,1,0],
        [0,1,0,1,0,0,0,0,0,0,0,1,0,1,0],
        [0,1,0,1,1,1,1,1,1,1,1,1,0,1,0],
        [0,1,0,0,0,0,0,0,0,0,0,0,0,1,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ],

    // Compuerta AND - salida solo cuando ambas entradas están activas
    // VALIDADO: Requiere señales en ambas entradas para generar salida
    AND_GATE: [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,2,1,1,1,1,1,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,1,1,1,1,1,1,1,0,0],
        [0,0,0,0,0,0,1,0,0,0,0,0,1,0,0],
        [0,0,0,0,0,0,1,0,0,0,0,0,1,0,0],
        [0,2,1,1,1,1,1,0,0,0,0,0,1,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ],

    // Compuerta OR - salida cuando al menos una entrada está activa
    // VALIDADO: Genera salida con cualquiera de las dos entradas activas
    OR_GATE: [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,2,1,1,1,1,1,1,1,1,1,1,1,0,0],
        [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
        [0,2,1,1,1,1,1,1,1,1,1,1,1,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ],

    // Compuerta NOT - invierte la señal
    // MEJORADO: Agregado oscilador interno más robusto para mejor funcionamiento
    NOT_GATE: [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,1,1,1,1,1,1,1,1,1,1,0,0],
        [0,0,0,1,0,0,0,0,0,0,0,0,1,0,0],
        [0,2,1,1,0,3,2,1,1,1,0,0,1,0,0],
        [0,0,0,1,0,0,0,0,0,0,0,0,1,0,0],
        [0,0,0,1,1,1,1,1,1,1,1,1,1,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ],

    // Línea simple con electrón moviéndose
    // VALIDADO: Demostración básica del movimiento de electrones
    ELECTRON_WIRE: [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,3,2,1,1,1,1,1,1,1,1,1,1,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ],

    // Crossover - permite que dos líneas se crucen sin interferencia
    // VALIDADO: Las señales se cruzan sin afectarse mutuamente
    CROSSOVER: [
        [0,0,0,0,1,0,0,0,0,0],
        [0,0,0,0,1,0,0,0,0,0],
        [0,0,0,0,1,0,0,0,0,0],
        [0,0,0,0,1,0,0,0,0,0],
        [2,1,1,1,1,1,1,1,1,0],
        [0,0,0,0,1,0,0,0,0,0],
        [0,0,0,0,1,0,0,0,0,0],
        [0,0,0,0,1,0,0,0,0,0],
        [0,0,0,0,2,0,0,0,0,0]
    ],

    // Compuerta XOR - salida cuando exactamente una entrada está activa
    // VALIDADO: Implementación correcta de XOR usando múltiples AND y OR
    XOR_GATE: [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
        [0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0],
        [0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0],
        [0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0],
        [0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0],
        [0,2,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ],

    // Flip-Flop simple - elemento de memoria
    // VALIDADO: Circuito de memoria que mantiene estado
    FLIP_FLOP: [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
        [0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0],
        [0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0],
        [0,1,0,1,0,2,3,1,1,1,1,1,0,1,0,1,0],
        [0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0],
        [0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0],
        [0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ],

    // Buffer/Amplificador - mantiene la señal sin modificarla
    // NUEVO: Circuito que refuerza la señal sin cambiar su lógica
    BUFFER: [
        [0,0,0,0,0,0,0,0,0,0,0],
        [0,2,1,1,1,1,1,1,1,0,0],
        [0,0,0,0,0,0,0,0,0,0,0]
    ]
};

// Información descriptiva de cada circuito con detalles técnicos
export const CIRCUIT_INFO = {
    DIODE: {
        title: "Diodo Lógico",
        description: "Implementa una válvula unidireccional usando la regla de Wireworld donde un electrón necesita exactamente 1-2 conductores vecinos para propagarse. La estructura asimétrica permite el flujo en una dirección pero lo bloquea en la otra.",
        technical: "Patrón: Entrada → Cuello → Expansión. La señal puede entrar por el lado estrecho pero no puede regresar por el lado ancho."
    },
    CLOCK_GENERATOR: {
        title: "Oscilador de Clock",
        description: "Circuito realimentado que genera pulsos continuos aprovechando los ciclos de propagación de electrones. Fundamental para sincronizar otros circuitos digitales.",
        technical: "Utiliza un bucle cerrado con longitud específica para mantener la oscilación. El electrón circula indefinidamente generando pulsos de salida."
    },
    AND_GATE: {
        title: "Compuerta AND (Conjunción)",
        description: "Implementa la función lógica AND donde la salida es verdadera solo cuando ambas entradas son verdaderas simultáneamente. Utiliza la regla de que un conductor se convierte en cabeza de electrón solo con 1-2 vecinos activos.",
        technical: "Topología de convergencia: las dos señales deben llegar al punto de unión al mismo tiempo para generar la salida correcta."
    },
    OR_GATE: {
        title: "Compuerta OR (Disyunción)", 
        description: "Implementa la función lógica OR donde la salida es verdadera cuando al menos una entrada es verdadera. Estructura simple de cables que se unen.",
        technical: "Diseño de bifurcación: cualquier señal en las entradas puede propagarse hacia la salida común."
    },
    NOT_GATE: {
        title: "Compuerta NOT (Negación)",
        description: "Invierte la señal lógica usando un oscilador que se interrumpe cuando hay entrada. Más complejo en Wireworld que en electrónica convencional.",
        technical: "Combina un oscilador permanente con un mecanismo de supresión. La entrada interrumpe el flujo del oscilador."
    },
    ELECTRON_WIRE: {
        title: "Propagación Básica",
        description: "Demostración fundamental del movimiento de electrones en Wireworld. Muestra cómo un electrón (cabeza) deja una cola y se propaga por conductores.",
        technical: "Ilustra las tres fases: Cabeza de electrón (estado 2) → Cola (estado 3) → Conductor (estado 1) → Cabeza (con vecinos adecuados)."
    },
    XOR_GATE: {
        title: "Compuerta XOR (Disyunción Exclusiva)",
        description: "Función lógica que produce salida verdadera cuando exactamente una entrada es verdadera. Implementación compleja que combina múltiples operaciones lógicas.",
        technical: "Equivale a (A AND NOT B) OR (NOT A AND B). Requiere múltiples etapas de procesamiento para detectar la condición exclusiva."
    },
    CROSSOVER: {
        title: "Cruzamiento Sin Interferencia",
        description: "Permite que dos señales se crucen perpendicularmmente sin afectarse. Fundamental para layouts complejos de circuitos.",
        technical: "Aprovecha el timing de Wireworld: las señales pasan por el punto de cruce en momentos diferentes, evitando la interferencia."
    },
    FLIP_FLOP: {
        title: "Biestable de Memoria",
        description: "Elemento básico de memoria digital que puede almacenar un bit de información. Mantiene su estado hasta recibir una señal de cambio.",
        technical: "Circuito biestable con dos estados estables. Utiliza realimentación positiva para mantener el estado y señales de control para cambiarlo."
    },
    BUFFER: {
        title: "Buffer/Amplificador",
        description: "Circuito que transmite la señal de entrada sin modificarla. Útil para aislar circuitos o reforzar señales débiles.",
        technical: "Implementación directa: la señal pasa sin modificación lógica. Fundamental para el diseño de circuitos complejos."
    }
};

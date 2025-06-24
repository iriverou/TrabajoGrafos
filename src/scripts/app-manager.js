// Gestor centralizado para la aplicación Wireworld
import { WireworldEngine } from './wireworld-engine.js';
import { GridRenderer } from './grid-render.js';
import { UserInteractionHandler } from './user-interactions.js';

export class WireworldAppManager {
    constructor() {
        this.app = null;
        this.isInitialized = false;
    }

    /**
     * Inicializa la aplicación Wireworld
     * @param {HTMLCanvasElement} canvas - El elemento canvas
     * @param {HTMLElement} generationCounter - Elemento para mostrar el contador de generación
     * @param {number} gridWidth - Ancho de la cuadrícula
     * @param {number} gridHeight - Alto de la cuadrícula  
     * @param {number} cellSize - Tamaño de cada celda
     */
    initialize(canvas, generationCounter, gridWidth = 70, gridHeight = 50, cellSize = 10) {
        try {
            // Validar elementos requeridos
            if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
                throw new Error('Se debe proporcionar un elemento canvas válido');
            }
            
            if (!generationCounter || !(generationCounter instanceof HTMLElement)) {
                throw new Error('Se debe proporcionar un elemento generationCounter válido');
            }

            // Crear instancias de las clases
            const engine = new WireworldEngine(gridWidth, gridHeight);
            const renderer = new GridRenderer(canvas, cellSize);
            const interactionHandler = new UserInteractionHandler(canvas, engine, renderer);

            // Crear objeto de la aplicación
            this.app = {
                engine,
                renderer,
                interactionHandler,
                generationCounter
            };

            // Renderizado inicial
            renderer.render(engine);
            
            this.isInitialized = true;
            console.log('WireworldApp inicializada correctamente');
            
            return this.app;
        } catch (error) {
            console.error('Error al inicializar WireworldApp:', error);
            this.showUserFriendlyError('No se pudo inicializar el simulador. Por favor, recarga la página.');
            throw error;
        }
    }

    /**
     * Obtiene la instancia de la aplicación
     * @returns {Object|null} La instancia de la aplicación o null si no está inicializada
     */
    getApp() {
        if (!this.isInitialized || !this.app) {
            console.warn('WireworldApp no ha sido inicializada');
            return null;
        }
        return this.app;
    }

    /**
     * Verifica si la aplicación está inicializada
     * @returns {boolean} True si está inicializada, false en caso contrario
     */
    isReady() {
        return this.isInitialized && this.app !== null;
    }

    /**
     * Destruye la aplicación y limpia recursos
     */
    destroy() {
        if (this.app) {
            // Limpiar event listeners si es necesario
            this.app = null;
        }
        this.isInitialized = false;
        console.log('WireworldApp destruida');
    }

    /**
     * Muestra un error amigable al usuario
     * @private
     */
    showUserFriendlyError(message) {
        // Crear un elemento de error temporal
        const errorElement = document.createElement('div');
        errorElement.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background-color: #f44336;
            color: white;
            padding: 16px;
            border-radius: 4px;
            z-index: 1000;
            max-width: 300px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        `;
        errorElement.textContent = message;
        
        document.body.appendChild(errorElement);
        
        // Remover después de 5 segundos
        setTimeout(() => {
            if (errorElement.parentNode) {
                errorElement.parentNode.removeChild(errorElement);
            }
        }, 5000);
    }
}

// Singleton para uso global
export const wireworldAppManager = new WireworldAppManager();

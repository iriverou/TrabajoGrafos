// Manejo de interacciones del usuario
import { STATES } from './wireworld-engine.js';

export class UserInteractionHandler {
    constructor(canvas, engine, renderer) {
        // Validar parámetros
        if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
            throw new Error('Se debe proporcionar un elemento canvas válido');
        }
        if (!engine) {
            throw new Error('Se debe proporcionar un engine válido');
        }
        if (!renderer) {
            throw new Error('Se debe proporcionar un renderer válido');
        }
        
        this.canvas = canvas;
        this.engine = engine;
        this.renderer = renderer;
        this.isDrawing = false;
        this.currentTool = 'brush';
        this.currentState = STATES.CONDUCTOR;
        this.brushSize = 1;
        
        this.setupEventListeners();
    }

    setupEventListeners() {
        // Mouse events
        this.canvas.addEventListener('mousedown', (e) => this.handleMouseDown(e));
        this.canvas.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        this.canvas.addEventListener('mouseup', () => this.handleMouseUp());
        this.canvas.addEventListener('mouseleave', () => this.handleMouseUp());
        
        // Prevent context menu
        this.canvas.addEventListener('contextmenu', (e) => e.preventDefault());
    }

    handleMouseDown(e) {
        const rect = this.canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        
        if (this.currentTool === 'brush') {
            this.isDrawing = true;
            this.drawAtPosition(mouseX, mouseY);
        }
    }

    handleMouseMove(e) {
        if (!this.isDrawing || this.currentTool !== 'brush') return;
        
        const rect = this.canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        
        this.drawAtPosition(mouseX, mouseY);
    }

    handleMouseUp() {
        this.isDrawing = false;
    }

    drawAtPosition(mouseX, mouseY) {
        try {
            const coords = this.renderer.getGridCoordinates(mouseX, mouseY);
            
            // Validar que las coordenadas están dentro de los límites
            if (coords.x >= this.engine.width || coords.y >= this.engine.height) {
                return; // Coordenadas fuera de límites, no hacer nada
            }
            
            const state = this.currentState;
            
            if (this.brushSize === 1) {
                this.engine.setCell(coords.x, coords.y, state);
            } else {
                // Brush más grande
                const halfSize = Math.floor(this.brushSize / 2);
                for (let dy = -halfSize; dy <= halfSize; dy++) {
                    for (let dx = -halfSize; dx <= halfSize; dx++) {
                        const newX = coords.x + dx;
                        const newY = coords.y + dy;
                        
                        // Solo dibujar si está dentro de los límites
                        if (newX >= 0 && newX < this.engine.width && 
                            newY >= 0 && newY < this.engine.height) {
                            this.engine.setCell(newX, newY, state);
                        }
                    }
                }
            }
            
            this.renderer.render(this.engine);
        } catch (error) {
            console.error('Error al dibujar en posición:', error);
        }
    }

    setTool(tool) {
        this.currentTool = tool;
        this.isDrawing = false;
    }

    setState(state) {
        // Validar que el estado es válido
        const validStates = Object.values(STATES);
        if (!validStates.includes(state)) {
            console.warn(`Estado inválido: ${state}. Estados válidos: ${validStates.join(', ')}`);
            return false;
        }
        
        this.currentState = state;
        return true;
    }

    setBrushSize(size) {
        // Validar tamaño del pincel
        if (!Number.isInteger(size) || size < 1 || size > 10) {
            console.warn(`Tamaño de pincel inválido: ${size}. Debe ser un entero entre 1 y 10.`);
            return false;
        }
        
        this.brushSize = size;
        return true;
    }

    // Métodos para herramientas adicionales
    clearGrid() {
        try {
            this.engine.clear();
            this.renderer.render(this.engine);
        } catch (error) {
            console.error('Error al limpiar la cuadrícula:', error);
        }
    }
}
// Manejo de interacciones del usuario
import { STATES } from './wireworld-engine.js';

export class UserInteractionHandler {
    constructor(canvas, engine, renderer) {
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
        const coords = this.renderer.getGridCoordinates(mouseX, mouseY);
        
        // Determinar qué estado colocar basado en el botón del mouse
        const state = this.currentState;
        
        if (this.brushSize === 1) {
            this.engine.setCell(coords.x, coords.y, state);
        } else {
            // Brush más grande
            const halfSize = Math.floor(this.brushSize / 2);
            for (let dy = -halfSize; dy <= halfSize; dy++) {
                for (let dx = -halfSize; dx <= halfSize; dx++) {
                    this.engine.setCell(coords.x + dx, coords.y + dy, state);
                }
            }
        }
        
        this.renderer.render(this.engine);
    }

    setTool(tool) {
        this.currentTool = tool;
        this.isDrawing = false;
    }

    setState(state) {
        this.currentState = state;
    }

    setBrushSize(size) {
        this.brushSize = size;
    }

    // Métodos para herramientas adicionales
    clearGrid() {
        this.engine.clear();
        this.renderer.render(this.engine);
    }
}
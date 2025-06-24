// Renderizado del canvas
import { STATES } from './wireworld-engine.js';

export class GridRenderer {
    constructor(canvas, cellSize = 10) {
        // Validar parámetros
        if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
            throw new Error('Se debe proporcionar un elemento canvas válido');
        }
        
        const ctx = canvas.getContext('2d');
        if (!ctx) {
            throw new Error('No se pudo obtener el contexto 2D del canvas');
        }
        
        if (!Number.isInteger(cellSize) || cellSize <= 0) {
            throw new Error(`Tamaño de celda inválido: ${cellSize}. Debe ser un número entero positivo.`);
        }
        
        this.canvas = canvas;
        this.ctx = ctx;
        this.cellSize = cellSize;
        this.colors = {
            [STATES.EMPTY]: '#000000',
            [STATES.CONDUCTOR]: '#FFD700',
            [STATES.ELECTRON_HEAD]: '#00FFFF',
            [STATES.ELECTRON_TAIL]: '#FF00FF'
        };
    }

    render(engine) {
        if (!engine) {
            console.error('No se proporcionó un engine válido para renderizar');
            return;
        }
        
        try {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            
            for (let y = 0; y < engine.height; y++) {
                for (let x = 0; x < engine.width; x++) {
                    const state = engine.getCell(x, y);
                    this.drawCell(x, y, state);
                }
            }
            
            this.drawGrid(engine.width, engine.height);
        } catch (error) {
            console.error('Error al renderizar:', error);
        }
    }

    drawCell(x, y, state) {
        try {
            const color = this.colors[state];
            if (!color) {
                console.warn(`Color no encontrado para el estado: ${state}`);
                this.ctx.fillStyle = this.colors[STATES.EMPTY]; // Color por defecto
            } else {
                this.ctx.fillStyle = color;
            }
            
            this.ctx.fillRect(
                x * this.cellSize, 
                y * this.cellSize, 
                this.cellSize, 
                this.cellSize
            );
        } catch (error) {
            console.error(`Error al dibujar celda en (${x}, ${y}):`, error);
        }
    }

    drawGrid(width, height) {
        this.ctx.strokeStyle = '#333333';
        this.ctx.lineWidth = 0.5;
        
        // Líneas verticales
        for (let x = 0; x <= width; x++) {
            this.ctx.beginPath();
            this.ctx.moveTo(x * this.cellSize, 0);
            this.ctx.lineTo(x * this.cellSize, height * this.cellSize);
            this.ctx.stroke();
        }
        
        // Líneas horizontales
        for (let y = 0; y <= height; y++) {
            this.ctx.beginPath();
            this.ctx.moveTo(0, y * this.cellSize);
            this.ctx.lineTo(width * this.cellSize, y * this.cellSize);
            this.ctx.stroke();
        }
    }

    getGridCoordinates(mouseX, mouseY) {
        // Validar coordenadas del mouse
        if (typeof mouseX !== 'number' || typeof mouseY !== 'number') {
            console.warn('Las coordenadas del mouse deben ser números');
            return { x: 0, y: 0 };
        }
        
        const x = Math.floor(mouseX / this.cellSize);
        const y = Math.floor(mouseY / this.cellSize);
        
        // Asegurar que las coordenadas no sean negativas
        return {
            x: Math.max(0, x),
            y: Math.max(0, y)
        };
    }
}
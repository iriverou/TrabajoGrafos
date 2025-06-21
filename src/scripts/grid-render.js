// Renderizado del canvas
import { STATES } from './wireworld-engine.js';

export class GridRenderer {
    constructor(canvas, cellSize = 10) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.cellSize = cellSize;
        this.colors = {
            [STATES.EMPTY]: '#000000',
            [STATES.CONDUCTOR]: '#FFD700',
            [STATES.ELECTRON_HEAD]: '#00FFFF',
            [STATES.ELECTRON_TAIL]: '#FF00FF'
        };
    }

    render(engine) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        for (let y = 0; y < engine.height; y++) {
            for (let x = 0; x < engine.width; x++) {
                const state = engine.getCell(x, y);
                this.drawCell(x, y, state);
            }
        }
        
        this.drawGrid(engine.width, engine.height);
    }

    drawCell(x, y, state) {
        this.ctx.fillStyle = this.colors[state];
        this.ctx.fillRect(
            x * this.cellSize, 
            y * this.cellSize, 
            this.cellSize, 
            this.cellSize
        );
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
        return {
            x: Math.floor(mouseX / this.cellSize),
            y: Math.floor(mouseY / this.cellSize)
        };
    }
}
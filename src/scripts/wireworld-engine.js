// Lógica principal de Wireworld
export const STATES = {
    EMPTY: 0,
    CONDUCTOR: 1,
    ELECTRON_HEAD: 2,
    ELECTRON_TAIL: 3
};

export class WireworldEngine {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.grid = this.createEmptyGrid();
        this.generation = 0;
    }

    createEmptyGrid() {
        return Array(this.height).fill().map(() => Array(this.width).fill(STATES.EMPTY));
    }

    // Implementar reglas de Wireworld
    step() {
        const newGrid = this.createEmptyGrid();
        
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                newGrid[y][x] = this.getNextState(x, y);
            }
        }
        
        this.grid = newGrid;
        this.generation++;
    }

    getNextState(x, y) {
        const currentState = this.grid[y][x];
        
        switch(currentState) {
            case STATES.EMPTY:
                return STATES.EMPTY;
            case STATES.ELECTRON_HEAD:
                return STATES.ELECTRON_TAIL;
            case STATES.ELECTRON_TAIL:
                return STATES.CONDUCTOR;
            case STATES.CONDUCTOR:
                const electronHeadNeighbors = this.countElectronHeadNeighbors(x, y);
                return (electronHeadNeighbors === 1 || electronHeadNeighbors === 2) 
                    ? STATES.ELECTRON_HEAD 
                    : STATES.CONDUCTOR;
        }
    }

    countElectronHeadNeighbors(x, y) {
        let count = 0;
        
        // Vecindario de Moore (8 direcciones)
        for (let dy = -1; dy <= 1; dy++) {
            for (let dx = -1; dx <= 1; dx++) {
                if (dx === 0 && dy === 0) continue;
                
                const nx = x + dx;
                const ny = y + dy;
                
                if (nx >= 0 && nx < this.width && ny >= 0 && ny < this.height) {
                    if (this.grid[ny][nx] === STATES.ELECTRON_HEAD) {
                        count++;
                    }
                }
            }
        }
        
        return count;
    }

    setCell(x, y, state) {
        if (x >= 0 && x < this.width && y >= 0 && y < this.height) {
            this.grid[y][x] = state;
        }
    }

    getCell(x, y) {
        return this.grid[y][x];
    }

    clear() {
        this.grid = this.createEmptyGrid();
        this.generation = 0;
    }
}
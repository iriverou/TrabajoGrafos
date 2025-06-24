// Tipos para el simulador Wireworld

export interface WireworldEngine {
    width: number;
    height: number;
    grid: number[][];
    generation: number;
    step(): void;
    setCell(x: number, y: number, state: number): void;
    getCell(x: number, y: number): number;
    clear(): void;
    createEmptyGrid(): number[][];
    getNextState(x: number, y: number): number;
    countElectronHeadNeighbors(x: number, y: number): number;
}

export interface GridRenderer {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    cellSize: number;
    colors: Record<number, string>;
    render(engine: WireworldEngine): void;
    drawCell(x: number, y: number, state: number): void;
    drawGrid(width: number, height: number): void;
    getGridCoordinates(mouseX: number, mouseY: number): { x: number; y: number };
}

export interface UserInteractionHandler {
    canvas: HTMLCanvasElement;
    engine: WireworldEngine;
    renderer: GridRenderer;
    isDrawing: boolean;
    currentTool: string;
    currentState: number;
    brushSize: number;
    setTool(tool: string): void;
    setState(state: number): void;
    setBrushSize(size: number): void;
    clearGrid(): void;
}

export interface WireworldApp {
    engine: WireworldEngine;
    renderer: GridRenderer;
    interactionHandler: UserInteractionHandler;
    generationCounter: HTMLElement;
}

export interface GridCoordinates {
    x: number;
    y: number;
}

export const WIREWORLD_STATES = {
    EMPTY: 0,
    CONDUCTOR: 1,
    ELECTRON_HEAD: 2,
    ELECTRON_TAIL: 3
} as const;

export type WireworldState = typeof WIREWORLD_STATES[keyof typeof WIREWORLD_STATES];

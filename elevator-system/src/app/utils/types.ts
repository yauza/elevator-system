export interface Status {
    id: number;
    currentFloor: number;
    nextFloor: number;
}

export enum Direction {
    UP, DOWN, STOP
}

export interface ElevatorCall {
    startFloor: number;
    destinationFloor: number;
    direction: Direction;
}

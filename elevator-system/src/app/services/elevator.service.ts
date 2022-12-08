import { Elevator } from "../models/elevator";
import { ElevatorScheduler } from "../models/elevator-scheduler";
import { ElevatorCall } from "../utils/types";

export class ElevatorService {
    private elevatorScheduler: ElevatorScheduler = new ElevatorScheduler();

    public startSimulation(): void {
        this.elevatorScheduler.startSimulation();
    }

    public stopSimulation(): void {
        this.elevatorScheduler.stopSimulation();
    }

    public callElevator(call: ElevatorCall): void {
        this.elevatorScheduler.callElevator(call);
    }

    public addElevator(): void {
        this.elevatorScheduler.addElevator();
    }

    public removeElevator(): void {
        this.elevatorScheduler.removeElevator();
    }

    public getElevators(): Elevator[] {
        return this.elevatorScheduler.getElevators();
    }

}

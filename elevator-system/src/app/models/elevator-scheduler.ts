import { Direction, ElevatorCall } from "../utils/types";
import { Elevator } from "./elevator";

export class ElevatorScheduler {
  private runSimulation: boolean = false;
  private idCounter: number = 0;
  private elevators: Elevator[] = [];
  private calls: ElevatorCall[] = [];

  
  public async startSimulation() {
    this.runSimulation = true;
    while (this.runSimulation) {
      this.handleElevatorCalls();
      this.updateElevators();
      await new Promise(f => setTimeout(f, 1000));
    }
  }

  private handleElevatorCalls(): void {
    if (this.calls.length > 0) {
      let lastCall = this.calls.shift();
      if (lastCall) this.chooseElevatorToCall(lastCall);
    }
  }

  private updateElevators(): void {
    for (let elevator of this.elevators) {
      elevator.update();
    }
  }

  private chooseElevatorToCall(call: ElevatorCall): void {
    // 1. Check for free elevator
    let freeElevator = this.elevators.find(e => e.isFree());
    if (freeElevator) {
      freeElevator.call(call);
      return;
    }

    // 2. No free elevators - look for those going in the direction of the call
    let sameDirectionElevator = this.elevators.find(e => {
      // elevator picking up and delivering passengers (new) during one ride (UP or DOWN)
      if (e.getDirection() == Direction.UP && e.currentFloor <= call.startFloor && call.direction == Direction.UP) return e;
      if (e.getDirection() == Direction.DOWN && e.currentFloor >= call.startFloor && call.direction == Direction.DOWN) return e;
      // elevator picking up passengers 
      if (e.getDirection() == Direction.UP && e.currentFloor <= call.startFloor) return e;
      if (e.getDirection() == Direction.DOWN && e.currentFloor >= call.startFloor) return e;
      return;
    });
    if (sameDirectionElevator) {
      sameDirectionElevator.call(call);
      return;
    }

    // 3. No elevators going in the same direction - find the least "busy" elevator
    let minStops = 9999;
    let leastBusyElevator = null;
    for (let elevator of this.elevators) {
      let elevatorStops = elevator.getStopsNumber();
      if (minStops > elevatorStops) {
        minStops = elevatorStops;
        leastBusyElevator = elevator;
      }
    }
    if (leastBusyElevator) {
      leastBusyElevator.call(call);
      return;
    }
    return;
  }

  public callElevator(call: ElevatorCall): void {
    this.calls.push(call);
  } 
  
  public addElevator(): void {
    let a = new Elevator(this.idCounter);
    this.elevators.push(a);
    this.idCounter += 1;
  }

  public removeElevator(): void {
    this.elevators.pop();
    this.idCounter -= 1;
  }

  public getElevators(): Elevator[] {
    return this.elevators;
  }

  public stopSimulation() {
    this.runSimulation = false;
  }

}

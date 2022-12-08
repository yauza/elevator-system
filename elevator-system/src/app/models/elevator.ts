import { Direction, ElevatorCall, Status } from "../utils/types";

var SortedArraySet = require("collections/sorted-array-set")

export class Elevator {

  id: number = 0;

  public up: boolean = false;
  public down: boolean = false;
  private direction: Direction = Direction.STOP;
  private free: boolean = true;

  public currentFloor: number = 0;
  public nextFloor: number = 0;

  private calls: ElevatorCall[] = [];
  private upStops = new SortedArraySet();
  private downStops = new SortedArraySet();
  private destinationFloors: Map<number, number[]> = new Map();

  constructor(id: number) { this.id = id; }

  public update(): void {

    if (this.currentFloor == this.nextFloor) {
      let nextStop = null;

      this.destinationFloors.get(this.currentFloor)?.forEach(df => {
        if (df > this.currentFloor) this.upStops.push(df);
        else this.downStops.push(df);
      });
      this.destinationFloors.delete(this.currentFloor);

      if (this.goingUp()) {
        nextStop = this.upStops.shift();
      } else if (this.goingDown()) {
        nextStop = this.downStops.pop();
      } else {
        if (this.upStops.length > 0) nextStop = this.upStops.shift();
        else nextStop = this.downStops.pop();
      }

      if (!nextStop) {
        this.direction = Direction.STOP;
        if (this.upStops.length == 0 && this.downStops.length == 0) this.free = true;
        return;
      }
      this.nextFloor = nextStop;

    } else {
      

      if (this.currentFloor < this.nextFloor) {
        this.direction = Direction.UP;
        let potentialStop = this.upStops.shift();
        if (potentialStop != undefined) {
          if (potentialStop < this.nextFloor) {
            this.upStops.push(this.nextFloor)
            this.nextFloor = potentialStop;
          } else {
            this.upStops.push(potentialStop);
          }
        }
        this.currentFloor += 1;
      } else if (this.currentFloor > this.nextFloor) {
        this.direction = Direction.DOWN;
        let potentialStop = this.downStops.pop();

        if (potentialStop != undefined) {
          if (potentialStop > this.nextFloor) {
            this.downStops.push(this.nextFloor)
            this.nextFloor = potentialStop;
          } else {
            this.downStops.push(potentialStop);
          }
        }
        this.currentFloor -= 1;
      } else {
        this.direction = Direction.STOP;
      }
    }

  }

  public call(elevatorCall: ElevatorCall): void {
    if (elevatorCall.startFloor > this.currentFloor) {
      this.upStops.push(elevatorCall.startFloor);
    } else if (elevatorCall.startFloor < this.currentFloor) {
      this.downStops.push(elevatorCall.startFloor);
    }

    if (this.destinationFloors.has(elevatorCall.startFloor)) {
      this.destinationFloors.get(elevatorCall.startFloor)?.push(elevatorCall.destinationFloor);
    } else this.destinationFloors.set(elevatorCall.startFloor, [elevatorCall.destinationFloor]);

    this.calls.push(elevatorCall);
    this.free = false;
  }

  public status(): Status {
    return {id: this.id, currentFloor: this.currentFloor, nextFloor: this.nextFloor}
  }

  public isFree(): boolean {
    return this.free;
  }

  public getDirection(): Direction {
    return this.direction;
  }

  public goingUp(): boolean {
    return this.direction == Direction.UP;
  }

  public goingDown(): boolean {
    return this.direction == Direction.DOWN;
  }

  public getStopsNumber(): number {
    return this.upStops.length + this.downStops.length;
  }

}

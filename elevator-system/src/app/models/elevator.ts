import { Direction, ElevatorCall, Status } from "../utils/types";

export class Elevator {

  id: number = 0;

  public up: boolean = false;
  public down: boolean = false;
  private direction: Direction = Direction.STOP;
  private free: boolean = true;

  public currentFloor: number = 0;
  public nextFloor: number = 0;

  calls: ElevatorCall[] = [];
  upStops: number[] = [];
  downStops: number[] = [];

  constructor(id: number) { this.id = id; }

  public update(): void {

    if (this.currentFloor == this.nextFloor) {
      let nextStop = null;

      if (this.goingUp()) {
        nextStop = this.upStops.shift();
      } else if (this.goingDown()) {
        nextStop = this.downStops.shift();
      } else {
        if (this.upStops.length > 0) nextStop = this.upStops.shift();
        else nextStop = this.downStops.shift();
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
        this.currentFloor += 1;
      } else if (this.currentFloor > this.nextFloor) {
        this.direction = Direction.DOWN;
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

    if (elevatorCall.direction == Direction.UP) this.upStops.push(elevatorCall.destinationFloor);
    else this.downStops.push(elevatorCall.destinationFloor);

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

}

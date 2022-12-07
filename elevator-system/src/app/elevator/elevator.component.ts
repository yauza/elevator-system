import { transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Elevator } from '../models/elevator';
import { Direction, ElevatorCall } from '../utils/types';
import { Status } from '../utils/types';


@Component({
  selector: 'app-elevator',
  templateUrl: './elevator.component.html',
  styleUrls: ['./elevator.component.scss'],
  // animations: [move]
})
export class ElevatorComponent implements OnInit {

  // @Input() id: number = 0;

  // @Input() up: boolean = false;
  // @Input() down: boolean = false;

  // @Input() currentFloor: number = 0;
  // @Input() nextFloor: number = 0;

  @Input() elevator!: Elevator;

  // calls: ElevatorCall[] = [];

  constructor() { }

  ngOnInit(): void { }

  // public update() {
  //   // elevator reached its destination
  //   if (this.currentFloor == this.nextFloor) {
  //     let lastCall = this.calls.pop();
  //     if (!lastCall) return;
  //     this.nextFloor = lastCall.startFloor;
  //   } else {
  //     if (this.currentFloor < this.nextFloor) {
  //       this.up = true;
  //       this.down = false;
  //       this.currentFloor += 1;
  //     } else if (this.currentFloor > this.nextFloor) {
  //       this.up = false;
  //       this.down = true;
  //       this.currentFloor -= 1;
  //     } else {
  //       this.up = false;
  //       this.down = false;
  //     }
  //   }

  // }

  // public call(elevatorCall: ElevatorCall): void {
  //   this.calls.push(elevatorCall);
  // }

  // public status(): Status {
  //   return {id: this.id, currentFloor: this.currentFloor, nextFloor: this.nextFloor}
  // }

  // public isFree(): boolean {
  //   return !this.up && !this.down;
  // }

  // public getDirection(): Direction {
  //   if (this.up) return Direction.UP;
  //   else if (this.down) return Direction.DOWN;
  //   else return Direction.STOP;
  // }

  // public setId(id: string) {
  //   this.id = id;
  // }

}

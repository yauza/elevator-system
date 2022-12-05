import { Component } from '@angular/core';
import {EventEmitter } from '@angular/core';
import { ElevatorComponent } from './elevator/elevator.component';



interface Elevator {
  id: number;
  value: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'elevator-system';

  idCounter = 0;

  elevators: ElevatorComponent[] = [];
  elevatorIds: number[] = [];

  public addElevator() {
    this.elevators.push(new ElevatorComponent());
    this.idCounter += 1;
  }

}

import { Component } from '@angular/core';
import {EventEmitter } from '@angular/core';
import { ElevatorComponent } from './elevator/elevator.component';
import { Elevator } from './models/elevator';
import { ElevatorScheduler } from './models/elevator-scheduler';
import { Direction, ElevatorCall } from './utils/types';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'elevator-system';

  public startStopButton: boolean = false;
  public elevatorScheduler: ElevatorScheduler = new ElevatorScheduler();
  

  public async startSimulation() {
    this.startStopButton = true;
    this.elevatorScheduler.startSimulation();
  }

  public stopSimulation() {
    this.startStopButton = false;
    this.elevatorScheduler.stopSimulation();
  }

  public getButtonTitle() {
    return this.startStopButton? 'Stop' : 'Start';
  }

}

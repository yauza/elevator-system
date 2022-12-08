import { Component } from '@angular/core';
import {EventEmitter } from '@angular/core';
import { ElevatorComponent } from './elevator/elevator.component';
import { Elevator } from './models/elevator';
import { ElevatorScheduler } from './models/elevator-scheduler';
import { ElevatorService } from './services/elevator.service';
import { Direction, ElevatorCall } from './utils/types';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'elevator-system';

  constructor(public elevatorService: ElevatorService) { }

  public startStopButton: boolean = false;

  public async startSimulation() {
    this.startStopButton = true;
    this.elevatorService.startSimulation();
  }

  public stopSimulation() {
    this.startStopButton = false;
    this.elevatorService.stopSimulation();
  }

  public getButtonTitle() {
    return this.startStopButton? 'Stop' : 'Start';
  }

}

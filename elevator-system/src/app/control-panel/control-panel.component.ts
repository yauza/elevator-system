import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ElevatorService } from '../services/elevator.service';
import { Direction, ElevatorCall } from '../utils/types';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent implements OnInit {

  floors: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  startFloor = new FormControl(0, Validators.required);
  destinationFloor = new FormControl(0, Validators.required);

  constructor(private elevatorService: ElevatorService) { }

  ngOnInit(): void {
  }

  public callElevator() {
    let sf = this.startFloor.value || 0;
    let df = this.destinationFloor.value || 0;
    let newCall: ElevatorCall = {
      startFloor: sf, 
      destinationFloor: df, 
      direction: sf > df ? Direction.DOWN : Direction.UP
    };
    this.elevatorService.callElevator(newCall);
  }

}

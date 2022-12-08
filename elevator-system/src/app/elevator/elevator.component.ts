import { Component, Input, OnInit } from '@angular/core';
import { Elevator } from '../models/elevator';


@Component({
  selector: 'app-elevator',
  templateUrl: './elevator.component.html',
  styleUrls: ['./elevator.component.scss']
})
export class ElevatorComponent implements OnInit {

  @Input() elevator!: Elevator;

  constructor() { }

  ngOnInit(): void { }

}

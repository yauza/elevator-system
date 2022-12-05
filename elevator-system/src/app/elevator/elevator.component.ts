import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-elevator',
  templateUrl: './elevator.component.html',
  styleUrls: ['./elevator.component.scss']
})
export class ElevatorComponent implements OnInit {

  @Input() id: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}

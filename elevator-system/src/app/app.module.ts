import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ElevatorComponent } from './elevator/elevator.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    ElevatorComponent,
    ControlPanelComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

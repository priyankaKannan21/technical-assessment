import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sprinkler-main',
  templateUrl: './sprinkler-main.component.html',
  styleUrls: ['./sprinkler-main.component.scss'],
})
export class SprinklerMainComponent {
  isChecked: boolean = false;

  toStartApplication() {
  }
}

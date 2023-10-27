import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {
  ZONE_SELECTOR,
  ZONE_SELECTOR_VALUE,
} from '../../constants/sprinkler.constants';
import { SprinklerService } from '../../services/sprinkler.service';
import { ConfigurationData } from '../../models/sprinkler.models';

@Component({
  selector: 'app-zone-selector',
  templateUrl: './zone-selector.component.html',
  styleUrls: ['./zone-selector.component.scss'],
})
export class ZoneSelectorComponent implements OnInit {
  zoneSelector: string[] = ZONE_SELECTOR;
  selectedZone: string = 'Front';
  totalTimeValue: number = 0;
  timeValue: number = 0;
  isChecked: boolean = false;

  @Input('isPowerOn') isEnabled: boolean = false;
  @Input('zoneValue') zoneValue!: string;

  @Output() sendSelectedZone = new EventEmitter<string>();

  ngOnInit(): void {
    this.selectedZone = this.sprinklerService.selectedZone;
  }

  constructor(private sprinklerService: SprinklerService) {}
  onChange(zoneValue: string) {
    this.sprinklerService.selectedZone = zoneValue;
    this.sendSelectedZone.emit(zoneValue);
  }

  start() {
    this.isChecked = true;

    let arr: number[] = [
      this.sprinklerService.frontZone.zoneOrder,
      this.sprinklerService.backZone.zoneOrder,
      this.sprinklerService.rightZone.zoneOrder,
      this.sprinklerService.leftZone.zoneOrder,
    ];

    let newArr: number[] = arr.filter(
      (currentValue, currentIndex) => arr.indexOf(currentValue) !== currentIndex
    );

    if (newArr.length !== 0) {
      alert('Warning!');
      this.isChecked = false;
      return;
    }

    this.totalTimeValue =
      this.sprinklerService.frontZone.zoneTime +
      this.sprinklerService.backZone.zoneTime +
      this.sprinklerService.rightZone.zoneTime +
      this.sprinklerService.leftZone.zoneTime;

    for (let i = 0; i < this.totalTimeValue; i++) {
      setTimeout(() => {
        this.timeValue = this.timeValue + 1;
      }, 1000 * (i + 1));
    }
  }
}

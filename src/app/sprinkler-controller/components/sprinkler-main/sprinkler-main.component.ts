import { Component, EventEmitter, Output } from '@angular/core';
import { SprinklerService } from '../../services/sprinkler.service';
import { ZONE_SELECTOR_VALUE } from '../../constants/sprinkler.constants';
import { ConfigurationData } from '../../models/sprinkler.models';

@Component({
  selector: 'app-sprinkler-main',
  templateUrl: './sprinkler-main.component.html',
  styleUrls: ['./sprinkler-main.component.scss'],
})
export class SprinklerMainComponent {
  isChecked: boolean = false;
  selectedZone!: string;
  selectedZoneOrder!: number;
  selectedZoneTime!: number;

  ngOnInit(): void {
    this.selectedZone = this.sprinklerService.selectedZone;
    this.selectedZoneOrder = this.sprinklerService.zoneOrder;
    this.selectedZoneTime = this.sprinklerService.zoneTime;
  }

  constructor(private sprinklerService: SprinklerService) {}
  toStartApplication() {}

  sendZone(event: any) {
    this.selectedZone = event;
    this.findZoneData(this.selectedZone);
  }

  sendOrder(event: any) {
    this.selectedZoneOrder = event;
    if (this.selectedZone === ZONE_SELECTOR_VALUE.FRONT) {
      this.sprinklerService.frontZone.zoneOrder = this.selectedZoneOrder;
    } else if (this.selectedZone === ZONE_SELECTOR_VALUE.BACK) {
      this.sprinklerService.backZone.zoneOrder = this.selectedZoneOrder;
    } else if (this.selectedZone === ZONE_SELECTOR_VALUE.RIGHT) {
      this.sprinklerService.rightZone.zoneOrder = this.selectedZoneOrder;
    } else {
      this.sprinklerService.leftZone.zoneOrder = this.selectedZoneOrder;
    }
  }

  sendTime(event: any) {
    this.selectedZoneTime = event;
    if (this.selectedZone === ZONE_SELECTOR_VALUE.FRONT) {
      this.sprinklerService.frontZone.zoneTime = this.selectedZoneTime;
    } else if (this.selectedZone === ZONE_SELECTOR_VALUE.BACK) {
      this.sprinklerService.backZone.zoneTime = this.selectedZoneTime;
    } else if (this.selectedZone === ZONE_SELECTOR_VALUE.RIGHT) {
      this.sprinklerService.rightZone.zoneTime = this.selectedZoneTime;
    } else {
      this.sprinklerService.leftZone.zoneTime = this.selectedZoneTime;
    }
  }

  findZoneData(zoneValue: string) {
    if (zoneValue === ZONE_SELECTOR_VALUE.FRONT) {
      this.changeValue(this.sprinklerService.frontZone);
    } else if (zoneValue === ZONE_SELECTOR_VALUE.BACK) {
      this.changeValue(this.sprinklerService.backZone);
    } else if (zoneValue === ZONE_SELECTOR_VALUE.RIGHT) {
      this.changeValue(this.sprinklerService.rightZone);
    } else {
      this.changeValue(this.sprinklerService.leftZone);
    }
  }
  changeValue(configurationData: ConfigurationData) {
    this.selectedZoneOrder = configurationData.zoneOrder;
    this.selectedZoneTime = configurationData.zoneTime;
  }
}

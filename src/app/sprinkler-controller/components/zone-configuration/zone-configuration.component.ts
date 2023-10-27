import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ZONE_SELECTOR_VALUE } from '../../constants/sprinkler.constants';
import { ConfigurationData } from '../../models/sprinkler.models';
import { SprinklerService } from '../../services/sprinkler.service';

@Component({
  selector: 'app-zone-configuration',
  templateUrl: './zone-configuration.component.html',
  styleUrls: ['./zone-configuration.component.scss'],
})
export class ZoneConfigurationComponent {
  selectedZoneOrder: number = 1;
  selectedZoneTime: number = 1;
  @Input('isPowerOn') isEnabled: boolean = false;
  @Input('zoneValue') zoneValue!: string;
  @Input('zoneOrder') zoneOrder!: number;
  @Input('zoneTime') zoneTime!: number;

  @Output() sendSelectedOrder = new EventEmitter<number>();
  @Output() sendSelectedTime = new EventEmitter<number>();

  ngOnInit(): void {
    this.selectedZoneOrder = this.sprinklerService.zoneOrder;
    this.selectedZoneTime = this.sprinklerService.zoneTime;
  }

  constructor(private sprinklerService: SprinklerService) {}

  zoneOrderChange(orderValue: number) {
    this.sprinklerService.zoneOrder = orderValue;
    this.sendSelectedOrder.emit(orderValue);
  }
  zoneTimeChange(timeValue: any) {
    this.zoneTime = timeValue.target.value;
    this.sprinklerService.zoneTime = timeValue.target.value;
    this.sendSelectedTime.emit(timeValue.target.value);
  }
}

import { Component, Input } from '@angular/core';
import { ZONE_SELECTOR } from '../../constants/sprinkler.contants';

@Component({
  selector: 'app-zone-selector',
  templateUrl: './zone-selector.component.html',
  styleUrls: ['./zone-selector.component.scss'],
})
export class ZoneSelectorComponent {
  zoneSelector: string[] = ZONE_SELECTOR;
  selectedZone: string = 'Front';
  @Input('isPowerOn') isEnabled: boolean = false;
  onChange(zoneValue: string) {
  }
}

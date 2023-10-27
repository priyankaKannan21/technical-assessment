import { Injectable } from '@angular/core';
import {
  BACK_ZONE_CONFIGURATION,
  FRONT_ZONE_CONFIGURATION,
  LEFT_ZONE_CONFIGURATION,
  RIGHT_ZONE_CONFIGURATION,
} from '../constants/sprinkler.constants';
import { ConfigurationData } from '../models/sprinkler.models';

@Injectable({
  providedIn: 'root',
})
export class SprinklerService {
  selectedZone: string = FRONT_ZONE_CONFIGURATION.zoneSelector;
  zoneOrder: number = FRONT_ZONE_CONFIGURATION.zoneOrder;
  zoneTime: number = FRONT_ZONE_CONFIGURATION.zoneTime;

  frontZone: ConfigurationData = FRONT_ZONE_CONFIGURATION;
  backZone: ConfigurationData = BACK_ZONE_CONFIGURATION;
  rightZone: ConfigurationData = RIGHT_ZONE_CONFIGURATION;
  leftZone: ConfigurationData = LEFT_ZONE_CONFIGURATION;

  constructor() {}
}

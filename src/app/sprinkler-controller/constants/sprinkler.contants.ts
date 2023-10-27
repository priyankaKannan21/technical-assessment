import { ConfigurationData } from '../models/sprinkler.models';

export const ZONE_SELECTOR: string[] = ['Front', 'Back', 'Right', 'Left'];

export const FRONT_ZONE_CONFIGURATION: ConfigurationData = {
  zoneSelector: 'Front',
  zoneOrder: 1,
  zoneTime: 1,
};

export const BACK_ZONE_CONFIGURATION: ConfigurationData = {
  zoneSelector: 'Back',
  zoneOrder: 2,
  zoneTime: 1,
};

export const RIGHT_ZONE_CONFIGURATION: ConfigurationData = {
  zoneSelector: 'Right',
  zoneOrder: 3,
  zoneTime: 1,
};

export const LEFT_ZONE_CONFIGURATION: ConfigurationData = {
  zoneSelector: 'Left',
  zoneOrder: 4,
  zoneTime: 1,
};

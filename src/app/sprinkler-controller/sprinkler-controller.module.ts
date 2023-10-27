import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { SprinklerMainComponent } from './components/sprinkler-main/sprinkler-main.component';
import { ZoneSelectorComponent } from './components/zone-selector/zone-selector.component';
import { ZoneConfigurationComponent } from './components/zone-configuration/zone-configuration.component';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    SprinklerMainComponent,
    ZoneSelectorComponent,
    ZoneConfigurationComponent,
  ],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatRadioModule,
    FormsModule,
    MatSliderModule,
  ],
  exports: [SprinklerMainComponent],
})
export class SprinklerControllerModule {}

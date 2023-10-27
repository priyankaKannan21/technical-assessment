import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { SprinklerMainComponent } from './components/sprinkler-main/sprinkler-main.component';
import { ZoneSelectorComponent } from './components/zone-selector/zone-selector.component';
import { ZoneConfigurationComponent } from './components/zone-configuration/zone-configuration.component';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

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
    MatInputModule,
    MatFormFieldModule,
    MatSlideToggleModule,
  ],
  exports: [SprinklerMainComponent],
})
export class SprinklerControllerModule {}

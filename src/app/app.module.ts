import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SprinklerMainComponent } from './components/sprinkler-main/sprinkler-main.component';
import { ZoneSelectorComponent } from './components/zone-selector/zone-selector.component';
import { ZoneConfigurationComponent } from './components/zone-configuration/zone-configuration.component';

@NgModule({
  declarations: [
    AppComponent,
    SprinklerMainComponent,
    ZoneSelectorComponent,
    ZoneConfigurationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

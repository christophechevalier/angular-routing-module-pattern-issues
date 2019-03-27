import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { UpdateDetailsModule } from './update-details/update-details.module';
import { AddDetailsModule } from './add-details/add-details.module';

@NgModule({
  imports: [
    CommonModule,
    SettingsRoutingModule,
    UpdateDetailsModule,
    AddDetailsModule,
  ],
  declarations: [SettingsComponent],
})
export class SettingsModule {}

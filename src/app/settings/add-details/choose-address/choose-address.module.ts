import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChooseAddressRoutingModule } from './choose-address-routing.module';
import { ChooseAddressComponent } from './choose-address.component';

@NgModule({
  imports: [CommonModule, ChooseAddressRoutingModule],
  declarations: [ChooseAddressComponent],
})
export class ChooseAddressModule {}

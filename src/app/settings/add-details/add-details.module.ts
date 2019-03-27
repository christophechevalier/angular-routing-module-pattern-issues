import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDetailsRoutingModule } from './add-details-routing.module';
import { AddDetailsComponent } from './add-details.component';
import { ChooseAddressModule } from './choose-address/choose-address.module';

@NgModule({
  imports: [CommonModule, AddDetailsRoutingModule, ChooseAddressModule],
  declarations: [AddDetailsComponent],
})
export class AddDetailsModule {}

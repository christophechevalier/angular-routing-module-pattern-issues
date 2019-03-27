import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateDetailsComponent } from './update-details.component';
import { UpdateDetailsRoutingModule } from './update-details-routing.module';

@NgModule({
  imports: [CommonModule, UpdateDetailsRoutingModule],
  declarations: [UpdateDetailsComponent],
})
export class UpdateDetailsModule {}

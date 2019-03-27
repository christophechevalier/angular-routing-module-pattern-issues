import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChoosePlanRoutingModule } from './choose-plan-routing.module';
import { ChoosePlanComponent } from './choose-plan.component';

@NgModule({
  imports: [CommonModule, ChoosePlanRoutingModule],
  declarations: [ChoosePlanComponent],
})
export class ChoosePlanModule {}

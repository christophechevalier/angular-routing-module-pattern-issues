import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChoosePlanComponent } from './choose-plan.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        // see the above line ^,
        // now you don't need to define the prefix
        // because this is a lazy loaded module
        // So there is a difference between how
        // lazy and eager modules' routes are being defined
        // and that's a consistency issue
        component: ChoosePlanComponent,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class ChoosePlanRoutingModule {}

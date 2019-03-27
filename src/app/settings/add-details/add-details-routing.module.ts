import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddDetailsComponent } from './add-details.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'settings/add-details',
        component: AddDetailsComponent,

        children: [
          {
            path: 'choose-plan',
            loadChildren:
              'app/settings/add-details/choose-plan/choose-plan.module#ChoosePlanModule',
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AddDetailsRoutingModule {}

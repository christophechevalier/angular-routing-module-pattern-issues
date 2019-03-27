import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UpdateDetailsComponent } from './update-details.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'update-details', component: UpdateDetailsComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class UpdateDetailsRoutingModule {}

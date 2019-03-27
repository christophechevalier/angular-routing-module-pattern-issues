import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChooseAddressComponent } from './choose-address.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'settings/add-details/choose-address',
        // see the above line ^,
        // you need to repeat your *whole* address
        // every time you add a new path
        component: ChooseAddressComponent,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class ChooseAddressRoutingModule {}

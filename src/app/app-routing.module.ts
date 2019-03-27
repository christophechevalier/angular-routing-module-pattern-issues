import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FrontComponent } from './front/front.component';

@NgModule({
  imports: [RouterModule.forRoot([{ path: '', component: FrontComponent }])],
  exports: [RouterModule],
})
export class AppRoutingModule {}

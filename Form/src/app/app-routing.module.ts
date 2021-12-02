import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { SecondPageChildAComponent } from './second-page-child-a/second-page-child-a.component';
import { SecondPageChildBComponent } from './second-page-child-b/second-page-child-b.component';

const routes: Routes = [
  { path: 'firstPage', component: FirstPageComponent },
  {
    path: 'secondPage',
    component: SecondPageComponent,
    children: [
      {
        path: 'secondPage-childA',
        component: SecondPageChildAComponent,
      },
      {
        path: 'secondPage-childB',
        component: SecondPageChildBComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

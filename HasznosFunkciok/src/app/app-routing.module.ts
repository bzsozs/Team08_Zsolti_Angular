import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JqueryComponent } from './jquery/jquery.component';
import { TablaComponent } from './tabla/tabla.component';

const routes: Routes = [
  { path: 'jquery', component: JqueryComponent },
  { path: 'tabla', component: TablaComponent },
  { path: '**', component: TablaComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

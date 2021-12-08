import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpCreateComponent } from './emp-create/emp-create.component';
import { EmpEditComponent } from './emp-edit/emp-edit.component';
import { EmpListComponent } from './emp-list/emp-list.component';

const routes: Routes = [

 { path : '', pathMatch: 'full',redirectTo : 'create' },
 { path : 'create',component : EmpCreateComponent},
 { path : 'edit/: id',component :EmpEditComponent},
{path : 'list',component : EmpListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

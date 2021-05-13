import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { DetailsComponent } from './details.component';
import { AddEditComponent } from './add-edit.component';
import { ListComponent } from './list.component';
import { AuthGuard } from '../_helpers';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'list/:type', component: ListComponent },
            { path: ':id', component: DetailsComponent },
            { path: 'add/:type', component: AddEditComponent, canActivate: [AuthGuard] },
            { path: 'edit/:id', component: AddEditComponent, canActivate: [AuthGuard] }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PetRoutingModule { }
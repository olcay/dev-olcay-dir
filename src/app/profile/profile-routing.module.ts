import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { DetailsComponent } from './details.component';
import { UpdateComponent } from './update.component';
import { AuthGuard } from '@app/_helpers';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'update', component: UpdateComponent, canActivate: [AuthGuard] },
            { path: ':id', component: DetailsComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfileRoutingModule { }
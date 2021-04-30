import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PetRoutingModule } from './pet-routing.module';
import { LayoutComponent } from './layout.component';
import { DetailsComponent } from './details.component';
import { AddEditComponent } from './add-edit.component';
import { ModalModule } from '@app/_modal';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        PetRoutingModule,
        ModalModule
    ],
    declarations: [
        LayoutComponent,
        DetailsComponent,
        AddEditComponent
    ]
})
export class PetModule { }
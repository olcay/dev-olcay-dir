import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PetsRoutingModule } from './pets-routing.module';
import { ListComponent } from './list.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        PetsRoutingModule
    ],
    declarations: [
        ListComponent
    ]
})
export class PetsModule { }
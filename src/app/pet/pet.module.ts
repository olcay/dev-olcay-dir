import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PetRoutingModule } from './pet-routing.module';
import { LayoutComponent } from './layout.component';
import { DetailsComponent } from './details.component';
import { AddEditComponent } from './add-edit.component';
import { ListComponent } from './list.component';
import { SearchComponent } from './components/search.component';
import { CardComponent } from './components/card.component';
import { ModalModule } from '@app/_modal';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        PetRoutingModule,
        ModalModule,
        SharedModule
    ],
    declarations: [
        LayoutComponent,
        DetailsComponent,
        AddEditComponent,
        ListComponent,
        SearchComponent,
        CardComponent
    ],
    exports: [
        SearchComponent,
        CardComponent
    ]
})
export class PetModule { }
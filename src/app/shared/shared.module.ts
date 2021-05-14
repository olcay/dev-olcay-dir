import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginationComponent } from './components/pagination/pagination.component';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';


@NgModule({
  declarations: [
    PaginationComponent,
    ImageUploadComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PaginationComponent,
    ImageUploadComponent
  ]
})
export class SharedModule { }

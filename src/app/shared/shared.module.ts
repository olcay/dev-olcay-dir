import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginationComponent } from './components/pagination/pagination.component';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { ReplaceNullDateWithTextPipe } from './pipes/replace-null-date-with-text.pipe';
import { ThumbnailPipe } from './pipes/thumbnail.pipe';


@NgModule({
  declarations: [
    PaginationComponent,
    ImageUploadComponent,
    ReplaceNullDateWithTextPipe,
    ThumbnailPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PaginationComponent,
    ImageUploadComponent,
    ReplaceNullDateWithTextPipe,
    ThumbnailPipe
  ]
})
export class SharedModule { }

import { Component, Input } from '@angular/core';
import { AlertService } from '@app/_services';
import { FileParameter, PetsApiClient } from '@app/_services/petsapi.client';

@Component({
  selector: 'image-upload',
  templateUrl: 'image-upload.component.html',
  styleUrls: ['image-upload.component.less']
})
export class ImageUploadComponent {
  @Input() petId: string;
  pending: boolean = false;

  constructor(private client: PetsApiClient,
    private alertService: AlertService) { }

  processFile(event: any) {
    let files: FileParameter[] = [];
    for (let file of event.target.files) {
      let fileParameter: FileParameter = { data: file, fileName: file.name };
      files.push(fileParameter);
    }

    if (files.length > 0){
      this.pending = true;
      this.client.addImage(this.petId, files).subscribe(
        (res) => {
          this.pending = false;
        },
        (err) => {
          this.pending = false;
          this.alertService.error(`Resim yüklenemedi.`);
        });
    }
  }
}
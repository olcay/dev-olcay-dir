import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thumbnail'
})
export class ThumbnailPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value?.images.length > 0 && value?.images[0]?.thumbnailUrl){
      return value.images[0].thumbnailUrl;
    }
    
    return '//placekitten.com/348/232';
  }

}

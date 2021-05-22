import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceNullDateWithText'
})
export class ReplaceNullDateWithTextPipe extends DatePipe implements PipeTransform {

  transform(value: any, replaceText: string = 'N/A'): any {
    if (typeof value === 'undefined' || value === null) {
      return replaceText;
    }

    return super.transform(value, "MMM d, y");
  }

}

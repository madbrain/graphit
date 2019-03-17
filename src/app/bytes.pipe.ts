import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bytes'
})
export class BytesPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const bytes = parseInt(value);
    if (isNaN(bytes)) {
      return "...";
    }
    const units = [' bytes', ' KB', ' MB', ' GB', ' TB', ' PB', ' EB', ' ZB', ' YB'];
    const p = bytes > 0 ? Math.floor(Math.log(bytes) / Math.LN2 / 10) : 0;
    const u = Math.round(bytes / Math.pow(2, 10 * p));
    return u + units[p];
  }

}

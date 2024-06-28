import {Pipe, PipeTransform} from '@angular/core';
import {DatePipe} from "@angular/common";

@Pipe({
  name: 'customDate',
  standalone: true
})
export class CustomDatePipe implements PipeTransform {

  transform(value: any, format: string = 'HH:mm:ss MMM dd yyyy'): any {
    if (value instanceof Date) {
      return new DatePipe('en-US').transform(value, format)
    }
    return value
  }
}

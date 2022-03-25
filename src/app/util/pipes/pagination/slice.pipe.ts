import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'slice'
})
export class SlicePipe implements PipeTransform {

  transform(value: any, currentPage: number, itemForPage: number): any {
    const startPage = currentPage * itemForPage ;
    const endPage = startPage + (+itemForPage);
    return _.slice(value, startPage, endPage);
  }

}

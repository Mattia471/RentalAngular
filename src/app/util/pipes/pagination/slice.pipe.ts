import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'slice'
})
export class SlicePipe implements PipeTransform {

  transform(value: any, currentPage: number, itemForPage: number): any {
    const startPage = currentPage * itemForPage ;
    const endPage = startPage + itemForPage/1;

    console.log(startPage)
    console.log(endPage)
    console.log(_.slice(value, startPage, endPage))
    return _.slice(value, startPage, endPage);
  }

}

import {Pipe, PipeTransform} from '@angular/core';
import {MyArray} from "../config-template/table/config";

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(languages: MyArray[], searchInput: any): any[] {
    if (!searchInput) { //se input vuoto mostra tutto
      return languages;
    }//altrimenti mostra filtrato per cognome
    searchInput = searchInput.toLowerCase();
    return languages.filter(
      x => x.surname.toLowerCase().includes(searchInput),
    )
  }
}

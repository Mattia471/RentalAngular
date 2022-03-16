import {Directive, Input, ElementRef, Renderer2, HostListener} from "@angular/core";
import {Sort} from "./sort"

@Directive({
  selector: '[appSort]'
})
export class SortDirective {

  @Input() appSort!: Array<any>;

  constructor(private renderer: Renderer2, private targetElem: ElementRef) {
  }

  @HostListener("click")
  sortDate() {
    //creazione oggetto della classe Sort
    const sort = new Sort();
    const elem = this.targetElem.nativeElement;

    const order = elem.getAttribute("data-order");
    const type = elem.getAttribute("data-type");
    const property = elem.getAttribute("data-name");
    if (order === "desc"){ //se l'ordine è decrescente
      this.appSort.sort(sort.startSort(property,order,type)); //ordina
      elem.setAttribute("data-order","asc") //setta metadato cella in crescente
    }else{
      this.appSort.sort(sort.startSort(property,order,type)); //ordina
      elem.setAttribute("data-order","desc") //setta metadato cella in decrescente
    }
  }
}

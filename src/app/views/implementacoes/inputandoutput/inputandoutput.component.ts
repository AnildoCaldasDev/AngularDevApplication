import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { BibliotecarxjsService } from '../../../services/bibliotecarxjs.service';

@Component({
  selector: "app-inputandoutput",
  templateUrl: "./inputandoutput.component.html",
})
export class InputandoutputComponent implements OnInit {
  constructor(private _bblRjxs: BibliotecarxjsService) {}
  //URL: https://angular.io/guide/inputs-outputs

  @ViewChild('idModelo') modeloPlanoId: ElementRef;

  items: string[] = ["Item 1", "Item 2"];

  inputMessage: string = "Texto do pai em variavel";
  ngOnInit(): void {}

  addItem(newItem: string) {
    this.items.push(newItem);
  }

  deleteItem(itemToDelete: string) {
    let indexItem = this.items.indexOf(itemToDelete);
    if (indexItem > -1) this.items.splice(indexItem, 1);
  }

  atualizarValor(){
    let valor: number = this.modeloPlanoId.nativeElement.value;
    this._bblRjxs.atualizaModeloPlano(valor);
  }

}

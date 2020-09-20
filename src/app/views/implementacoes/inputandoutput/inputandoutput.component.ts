import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-inputandoutput",
  templateUrl: "./inputandoutput.component.html",
})
export class InputandoutputComponent implements OnInit {
  constructor() {}
  //URL: https://angular.io/guide/inputs-outputs

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
}

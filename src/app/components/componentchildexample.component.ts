import {
  Component,
  Input,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
} from "@angular/core";

@Component({
  selector: "app-componentchildexample",
  templateUrl: "./componentchildexample.component.html",
})
export class ComponentchildexampleComponent implements OnInit {
  @Input() item: string;
  @Output() newItemEvent = new EventEmitter<string>();
  @Output() deleteItemEvent = new EventEmitter<string>();

  //https://itnext.io/working-with-angular-5-template-reference-variable-e5aa59fb9af
  @ViewChild("newItem") newItemInputRef: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
    this.newItemInputRef.nativeElement.value = "";
  }

  deleteItem(value: string) {
    this.deleteItemEvent.emit(value);
    this.newItemInputRef.nativeElement.value = "";
  }
}

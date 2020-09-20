import { Component, Input, OnInit } from "@angular/core";
import { HeroModel } from "../models/heromodel";

@Component({
  selector: "app-hero-child",
  templateUrl: "./hero-child.component.html",
})
export class HeroChildComponent implements OnInit {
  constructor() {}

  @Input() hero: HeroModel;
  @Input("master") masterName: string;

  //using getter and setter:
  @Input()
  get nickName(): string {
    return this._nickName;
  }

  set nickName(nickName: string) {
    this._nickName = (nickName && nickName.trim()) || "No NickName provided";
  }

  private _nickName = "";

  ngOnInit(): void {}
}

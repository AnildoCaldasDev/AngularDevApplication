import { Component, OnInit } from "@angular/core";
import { HeroModel } from "../../../models/heromodel";

@Component({
  selector: "app-componentinteractions",
  templateUrl: "./componentinteractions.component.html",
})
export class ComponentinteractionsComponent implements OnInit {
  constructor() {}
  heroes: HeroModel[] = [];
  master = "Master Bruce";
  ngOnInit(): void {
    this.heroes.push({ name: "Curinga", nickName: "Curinga Slave" });
    this.heroes.push({ name: "The Flash", nickName: "" });
  }
}

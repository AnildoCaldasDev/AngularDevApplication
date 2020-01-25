import { Component, OnInit } from '@angular/core';
import { DatabindingService } from '../services/databinding.service';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

 url : String = "www.google.com"
 cursos: String[] = []
 urlLogoAngular="https://cdn.searchenginejournal.com/wp-content/uploads/2019/04/the-seo-guide-to-angular.webp"

  constructor(private databindingService: DatabindingService) {
    this.cursos = databindingService.getCursos()


   }

  ngOnInit() {

  }

}

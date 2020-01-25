import { Injectable } from '@angular/core';

@Injectable()
export class DatabindingService {

  constructor() { }

  getCursos(): String[] {
    return ["C#", "Python", "Css", "Javascript", "Oracle"]
  }
}

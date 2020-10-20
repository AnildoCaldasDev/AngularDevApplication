import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BibliotecarxjsService {

  private subject = new Subject<any>();

  atualizaModeloPlano(idModeloPlano: number){
    this.subject.next({ idModeloPlano: idModeloPlano });
  }

  consultaModeloPlano() : Observable<any> {
    return this.subject.asObservable();
  }

  constructor() { }
}

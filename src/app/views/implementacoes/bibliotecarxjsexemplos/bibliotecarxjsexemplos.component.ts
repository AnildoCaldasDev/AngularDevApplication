import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from "@angular/core";
import { resolve } from "dns";
import { Observable, from, Subject, Subscription } from "rxjs";
import { filter, reduce, share } from "rxjs/operators";
import { BibliotecarxjsService } from '../../../services/bibliotecarxjs.service';

@Component({
  selector: "app-bibliotecarxjsexemplos",
  templateUrl: "./bibliotecarxjsexemplos.component.html",
})
export class BibliotecarxjsexemplosComponent implements OnInit, OnDestroy {

  @ViewChild('idModelo') modeloPlanoId: ElementRef;

  constructor(private _bblRjxs: BibliotecarxjsService) {

  }

  pessoas: Pessoas[] = [
    { idade: 20, nome: "Cuele", genero: "Feminino" },
    { idade: 70, nome: "Rosa", genero: "Feminino" },
    { idade: 15, nome: "João", genero: "Masculino" },
    { idade: 11, nome: "Maria", genero: "Feminino" },
    { idade: 9, nome: "Iza", genero: "Feminino" },
    { idade: 18, nome: "Jorge", genero: "Masculino" },
  ];


  ngOnInit(): void {
    //this.agrupar();
  }

  ngOnDestroy(){
  }

  atualizarValor(){
    let valor: number = this.modeloPlanoId.nativeElement.value;
    this._bblRjxs.atualizaModeloPlano(valor);
  }

  //agrupar() {
  //Promise.resolve(1).then((num) => console.log("Promise valor é ", num));

  // const promise = new Promise((resolve) => {
  //   console.log("Promise inicializada mas sem o then");
  //   resolve(1);
  //   setTimeout(() => {
  //     resolve(10);
  //   }, 1000);
  // });
  // //.then((num) => console.log("Promise valor é ", num));

  // const obs1 = Observable.create((observer) => {
  //   console.log("Observeable iniciado sem o subscribe");
  //   observer.next(1);
  //   setTimeout(() => {
  //     observer.next(20);
  //   }, 1000);
  // });
  // //.subscribe((num) => console.log("Observer valor: ", num));

  // promise.then((num) => console.log("Promise valor é ", num));
  // obs1.subscribe((num) => console.log("Observer valor: ", num));

  // setTimeout(() => {
  //   promise.then((num) => console.log("Promise valor é ", num));
  //   obs1.subscribe((num) => console.log("Observer valor: ", num));
  // }, 2000);
  //}

  //agrupar() {
    // const promisse = new Promise((resolve) => {
    //   console.log("Iniciando a promisse");
    //   setTimeout(() => {
    //     resolve(1);
    //   }, 3000);
    // });

    // const observer = Observable.create((observer) => {
    //   console.log("Iniciando o Observer");
    //   setTimeout(() => {
    //     observer.next(111);
    //   }, 3000);
    // });
    // //.pipe(share());

    // promisse.then((num) =>
    //   console.log("Promisse resolvida apos 3 segundos com valor:" + num)
    // );

    // observer.subscribe((num) =>
    //   console.log("Observer incrito chamado apos 3 segundos com valor:" + num)
    // );

    // setTimeout(() => {
    //   promisse.then((num) =>
    //     console.log(
    //       "Promisse resolvida dentro de timeout apos 3 segundos com valor:" +
    //         num
    //     )
    //   );
    //   observer.subscribe((num) =>
    //     console.log(
    //       "Observer incrito dentro de timeout apos 3 segundos com valor:" + num
    //     )
    //   );
    // }, 3000);

    // //----------------------------- sincrona e asincrona:
    // const promisse = new Promise((resolve) => {
    //   resolve(1);
    // });

    // const observer = Observable.create((observer) => {
    //   observer.next(111);
    //   setTimeout(() => {
    //     observer.next(222);
    //   }, 3000);
    // });
    // //.pipe(share());

    // promisse.then((num) =>
    //   console.log("Promisse resolvida apos 3 segundos com valor:" + num)
    // );
    // console.log("depois da promisse");

    // observer.subscribe((num) =>
    //   console.log("Observer incrito chamado apos 3 segundos com valor:" + num)
    // );
    // console.log("depois do observable");

    // //----------------------------- cancelável e não cancelavel:
    // const promisse = new Promise((resolve) => {
    //   resolve(1);
    // });

    // const observer = Observable.create((observer) => {
    //   let i = 0;
    //   const interval = setInterval(() => {
    //     observer.next(i++);
    //   }, 1000);
    //   return () => clearInterval(interval);
    // });

    // promisse.then((num) =>
    //   console.log("Promisse resolvida apos 3 segundos com valor:" + num)
    // );

    // const subscriber = observer.subscribe((num) =>
    //   console.log("Observer " + num)
    // );

    // setTimeout(() => {
    //   subscriber.unsubscribe();
    // }, 8000);

    // //----------------------------- Subjects and Subscriptions
    // const observer1 = Observable.create((observer) => {
    //   console.log("Iniciando o Observer");
    //   let i = 0;
    //   const interval = setInterval(() => {
    //     observer.next(i++);
    //   }, 1000);
    //   setTimeout(() => {
    //     observer.error(new Error("Erro simulado"));
    //   }, 5000);
    //   return () => clearInterval(interval);
    // });

    // const observer2 = Observable.create((observer) => {
    //   console.log("Iniciando o Observer");
    //   let i = 0;
    //   const interval = setInterval(() => {
    //     observer.next(i++);
    //   }, 1000);
    //   setTimeout(() => {
    //     observer.error(new Error("Erro simulado"));
    //   }, 5000);
    //   return () => clearInterval(interval);
    // });

    // const subscription1 = observer1.subscribe({
    //   next: (num) => console.log(num),
    //   error: (err) => console.log(err),
    //   complete: () => console.log("Completado"),
    // });

    // const subscription2 = observer2.subscribe({
    //   next: (num) => console.log(num),
    //   error: (err) => console.log(err),
    //   complete: () => console.log("Completado"),
    // });

    // subscription1.add(subscription2);

    // setTimeout(() => {
    //   subscription2.unsubscribe();
    // }, 3000);

    // const subscriber = observer.subscribe((num) =>
    //   console.log("Observer " + num)
    // );

    //----------------------------- Subjects and Subscriptions
    // const sub = new Subject();

    // const subscription1 = sub.subscribe({
    //   next: (num) => console.log(num),
    //   error: (err) => console.log(err),
    //   complete: () => console.log("Completado"),
    // });

    // const subscription2 = sub.subscribe({
    //   next: (num) => console.log(num),
    //   error: (err) => console.log(err),
    //   complete: () => console.log("Completado"),
    // });

    // sub.next(1);
    // sub.next(2);
    // sub.next(3);
    // sub.next(4);

    // subscription1.add(subscription2);

    // setTimeout(() => {
    //   subscription1.unsubscribe();
    // }, 3000);
  //}
}

export class Pessoas {
  nome: string;
  idade: number;
  genero: string;
}

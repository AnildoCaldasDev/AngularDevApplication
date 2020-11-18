import { query } from '@angular/animations';
import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from "@angular/core";
import { resolve } from "dns";
import { Observable, from, Subject, Subscription, BehaviorSubject, ReplaySubject, AsyncSubject, of, interval, range, generate, fromEvent, defer, merge } from "rxjs";
import { ajax } from 'rxjs/ajax';
import { catchError, debounceTime, distinctUntilChanged, filter, map, pluck, reduce, share, skip, startWith, switchMap, take, takeUntil, tap } from "rxjs/operators";
import { BibliotecarxjsService } from '../../../services/bibliotecarxjs.service';

@Component({
  selector: "app-bibliotecarxjsexemplos",
  templateUrl: "./bibliotecarxjsexemplos.component.html",
  styleUrls: ['./bibliotecarxjsexemplos.component.css'],
})
export class BibliotecarxjsexemplosComponent implements OnInit, OnDestroy, AfterViewInit {

  numNext: number = 0;
  @ViewChild('idModelo') modeloPlanoId: ElementRef;
  //Aula Subjects
  sub = new Subject();
  subscription1 = this.sub.subscribe({
    next: num => console.log('subscription1 chamou next: ', num),
    error: err => console.log('subscription1 chamou error: ', err),
    complete: () => { console.log('complete'); }
  });

  //Aula BehaviorSubjects:
  behaviorSub = new BehaviorSubject(0);

  //Aula ReplaySubjects:
  replaySub = new ReplaySubject(2, 500);

  //AulaAsyncSubjects:
  asyncSub = new AsyncSubject();

  @ViewChild('buttonEvent') buttonEventElement: ElementRef;
  @ViewChild('cardEvent') cardEventElement: ElementRef;
  @ViewChild('inputEvent') inputEventElement: ElementRef;


  a = (a) => defer(() => {
    return a > 10 ? of(1) : of(2);
  });

  constructor(private _bblRjxs: BibliotecarxjsService) {

    /*
    //Aula BehaviorSubjects:
    // this.behaviorSub.next(1);
    // this.behaviorSub.next(2);
    // this.behaviorSub.next(5);
    // const subscriptionBehavior = this.behaviorSub.subscribe({
    //   next: num => console.log('subscriptionBehavior chamou next: ', num),
    //   error: err => console.log('subscriptionBehavior chamou error: ', err),
    //   complete: () => { console.log('complete'); }
    // });

    //Aula replaySubject
    // this.replaySub.next(1);
    // this.replaySub.next(2);
    // this.replaySub.next(3);
    // this.replaySub.next(4);
    // const subscriptionReplaySubject = this.replaySub.subscribe({
    //   next: num => console.log('subscriptionReplaySubject chamou next: ', num),
    //   error: err => console.log('subscriptionReplaySubject chamou error: ', err),
    //   complete: () => { console.log('complete'); }
    // });
    // this.replaySub.next(5);
    // this.replaySub.next(6);
    // setTimeout(() => {
    //   const subscriptionReplaySubject2 = this.replaySub.subscribe({
    //     next: num => console.log('subscriptionReplaySubject2 chamou next: ', num),
    //     error: err => console.log('subscriptionReplaySubject2 chamou error: ', err),
    //     complete: () => { console.log('complete'); }
    //   });
    // }, 400);

    //Aula AsyncSubject
    // this.asyncSub.next(1);
    // this.asyncSub.next(2);
    // const subscriptionAsyncSubject = this.asyncSub.subscribe({
    //   next: num => console.log('subscriptionAsyncSubject chamou next: ', num),
    //   error: err => console.log('subscriptionAsyncSubject chamou error: ', err),
    //   complete: () => { console.log('complete'); }
    // });
    // this.asyncSub.next(3);
    // this.asyncSub.complete();
    // this.asyncSub.next(4);

    //Aula Operadores RxJs:
    // of(1, true, 'teste string', [1, 2, 3, 4, 5, 6])
    //   .subscribe(v => console.log(v));

    // from([1, 2, 3])
    //   .subscribe(v => console.log(v));

    // from(Promise.resolve(20))
    //   .subscribe(v => console.log(v));

    //Não funionou...investigar depoiso pq:
    // from(g).pipe(take(10))
    //   .subscribe(v => console.log(v));

    // from([1, 2, 3, 4, 5, 6]).pipe(take(3))
    //   .subscribe(v => console.log(v));

    //interval(1000).pipe(take(10)).subscribe(v => console.log(v));

    // range(1000, 10).pipe(take(10)).subscribe(v => console.log(v));

    //generate(0, x => x <= 10, x => x + 1).pipe(take(10)).subscribe(v => console.log(v));
    //generate(10, x => x >= 0, x => x - 1).pipe(take(10)).subscribe(v => console.log(v));
*/


  }
  ngAfterViewInit(): void {

    fromEvent(this.buttonEventElement.nativeElement, 'click')
      .subscribe(e => console.log(e));

    // const card = document.querySelector('.cardDiv');

    // const mouseDown$ = fromEvent(this.cardEventElement.nativeElement, 'mousedown');
    // const mouseUp$ = fromEvent(document, 'mouseup');
    // const mouseMove$ = fromEvent(document, 'mousemove');
    // const keyUp$ = fromEvent(document, 'keyup');
    // const cadBody = document.querySelector('.card-body');

    // const dragAndDrop$ = mouseDown$.pipe(
    //   map(e => ({
    //     x: e.clientX,
    //     y: e.clientY,
    //     target: {
    //       x: e.target.offsetLeft,
    //       y: e.target.offsetTop
    //     }
    //   })),
    //   switchMap(start => merge(
    //     mouseMove$.pipe(
    //       map(e => ({
    //         x: e.clientX - start.x + start.target.x,
    //         y: e.clientY - start.y + start.target.y,
    //       })),
    //       takeUntil(mouseUp$)
    //     ),
    //     keyUp$.pipe(
    //       filter(e => e.which == 32),
    //       tap(tecla => {
    //         document.querySelector('.card-body').insertBefore(card.cloneNode(true), card);
    //       }),
    //       skip()
    //     )
    //   ))
    // );

    // dragAndDrop$.subscribe(val => {
    //   card.style.top = `${val.y}px`;
    //   card.style.left = `${val.x}px`;
    // });

    //aula autocomplete:
    //const input = fromEvent(document.querySelector("input"), 'input');
    const ul = document.getElementById("listaPaises");

    const mostraResultado = res => {
      ul.innerHTML = res.map(e => `<li>${e.name}</li>`).join('');
    }

    const buscaPaisesNaApi = termo => ajax(`https://restcountries.eu/rest/v2/name/${termo}?fields=name`).pipe(
      pluck('response'),
      map(e => e)
    )

    fromEvent(this.inputEventElement.nativeElement, 'input')
      .pipe(
        debounceTime(300),//crio um delay de 300 milisegundos
        pluck('target', 'value'),//do campo input que é o target pego o valor dapropriedade value
        map(e => e),
        distinctUntilChanged(),
        switchMap(termo => {
          if (!termo) return of([])
          return buscaPaisesNaApi(termo);
        }),
        catchError((err, source) => {
          //console.log(err);
          return source.pipe(startWith([]));
        })
      ).subscribe(mostraResultado);


    // input.pipe(
    //   debounceTime(300),//crio um delay de 300 milisegundos
    //   pluck('targe', 'value'),//do campo input que é o target pego o valor dapropriedade value
    //   map(e => this.limparCaracteres(String(e))),
    //   switchMap(buscaPaisesNaApi),
    //   catchError((err, source) => {
    //     console.log(err);
    //     return source;
    //   })
    // ).subscribe(mostraResultado);


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

  limparCaracteres(e: string) {
    return e.trim();
  }

  ngOnDestroy() {
  }

  atualizarValor() {
    let valor: number = this.modeloPlanoId.nativeElement.value;
    this._bblRjxs.atualizaModeloPlano(valor);
  }

  /*
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
  */

  eventNext() {
    this.numNext = this.numNext + 10;
    this.sub.next(this.numNext);
  }

  eventError() {
    this.sub.error(new Error('Erro do evento'));
  }

  eventComplete() {
    this.sub.complete();
  }

  eventUnsubscribe() {
    this.subscription1.unsubscribe;
  }

  eventDefer() {
    this.numNext = this.numNext + 1;
    this.a(this.numNext).subscribe(v => console.log('Valor defer', v));
  }
}

export async function* g() {
  var index = 0;
  while (true)
    yield index++;
}

export class Pessoas {
  nome: string;
  idade: number;
  genero: string;
}

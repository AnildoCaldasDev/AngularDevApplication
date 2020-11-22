import {
  Component,
  Input,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { Observable } from 'rxjs';
import { VideoYoutubeModel } from '../models/video.youtube.model';

@Component({
  selector: "app-componentchildexample",
  templateUrl: "./componentchildexample.component.html",
})
export class ComponentchildexampleComponent implements OnInit {

  // @Input() item: string;
  // @Output() newItemEvent = new EventEmitter<string>();
  // @Output() deleteItemEvent = new EventEmitter<string>();

  // //https://itnext.io/working-with-angular-5-template-reference-variable-e5aa59fb9af
  // @ViewChild("newItem") newItemInputRef: ElementRef;

  // constructor() {}

  // ngOnInit(): void { }

  // addNewItem(value: string) {
  //   this.newItemEvent.emit(value);
  //   this.newItemInputRef.nativeElement.value = "";
  // }

  // deleteItem(value: string) {
  //   this.deleteItemEvent.emit(value);
  //   this.newItemInputRef.nativeElement.value = "";
  // }

  //------------------------- NOVO EXEMPLO MAIS DETALHANDO DE @INPUT/ @OUTPUT---------------------------------//

  //@Input() videoEdicao: VideoYoutubeModel;

  private videoEdicao: VideoYoutubeModel;
  edicaoDeVideo: boolean = false;

  @Output() inclusaoVideoOutEvent = new EventEmitter<VideoYoutubeModel>();
  @Output() exclusaoVideoOutEvent = new EventEmitter<VideoYoutubeModel>();
  @Output() incrementarLikeOutEvent = new EventEmitter<VideoYoutubeModel>();

  @ViewChild("id") idInputRef: ElementRef;
  @ViewChild("titulo") tituloInputRef: ElementRef;
  @ViewChild("autor") autorInputRef: ElementRef;
  @ViewChild("canal") canalInputRef: ElementRef;

  ngOnInit(): void {
  }

  salvarVideo() {

    let titulo = this.tituloInputRef.nativeElement.value;
    let autor = this.autorInputRef.nativeElement.value;
    let canal = this.canalInputRef.nativeElement.value;
    let id = this.idInputRef.nativeElement.value;

    if (titulo && autor && canal) {
      let novoVideo: VideoYoutubeModel = new VideoYoutubeModel();
      novoVideo.titulo = titulo;
      novoVideo.autor = autor;
      novoVideo.canal = canal;
      novoVideo.likes = 1;
      novoVideo.id = id == "" ? 0 : id;

      this.limparFormulario();
      this.inclusaoVideoOutEvent.emit(novoVideo);

    } else {
      alert('Prencha todos campos do formulário para continuar');
    }
  }

  limparFormulario() {
    this.videoEdicao = undefined;
    this.tituloInputRef.nativeElement.value = "";
    this.autorInputRef.nativeElement.value = "";
    this.canalInputRef.nativeElement.value = "";
    this.idInputRef.nativeElement.value = "";
  }

  carregarVideoEdicao(videoEdicao: VideoYoutubeModel) {

    this.videoEdicao = videoEdicao;

    if (videoEdicao) {
      this.idInputRef.nativeElement.value = videoEdicao.id;
      this.tituloInputRef.nativeElement.value = videoEdicao.titulo;
      this.autorInputRef.nativeElement.value = videoEdicao.autor;
      this.canalInputRef.nativeElement.value = videoEdicao.canal;
    }
  }

  excluirVideo(videoEdicao: VideoYoutubeModel) {
    this.limparFormulario();
    this.exclusaoVideoOutEvent.emit(videoEdicao);
  }

  enviarLike() {
    this.incrementarLikeOutEvent.emit(this.videoEdicao);
  }
}

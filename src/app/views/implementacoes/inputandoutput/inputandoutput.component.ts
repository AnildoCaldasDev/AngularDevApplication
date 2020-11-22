import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { ComponentchildexampleComponent } from '../../../components/componentchildexample.component';
import { VideoYoutubeModel } from '../../../models/video.youtube.model';
import { BibliotecarxjsService } from '../../../services/bibliotecarxjs.service';

@Component({
  selector: "app-inputandoutput",
  templateUrl: "./inputandoutput.component.html",
})
export class InputandoutputComponent implements OnInit {
  constructor(private _bblRjxs: BibliotecarxjsService) { }
  //URL: https://angular.io/guide/inputs-outputs

  // @ViewChild('idModelo') modeloPlanoId: ElementRef;

  // items: string[] = ["Item 1", "Item 2"];

  // inputMessage: string = "Texto do pai em variavel";
  // ngOnInit(): void {}

  // addItem(newItem: string) {
  //   this.items.push(newItem);
  // }

  // deleteItem(itemToDelete: string) {
  //   let indexItem = this.items.indexOf(itemToDelete);
  //   if (indexItem > -1) this.items.splice(indexItem, 1);
  // }

  // atualizarValor(){
  //   let valor: number = this.modeloPlanoId.nativeElement.value;
  //   this._bblRjxs.atualizaModeloPlano(valor);
  // }

  ngOnInit(): void { }

  listaVideosYoutube: VideoYoutubeModel[] = [];
  @ViewChild(ComponentchildexampleComponent) componentFilhoEdicaoVideo: ComponentchildexampleComponent;

  //Esta função receberá a chamado dio evento do componente filho
  inclusaoVideo(video: VideoYoutubeModel) {
    if (video.id > 0) {
      var indexAtualizar = this.listaVideosYoutube.findIndex(x => x.id == video.id);
      this.listaVideosYoutube[indexAtualizar] = video;

    } else {
      if (this.listaVideosYoutube.length > 0) {
        video.id = this.geraNovoNumeroSequenciaVideo();
      } else {
        video.id = 1;
      }

      this.listaVideosYoutube.push(video);
    }
  }

  geraNovoNumeroSequenciaVideo(): number {
    return Math.max.apply(Math, this.listaVideosYoutube.map(function (m) { return m.id; })) + 1;
  }

  exclusaoVideo(video: VideoYoutubeModel) {

    if (video) {
      var indexRemover = this.listaVideosYoutube.findIndex(x => x.id == video.id);
      if (indexRemover > -1) {
        this.listaVideosYoutube.splice(indexRemover, 1);
      }
    }
  }

  acaoBtnEditarVideo(video: VideoYoutubeModel) {
    this.componentFilhoEdicaoVideo.carregarVideoEdicao(video);
  }

  acaoBtnExcluirVideo(video: VideoYoutubeModel) {
    this.exclusaoVideo(video);
  }

  incrementarLike(video: VideoYoutubeModel) {
    video.likes = video.likes + 1;
    this.inclusaoVideo(video);
  }

}

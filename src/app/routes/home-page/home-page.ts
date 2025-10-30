import { Component } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { ScrollService } from '../../services/scroll-service';
import { Modal } from "../../components/modal/modal";

@Component({
  selector: 'app-home-page',
  imports: [
    TranslatePipe,
    Modal
],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePage {
  constructor(
    public scroll: ScrollService,
    private translate: TranslateService
  ) {}

  public modalIsActive:boolean = false;
  public modalId!:number;

  showModal(id:number):void {
    this.modalId = id;
    this.modalIsActive = true;
  }
}

import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { firstValueFrom } from 'rxjs';
import Swiper from 'swiper';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './modal.html',
  styleUrl: './modal.scss'
})
export class Modal implements OnDestroy, AfterViewInit {
  constructor(private http: HttpClient) {}
  @Input() id!:number;
  @Output() close = new EventEmitter<void>();
  public modalContent:any;
  swiper!: Swiper;

  async ngAfterViewInit() {
    document.body.style.overflow = "hidden";
    await this.loadImages();
    this.initSwiper();
  }

  async loadImages() {
    // cria uma promisse depois de pegar o primeiro retorno da consulta
    const response = await firstValueFrom(this.http.get<any[]>('data/projects.json'));
    this.modalContent = response.find(item => item.id === this.id);
  }

  initSwiper():void {
    this.swiper = new Swiper('.carousel', {
      loop: true,
      speed: 300,
      pagination: {
        enabled: true,
        el: '.swiper-pagination',
        dynamicBullets: true,
        // dynamicMainBullets: 4
      },
      navigation: {
        enabled: true,
        addIcons: true,
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      breakpoints: {
        0: {navigation: {enabled: false}},
        501: {navigation: {enabled: true}},
      }
    })
  }

  ngOnDestroy(): void {
    document.body.style.overflow = "auto";
  }

  // emite o evento "close" para a rota q ta usando componente
  closeModal():void {
    this.close.emit();
  }
}

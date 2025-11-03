import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './modal.html',
  styleUrl: './modal.scss'
})
export class Modal implements OnInit, OnDestroy, AfterViewInit {

  constructor(private http: HttpClient) {}

  @Input() id!:number;
  @Output() close = new EventEmitter<void>();
  public modalContent:any;
  swiper!: Swiper;

  ngAfterViewInit(): void {
    this.swiper = new Swiper('.carousel', {
      loop: true,
      speed: 300,
      navigation: {
        nextEl: 'swiper-button-next',
        prevEl: 'swiper-button-prev'
      },
      // breakpoints: {
      //   0: {navigation: false},
      //   501: {navigation: true},
      // }
    })

    setTimeout(() => this.swiper.update(), 200);
  }

  ngOnInit(): void {
    // aplica o estilo para esconder a barra de rolagem (n funciona no .scss)
    document.body.style.overflow = "hidden";

    this.http.get<any[]>('data/projects.json').subscribe(response => {
      this.modalContent = response.find(item => item.id === this.id);
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

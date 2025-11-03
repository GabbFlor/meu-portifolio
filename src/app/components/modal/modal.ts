import { HttpClient } from '@angular/common/http';
import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './modal.html',
  styleUrl: './modal.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Modal implements OnInit, OnDestroy {

  constructor(private http: HttpClient) {}

  @Input() id!:number;
  @Output() close = new EventEmitter<void>();

  public modalContent:any;

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

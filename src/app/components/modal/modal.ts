import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.html',
  styleUrl: './modal.scss'
})
export class Modal implements OnInit {

  constructor(private http: HttpClient) {}

  @Input() id!:number;
  @Output() close = new EventEmitter<void>();

  public modalContent:any;

  ngOnInit(): void {
    this.http.get<any[]>('data/projects.json').subscribe(response => {
      this.modalContent = response.find(item => item.id === this.id);
    })
  }

  // emite o evento "close" para a rota q ta usando componente
  closeModal():void {
    this.close.emit();
  }
}

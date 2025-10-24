import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  scrollTo(target:string):void {
    const element = document.getElementById(target);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' })
    } else {
      console.error(`Erro: Elemento "${target}" não foi encontrado`)
    }
  }
}

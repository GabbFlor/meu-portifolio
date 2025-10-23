import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-home-page',
  imports: [
    TranslatePipe
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePage {

  
  scrollTo(section:string) {
    const element = document.getElementById(section);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.error(`Erro, elemento "${element}" não foi encontrado.`)
    }
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private body = document.body;

  // verifica o tema atual, se nao tiver nenhum, aplica o dark como padrao
  constructor () {
    const actualTheme = localStorage.getItem("theme") || "dark-theme";
    this.applyTheme(actualTheme);
  }

  // aplica a classe do tema no html
  applyTheme(newTheme:string):void {
    this.body.classList.remove("dark-theme", "light-theme");
    this.body.classList.add(newTheme);
  }

  // funcao publica para mudar o tema no cache e na classe html
  changeTheme(theme: 'dark-theme' | 'light-theme'):void {
    localStorage.setItem("theme", theme);
    this.applyTheme(theme);
  }

  getActualTheme():string {
    // travando para retornar apenas valores permitindo
    return (localStorage.getItem('theme') as 'dark-theme' | 'light-theme') || 'dark-theme';
  }
}

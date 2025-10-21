import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private body = document.documentElement;

  // verifica o tema atual, se nao tiver nenhum, aplica o dark como padrao
  constructor () {
    const actualTheme = localStorage.getItem("theme") || "dark-theme";
    this.applyTheme(actualTheme);
  }

  // aplica a classe do tema no html
  applyTheme(newTheme:string) {
    this.body.classList.remove("dark-theme", "light-theme");
    this.body.classList.toggle(newTheme);
  }

  // funcao publica para mudar o tema no cache e na classe html
  changeTheme(theme: 'dark-theme' | 'light-theme') {
    localStorage.setItem("theme", theme);
    this.applyTheme(theme);
  }

  getActualTheme() {
    return localStorage.getItem("theme");
  }
}

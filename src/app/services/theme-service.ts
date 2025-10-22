import { Injectable } from '@angular/core';
import { SupportedThemes } from './supported-themes';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private body = document.body;
  private default_theme = SupportedThemes.DARK;

  // verifica o tema atual, se nao tiver nenhum, aplica o dark como padrao
  constructor () {
    const actualTheme = localStorage.getItem("theme") || this.default_theme;

    // verifica se ta no enum
    const useTheme = actualTheme === SupportedThemes.DARK || actualTheme === SupportedThemes.LIGHT ? actualTheme : this.default_theme;

    this.applyTheme(useTheme);
  }

  // aplica a classe do tema no html
  applyTheme(newTheme:SupportedThemes):void {
    this.body.classList.remove(SupportedThemes.DARK, SupportedThemes.LIGHT);
    this.body.classList.add(newTheme);
  }

  // funcao publica para mudar o tema no cache e na classe html
  changeTheme(theme:SupportedThemes):void {
    localStorage.setItem("theme", theme);
    this.applyTheme(theme);
  }

  getActualTheme():string {
    // travando para retornar apenas valores permitindo
    return (localStorage.getItem('theme') as SupportedThemes.DARK | SupportedThemes.LIGHT) || this.default_theme;
  }
}

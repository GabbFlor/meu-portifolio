import { Component, inject, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme-service';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../../services/language-service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    FormsModule,
    TranslatePipe
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit {
  constructor () {}

  public actualTheme:string|null = "";
  public idioma:string = "";

  private themeService = inject(ThemeService);
  private languageService = inject(LanguageService);

  ngOnInit(): void {
    this.actualTheme = this.themeService.getActualTheme();
    this.idioma = this.languageService.getLang();

    console.warn(this.idioma);
  }

  changeColorTheme() {
    const theme = this.actualTheme;

    switch(theme) {
      case "dark-theme":
        this.themeService.changeTheme("light-theme");
        this.actualTheme ="light-theme";
        break;
      case "light-theme":
        this.themeService.changeTheme("dark-theme");
        this.actualTheme = "dark-theme";
        break;
      default:
        console.error("Erro no tema.")
        break;
    }
  }

  onChangeIdioma(value:string) {
    this.languageService.setLang(value);
  }
}

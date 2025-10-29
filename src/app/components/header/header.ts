import { Component, inject, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme-service';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../../services/language-service';
import { SupportedThemes } from '../../services/supported-themes';
import { ScrollService } from '../../services/scroll-service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    FormsModule,
    TranslatePipe,
    NgClass
],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit {
  constructor ( 
    public scroll: ScrollService,
    public language: LanguageService
   ) {}

  public actualTheme:string|null = "";
  public idioma:string = "";
  public menuResponsiveActive = false;
  public menuIsClosing = false;

  private themeService = inject(ThemeService);

  ngOnInit(): void {
    this.actualTheme = this.themeService.getActualTheme();
    this.idioma = this.language.getLang();
  }

  changeColorTheme():void {
    const theme = this.actualTheme;

    switch(theme) {
      case SupportedThemes.DARK:
        this.themeService.changeTheme(SupportedThemes.LIGHT);
        this.actualTheme = SupportedThemes.LIGHT;
        break;
      case SupportedThemes.LIGHT:
        this.themeService.changeTheme(SupportedThemes.DARK);
        this.actualTheme = SupportedThemes.DARK;
        break;
      default:
        console.error("Erro no tema.")
        break;
    }
  }

  changeResponsiveMenu():void {
    // esse if serve para aplicar a animação de quando o menu fecha

    if (this.menuResponsiveActive) {
      this.menuIsClosing = true;

      setTimeout(() => {
        this.menuIsClosing = false;
        this.menuResponsiveActive = false;
      }, 400);
    } else {
      this.menuResponsiveActive = true;
    }
  }
}

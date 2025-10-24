import { Component, inject, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme-service';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../../services/language-service';
import { SupportedThemes } from '../../services/supported-themes';
import { ScrollService } from '../../services/scroll-service';

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
  constructor ( 
    public scroll: ScrollService,
    public language: LanguageService
   ) {}

  public actualTheme:string|null = "";
  public idioma:string = "";

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
}

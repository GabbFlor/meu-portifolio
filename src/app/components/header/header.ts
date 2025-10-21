import { Component, Inject, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit {
  public actualTheme:string|null = "";
  public idioma:string = "pt-br";

  constructor (private themeService: ThemeService) {}

  ngOnInit(): void {
    this.actualTheme = this.themeService.getActualTheme();
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
    // ligacao com o service de idioma aqui
    console.warn(`Seu idioma atual agora é: ${value}`);
  }
}

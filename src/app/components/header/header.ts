import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme-service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  constructor (private themeService: ThemeService) {}

  changeColorTheme() {
    let actualTheme = this.themeService.getActualTheme();

    switch(actualTheme) {
      case "dark-theme":
        this.themeService.changeTheme("light-theme");
        break;
      case "light-theme":
        this.themeService.changeTheme("dark-theme");
        break;
      default:
        console.error("Erro no tema.")
        break;
    }
  }
}

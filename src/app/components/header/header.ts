import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme-service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit {
  public actualTheme:string|null = "";

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
}

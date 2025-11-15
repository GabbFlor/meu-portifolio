import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../../services/language-service';
import { ThemeService } from '../../services/theme-service';

@Component({
  selector: 'app-error-not-found',
  imports: [
    TranslatePipe,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './error-not-found.html',
  styleUrl: './error-not-found.scss'
})
export class ErrorNotFound {
  constructor(
    public language: LanguageService
  ) {}

  private themeService = inject(ThemeService)
}

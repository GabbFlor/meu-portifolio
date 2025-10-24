import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ScrollService } from '../../services/scroll-service';

@Component({
  selector: 'app-home-page',
  imports: [
    TranslatePipe
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePage {
  constructor(
    public scroll: ScrollService
  ) {}
}

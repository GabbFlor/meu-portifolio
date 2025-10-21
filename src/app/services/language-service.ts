import { inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SupportedLangs } from './supported-langs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private defaul_lang = SupportedLangs.PT_BR;

  // verifica a lang atual, se n tiver setado define uma nova
  constructor(private translateService: TranslateService) {
    const actualLang = localStorage.getItem("lang") || this.defaul_lang;

    // verifica se ta no enum, se nao (ate quando for null), usa a lang padrao
    const useLang = actualLang === SupportedLangs.PT_BR || actualLang === SupportedLangs.EN ? actualLang : this.defaul_lang;

    this.setLang(useLang);
  }

  public setLang(newLang:string):void {
    // aplica a lang
    this.translateService.use(newLang);
    localStorage.setItem("lang", newLang)
  }

  public getLang():string {
    // coloquei para puxar do cache pq se usar a funcao no header ela pega sempre pt-br (idioma padrao no app.config.ts)
    return (localStorage.getItem("lang") as SupportedLangs.PT_BR | SupportedLangs.EN) || this.defaul_lang;
  }
}

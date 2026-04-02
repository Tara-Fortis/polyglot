import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslocoService, TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-nav',
  imports: [RouterModule, TranslocoModule],
  templateUrl: './nav.html',
  styleUrls: ['./nav.css']
})
export class Nav {
  constructor(private translocoService: TranslocoService) {}

  switchLang(lang: string) {
    this.translocoService.setActiveLang(lang);
  }
}

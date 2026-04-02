import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './components/nav/nav';

// transloco import
import { TranslocoModule, TranslocoDirective } from '@jsverse/transloco';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TranslocoModule, TranslocoDirective, Nav],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}

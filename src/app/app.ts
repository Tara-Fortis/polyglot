import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './components/nav/nav';

// transloco import
import { TranslocoModule} from '@jsverse/transloco';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TranslocoModule, Nav],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}

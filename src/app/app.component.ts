import { Component, HostListener } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'firefox-unload-app';
  control = new FormControl();

  constructor() {}

  @HostListener('window:beforeunload')
  test(): boolean {
    return false;
  }
}

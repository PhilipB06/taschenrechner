import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  display: string;

  constructor() {
    this.display = '0';
  }

  click(num: any) {
    if (this.display === '0' || this.display === 'Fehler') {
      this.display = num.toString();
    } else {
      this.display += num;
    }
  }

  clear() {
    this.display = '0';
  }

  calculate() {
    try {
      this.display = eval(this.display);
    } catch (error) {
      this.display = 'Fehler';
    }
  }
}
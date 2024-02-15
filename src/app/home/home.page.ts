import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  display = '0';
  newInput = true;

  constructor() {
  }

   click(input: any) {
    if (this.display === '0' && input === '.') {
      this.display += input;
      this.newInput = false;
    } else if (this.display === '0' || this.display === 'Fehler' || +this.display === Number.POSITIVE_INFINITY) {
      this.display = input;
      this.newInput=false;
    } else if (this.newInput && ['+', '-', '*', '/'].includes(input)) {
      this.display += input;
      this.newInput = false;
    } else if (this.newInput && input === '.') {
      this.display = '0' + input;
      this.newInput = false;
    } else if (this.newInput) {
      this.display = input;
      this.newInput = false;
    } else {
      this.display += input;
    }
  }

  clear() {
    this.display = '0';
  }

  calculate() {
    try {
      this.display = eval(this.display);
      this.newInput = true;
    } catch (error) {
      this.display = 'Fehler';
    }
  }
}

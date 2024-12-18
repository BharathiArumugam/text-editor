import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    standalone: false
})
export class AppComponent {
  text: string = '';
  findWord: string = '';
  replaceWord: string = '';
  replacedText: string = '';

  replaceText(): void {
    if (this.findWord) {
      const regex = new RegExp(this.findWord, 'g');
      this.replacedText = this.text.replace(regex, this.replaceWord);
    } else {
      this.replacedText = this.text;
    }
  }
}

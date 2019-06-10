import {Component, OnInit, ViewChild} from '@angular/core';
import {TextWatchDirective} from '../../../shared/directives/text-watch.directive';

@Component({
  selector: 'app-directive-page',
  templateUrl: './directive-page.component.html',
  styleUrls: ['./directive-page.component.scss']
})
export class DirectivePageComponent {
  @ViewChild(TextWatchDirective) inputText: TextWatchDirective;
  text: string = '';

  onChangeText() {
    if (this.inputText) {
      this.text = this.inputText.text;
    }
  }
}

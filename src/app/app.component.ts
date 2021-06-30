import { Component } from '@angular/core';
import { UIConstants } from '../constants/ui.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = UIConstants.Constants.TITLE;
}

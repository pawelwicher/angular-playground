import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <p>{{ title }}</p>
  `
})
export class Home {

  protected title = 'Home';

}

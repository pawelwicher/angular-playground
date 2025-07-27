import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <p>{{ title }}</p>
  `
})
export class Home {

  protected title = 'Home';

}

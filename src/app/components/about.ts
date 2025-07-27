import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <p>{{ title }}</p>
  `
})
export class About {

  protected title = 'About';

}

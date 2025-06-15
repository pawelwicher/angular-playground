import { Component, signal } from '@angular/core';
import { bigStringArray } from '../models/big-string-array';

@Component({
  selector: 'app-big-string-array',
  standalone: true,
  template: `
    <p>{{ info() }}</p>
  `
})
export class BigStringArray {

  protected info = signal('');

  public constructor() {
    const arr = bigStringArray;
    this.info.set(`Data - length: ${arr.length}, first item: ${arr[0]}  last item: ${arr[arr.length - 1]}`);
  }

}

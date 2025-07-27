import { CommonModule } from '@angular/common';
import { Component, effect, OnInit, Signal, signal } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';

type FormModel = {
  code: FormControl<string | null>;
  name: FormControl<string | null>;
  hasDescription: FormControl<boolean | null>;
  description: FormControl<string | null>;
}

@Component({
  selector: 'app-form',
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  template: `
    <p>{{ title }}</p>

    <span>Form pristine: {{ form.pristine }}</span>

    <span>Form dirty: {{ form.dirty }}</span>

    <span>Form code field touched: {{ form.controls.code.touched }}</span>

    <span>Form valid: {{ form.valid }}</span>

    <span>Form status: {{ form.status }}</span>

    <span>Form value: {{ form.value | json }}</span>

    <form>
      <label for="code">Code:</label>
      <input type="text" [formControl]="form.controls.code" placeholder="Code">
      @if (form.controls.code.hasError('required')) {
        <span class="error">Code is required</span>
      }

      <label for="name">Name:</label>
      <input type="text" [formControl]="form.controls.name" placeholder="Name">
       @if (form.controls.name.hasError('required')) {
        <span class="error">Name is required</span>
      }

      <label for="hasDescription">Has Description:</label>
      <input type="checkbox" [formControl]="form.controls.hasDescription" id="hasDescription">

      <label for="description">Description:</label>
      <textarea id="description" [formControl]="form.controls.description" placeholder="Description"></textarea>
      @if (form.controls.description.hasError('required')) {
        <span class="error">Description is required</span>
      }
    </form>
  `,
  styles: `
  :host {
    display: grid;
    gap: 1rem;
    padding: 1rem;
  }
  
  form {
    display: grid;
    gap: 0.5rem;
    justify-items: start;
    border: 1px solid #ccc;
    width: 50%;
  }

  label {
    margin-bottom: -0.5rem;
  }
  
  .error {
    color: red;
    font-size: 0.8rem;
    margin-top: -0.5rem;
  }
  `
})
export class Form implements OnInit {

  protected title = 'Form';

  protected form = new FormGroup<FormModel>({
    code: new FormControl<string | null>(
      null,
      Validators.required
    ),
    name: new FormControl<string | null>(
      null,
      Validators.required
    ),
    hasDescription: new FormControl<boolean | null>(false),
    description: new FormControl<string | null>(
      null,
      Validators.required
    )
  });

  protected readonly codeValue = toSignal(
    this.form.controls.code.valueChanges,
    { initialValue: this.form.controls.code.value }
  );

  protected readonly hasDescription = toSignal(
    this.form.controls.hasDescription.valueChanges,
    { initialValue: this.form.controls.hasDescription.value }
  );

  public constructor() {
    effect(() => {
      this.setControl(this.form.controls.description, this.hasDescription);

      if (!this.hasDescription()) {
        this.form.controls.description.setValue(null);
      }

      console.log('Code value changed:', this.codeValue());
    });
  }

  public ngOnInit(): void {
    this.form.patchValue(
      {
        code: 'ABC123',
        name: 'Sample Name'
      }
    );
  }

  private setControl(control: AbstractControl, isEnabled: Signal<boolean | null>): void {
    const enabled = isEnabled();
    const disabled = !enabled;

    if (enabled && control.disabled) {
      control.enable();
    }
    
    if (disabled && control.enabled) {
      control.disable();
    }
  }

}

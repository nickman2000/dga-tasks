import {Component, forwardRef, Input, input, InputSignal, OnInit} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormsModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors
} from "@angular/forms";
import {MatError, MatFormField, MatInput} from "@angular/material/input";


@Component({
  selector: 'app-custom-input',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => CustomInputComponent),
    },

  ],
  templateUrl: './custom-input.component.html',
  imports: [MatInput, FormsModule, MatFormField, MatError],
  styleUrl: './custom-input.component.scss'
})
export class CustomInputComponent implements ControlValueAccessor {
  onTouched = () => {
  };
  disabled = false;
  @Input() value = ''
  @Input() error = false;

  placeholder: InputSignal<string> = input('')

  onChange = (value: string) => {
  }
  @Input() required: boolean = false;

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled
  }

  valueChange(value: string) {
    this.onChange(value);
  }
}

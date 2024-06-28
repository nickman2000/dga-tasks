import {ChangeDetectionStrategy, ChangeDetectorRef, Component, inject} from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatDatepickerModule, MatDateRangeInput} from "@angular/material/datepicker";
import {MatNativeDateModule, MatOption} from "@angular/material/core";
import {CustomInputComponent} from "./custom-input/custom-input.component";
import {MatSelect} from "@angular/material/select";


@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatDateRangeInput, MatInputModule, MatButtonModule, FormsModule, MatDatepickerModule, MatNativeDateModule, CustomInputComponent, MatSelect, MatOption],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserFormComponent {
  fb: FormBuilder = inject(FormBuilder)
  levels: string[] = ['Junior', 'Middle', 'Senior']
  form: FormGroup = this.fb.group({
    companies: this.fb.array([])
  })
  cdr: ChangeDetectorRef = inject(ChangeDetectorRef)


  get companies(): FormArray {
    return this.form.get("companies") as FormArray
  }

  getPositionArray(index: number): FormArray {
    return this.companies.controls[index]?.get('positions') as FormArray
  }

  addCompanyFormArray(): void {
    const jobForm = this.fb.group({
      name: ['', Validators.required],
      webPage: ['', Validators.required],
      description: ['', Validators.required],
      positions: this.fb.array([])
    })
    this.companies.push(jobForm)
  }

  removeJob(index: number) {
    this.companies.removeAt(index)
  }

  addPosition(index: number) {
    if (this.companies.invalid) {
      return
    }
    this.form.updateValueAndValidity()
    const positionForm = this.fb.group({
      positionName: ['', Validators.required],
      positionLevel: ['', Validators.required],
      positionDescription: ['', Validators.required],
      positionDateFrom: ['', [Validators.required, this.dateRangeValidator(index)]],
      positionDateTo: ['', [Validators.required, this.dateRangeValidator(index)]],
    })
    this.getPositionArray(index).push(positionForm);
  }

  removePosition(index: number) {
    this.getPositionArray(index).removeAt(index)
  }

  dateRangeValidator = (index: number): ValidationErrors | null => {
    return (control: AbstractControl) => {
      const fromDate = this.getPositionArray(index)?.controls[this.getPositionArray.length - 1]?.get('positionDateFrom');
      const toDate = this.getPositionArray(index)?.controls[this.getPositionArray.length - 1]?.get('positionDateTo');
      if (!fromDate?.value || !toDate?.value) return null;
      if (fromDate?.value > toDate?.value) {
        return {
          invalidDate: true
        }
      }
      fromDate?.setErrors(null)
      toDate?.setErrors(null)
      this.getPositionArray(index).updateValueAndValidity()
      return null
    }
  }


  submitForm() {
    if (this.form.invalid) {
      this.form.markAsTouched();
      return
    }
    this.companies.controls.forEach((control, index) => {
      this.companies.removeAt(index)
    })
    this.form.markAsUntouched()
    this.form.markAsPristine()
    this.form.reset();
    this.form.updateValueAndValidity()
    this.cdr.detectChanges()
  }
}

import {Component, model, ViewChild} from '@angular/core';
import {
  StringPercentageCalculatorComponent
} from "../string-percentage-calculator/string-percentage-calculator.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-string-percentage',
  standalone: true,
  imports: [StringPercentageCalculatorComponent, FormsModule, MatButton, MatFormField, MatInput, ReactiveFormsModule],
  templateUrl: './string-percentage.component.html',
  styleUrl: './string-percentage.component.scss'
})
export class StringPercentageComponent {
  stringText = ''
  stringArray: string[] = ['ქონება', 'ქონების პრივატიზება', 'ქონების გასხვისება', 'საქონლის გასხვისება']
  @ViewChild('calculatorComponent') calculatorComponent: StringPercentageCalculatorComponent;

  calculate() {
    this.calculatorComponent.calculatePercentages()
  }
}

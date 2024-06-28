import {Component, input, Input, InputSignal} from '@angular/core';

@Component({
  selector: 'app-string-percentage-calculator',
  standalone: true,
  templateUrl: './string-percentage-calculator.component.html',
  styleUrl: './string-percentage-calculator.component.scss',
})
export class StringPercentageCalculatorComponent {
  stringText: InputSignal<string> = input('');
  @Input() stringArray: string[]
  percentageArray: number[] = []


  calculatePercentages(): void {
    this.percentageArray = []
    this.stringArray.forEach(string => {
      let count = 0;
      for (let i = 0; i < this.stringText().length; i++) {
        if (this.stringText()[i].toLowerCase() === string.trim()[i].toLowerCase()) {
          count++;
        } else {
          break;
        }
      }
      this.percentageArray.push((count / string.length) * 100)
    })
  }
}

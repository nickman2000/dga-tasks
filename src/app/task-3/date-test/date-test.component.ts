import {Component} from '@angular/core';
import {CustomDatePipe} from "../custom-date.pipe";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-date-test',
  standalone: true,
  imports: [CustomDatePipe, FormsModule],
  templateUrl: './date-test.component.html',
  styleUrl: './date-test.component.scss',
})
export class DateTestComponent {
  date: Date = new Date('2023-08-10T09:42:34.0734574Z');
  text: string = 'test';
}

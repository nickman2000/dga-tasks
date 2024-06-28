import {Component, OnInit} from '@angular/core';
import {DatePipe, NgStyle} from "@angular/common";

interface DateModel {
  day: number,
  month: number
}

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [DatePipe, NgStyle],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent implements OnInit {
  daysInMonth: DateModel[] = []
  today: Date = new Date();
  day: number = this.today.getDate();
  weekdays: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  ngOnInit() {
    this.createDayArray()
  }

  createDayArray() {
    const days = this.getDaysInMonth(this.today.getFullYear(), this.today.getMonth() + 1);

    for (let i = 1; i <= days; i++) {
      this.daysInMonth.push({
        day: i,
        month: this.today.getMonth(),
      })
    }
    const newDate = new Date(this.today.getFullYear(), this.today.getMonth()).getDay();
    const extraDays = newDate === 0 ? 6 : newDate - 1;
    const previousMonthDate = new Date(this.today.getFullYear(), this.today.getMonth(), 0)
    for (let i = 0; i < extraDays; i++) {
      this.daysInMonth.unshift({
        day: previousMonthDate.getDate() - i,
        month: previousMonthDate.getMonth()
      })
    }
  }

  getDaysInMonth(year: number, month: number): number {
    return new Date(year, month, 0).getDate();
  }

  isSunday(date: DateModel): boolean {
    const checkingDate = new Date(this.today.getFullYear(), date.month, date.day);
    return checkingDate.getDay() === 0;
  }

  isSaturday(date: DateModel): boolean {
    const checkingDate = new Date(this.today.getFullYear(), date.month, date.day);
    return checkingDate.getDay() === 6;
  }
}

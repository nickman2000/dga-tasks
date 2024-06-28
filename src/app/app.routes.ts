import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component').then((x) => x.HomeComponent),
  },
  {
    path: 'task-1',
    loadComponent: () => import('./task-1/user-form/user-form.component').then((x) => x.UserFormComponent),
  },
  {
    path: 'task-2',
    loadComponent: () => import('./task-2/movies/movies.component').then((x) => x.MoviesComponent),
  },
  {
    path: 'task-3',
    loadComponent: () => import('./task-3/date-test/date-test.component').then((x) => x.DateTestComponent),
  },
  {
    path: 'task-4',
    loadComponent: () => import('./task-4/calendar/calendar.component').then((x) => x.CalendarComponent),
  },
  {
    path: 'task-5',
    loadComponent: () => import('./task-5/string-percentage/string-percentage.component').then((x) => x.StringPercentageComponent),
  },
];

import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-movies-search',
  standalone: true,
  imports: [MatInputModule, MatButtonModule, FormsModule],
  templateUrl: './movies-search.component.html',
  styleUrl: './movies-search.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesSearchComponent {
  @Output() movieTitle: EventEmitter<string> = new EventEmitter<string>()
  title: string = ''
}

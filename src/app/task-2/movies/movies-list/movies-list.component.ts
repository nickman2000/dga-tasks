import {ChangeDetectionStrategy, Component, inject, Signal} from '@angular/core';
import {MoviesService} from "../movies.service";
import {AsyncPipe, CommonModule} from "@angular/common";
import {IMovieModel} from "../movies.model";

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [
    AsyncPipe,
    CommonModule
  ],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesListComponent {
  moviesService: MoviesService = inject(MoviesService);
  $moviesList: Signal<IMovieModel[]> = this.moviesService.moviesList$
}

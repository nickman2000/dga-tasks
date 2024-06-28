import {ChangeDetectionStrategy, Component, inject, Inject} from '@angular/core';
import {MoviesSearchComponent} from "./movies-search/movies-search.component";
import {MoviesListComponent} from "./movies-list/movies-list.component";
import {MoviesService} from "./movies.service";
import {take} from "rxjs";

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [MoviesSearchComponent, MoviesListComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesComponent {
  moviesService: MoviesService = inject(MoviesService);

  searchMovies(movieTitle: string): void {
    this.moviesService.getMovieList(movieTitle).pipe(take(1)).subscribe();
  }
}

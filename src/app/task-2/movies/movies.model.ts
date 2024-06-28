export interface IMovieModel {
  image: IMovieImage,
  id: string,
  title: string,
  titleType: string,
  year: number
}

interface IMovieImage {
  height: number,
  width: number,
  id: string,
  url: string
}

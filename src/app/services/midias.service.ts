import { map, of } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Midia } from 'src/app/models/midia.model';

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class MidiasService {
  private readonly TMBD_TOKEN = environment.tmbdToken;
  private readonly TMBD_IMAGEPATH = environment.tmdbImagePath;

  constructor(private http: HttpClient) {}

  getFilmes() {
    return this.http
      .get<{
        results: {
          title: string;
          backdrop_path: string;
          overview: string;
          release_date: string;
          vote_average: string;
        }[];
      }>(
        `https://api.themoviedb.org/3/movie/popular?api_key=${this.TMBD_TOKEN}&language=pt-BR&page=1&region=BR`
      )
      .pipe(
        map(response =>
          response.results.map(
            filme =>
              ({
                titulo: filme.title,
                sinopse: filme.overview,
                ano: filme.release_date.substring(0, 4),
                nota: filme.vote_average,
                src: this.TMBD_IMAGEPATH + filme.backdrop_path,
                tipo: 'filme',
              } as Midia)
          )
        )
      );
  }

  getSeries() {
    return this.http
      .get<{
        results: {
          name: string;
          backdrop_path: string;
          overview: string;
          first_air_date: string;
          vote_average: string;
        }[];
      }>(
        `https://api.themoviedb.org/3/tv/popular?api_key=${this.TMBD_TOKEN}&language=pt-BR&page=1&region=BR`
      )
      .pipe(
        map(response =>
          response.results.map(
            serie =>
              ({
                titulo: serie.name,
                sinopse: serie.overview,
                ano: serie.first_air_date.substring(0, 4),
                nota: serie.vote_average,
                src: this.TMBD_IMAGEPATH + serie.backdrop_path,
                tipo: 'serie',
              } as Midia)
          )
        )
      );
  }
}

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

  getMidias() {
    return this.http
      .get<{
        results: { title: string; backdrop_path: string; overview: string }[];
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
                src: this.TMBD_IMAGEPATH + filme.backdrop_path,
                tipo: 'filme',
              } as Midia)
          )
        )
      );
  }
}

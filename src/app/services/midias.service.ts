import { map, of } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Midia } from 'src/app/models/midia.model';

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class MidiasService {
  private readonly TMBD_TOKEN = environment.tmbdToken;

  constructor(private http: HttpClient) {}

  // getMidias() {
  //   const midias: Midia[] = [];

  //   midias.push({
  //     titulo: 'BLADE RUNNER 2049',
  //     src: '/assets/image-17.png',
  //     ano: '2017',
  //     duracao: '2h 43m',
  //     tipo: 'filme',
  //     sinopse:
  //       'Em Blade Runner 2049, após os problemas enfrentados com os Nexus 8, uma nova espécie de replicantes é desenvolvida, de forma que seja mais obediente aos humanos. Um deles é K (Ryan Gosling), um blade runner que caça replicantes foragidos para a polícia de Los Angeles. Após encontrar Sapper Morton (Dave Bautista), K descobre um fascinante segredo: a replicante Rachel (Sean Young) teve um filho, mantido em sigilo até então. A possibilidade de que replicantes se reproduzam pode desencadear uma guerra deles com os humanos, o que faz com que a tenente Joshi (Robin Wright), chefe de K, o envie para encontrar e eliminar a criança.',
  //   });

  //   midias.push({
  //     titulo: 'THE BATMAN',
  //     src: '/assets/image-18.png',
  //     ano: '2022',
  //     duracao: '2h 56m',
  //     tipo: 'filme',
  //     sinopse:
  //       'The Batman segue o segundo ano de Bruce Wayne (Robert Pattinson) como o herói de Gotham, causando medo nos corações dos criminosos da sombria cidade. Com apenas alguns aliados de confiança - Alfred Pennyworth (Andy Serkis) e o tenente James Gordon (Jeffrey Wright) - entre a rede corrupta de funcionários e figuras importantes do distrito, o vigilante solitário se estabeleceu como a única personificação da vingança entre seus concidadãos. Durante uma de suas investigações, Bruce acaba envolvendo a si mesmo e Gordon em um jogo de gato e rato, ao investigar uma série de maquinações sádicas em uma trilha de pistas enigmáticas estabelecida pelo vilão Charada.',
  //   });

  //   midias.push({
  //     titulo: 'EVERYTHING EVERYWHERE ALL AT ONCE',
  //     src: '/assets/image-16.png',
  //     ano: '2022',
  //     duracao: '2h 19m',
  //     tipo: 'filme',
  //     sinopse:
  //       'Everything everywhere all at once acompanhamos uma sobrecarregada imigrante chinesa, Evelyn Wang (Michelle Yeoh) que com sua lavanderia à beira do fracasso e seu casamento com o marido covarde em ruínas, ela luta para lidar com tudo, incluindo um relacionamento ruim com seu pai crítico e sua filha (Stephanie Hsu). E, como se não bastasse enfrentar a crise pessoal, Evelyn precisa se preparar para uma reunião desagradável com uma burocrata impessoal: Deirdre (Jamie Lee Curtis), a auditora da Receita Federal. No entanto, à medida que a agente severa perde a paciência, uma inexplicável fenda no multiverso se abre, e se torna uma possibilidade para a exploração reveladora de realidades paralelas.',
  //   });

  //   midias.push({
  //     titulo: 'NIGHTCRAWLER',
  //     src: '/assets/image-0.png',
  //     ano: '2014',
  //     duracao: '1h 57m',
  //     tipo: 'filme',
  //     sinopse:
  //       'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  //   });

  //   midias.push({
  //     titulo: 'FIGHT CLUB',
  //     src: '/assets/image-1.png',
  //     ano: '1999',
  //     duracao: '2h 19m',
  //     tipo: 'filme',
  //     sinopse:
  //       'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  //   });

  //   midias.push({
  //     titulo: 'NO COUNTRY FOR OLD MAN',
  //     src: '/assets/image-2.png',
  //     ano: '2007 ',
  //     duracao: '2h 2m',
  //     tipo: 'filme',
  //     sinopse:
  //       'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  //   });

  //   midias.push({
  //     titulo: 'NOCTURNAL ANIMALS',
  //     src: '/assets/image-3.png',
  //     ano: '2016 ',
  //     duracao: '1h 19m',
  //     tipo: 'filme',
  //     sinopse:
  //       'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  //   });

  //   midias.push({
  //     titulo: 'VIVARIUM',
  //     src: '/assets/image-4.png',
  //     ano: '2019  ',
  //     duracao: '1h 37m',
  //     tipo: 'filme',
  //     sinopse:
  //       'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  //   });

  //   midias.push({
  //     titulo: 'MARROWBONE',
  //     src: '/assets/image-5.png',
  //     ano: '2017 ',
  //     duracao: '1h 50m',
  //     tipo: 'filme',
  //     sinopse:
  //       'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  //   });

  //   midias.push({
  //     titulo: 'DONNIE DARKO',
  //     src: '/assets/image-6.png',
  //     ano: '2001  ',
  //     duracao: '1h 53m',
  //     tipo: 'filme',
  //     sinopse:
  //       'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  //   });

  //   midias.push({
  //     titulo: 'CONJURING',
  //     src: '/assets/image-7.png',
  //     ano: '2013',
  //     duracao: '1h 52m',
  //     tipo: 'filme',
  //     sinopse:
  //       'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  //   });

  //   midias.push({
  //     titulo: 'EUPHORIA',
  //     src: '/assets/image-8.png',
  //     ano: '2019',
  //     duracao: '2 temporadas',
  //     tipo: 'serie',
  //     sinopse:
  //       'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  //   });

  //   midias.push({
  //     titulo: 'BREAKING BAD',
  //     src: '/assets/image-9.png',
  //     ano: '2008',
  //     duracao: '5 temporadas',
  //     tipo: 'serie',
  //     sinopse:
  //       'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  //   });

  //   midias.push({
  //     titulo: 'SUPERNATURAL',
  //     src: '/assets/image-10.png',
  //     ano: '2005',
  //     duracao: '15 temporadas',
  //     tipo: 'serie',
  //     sinopse:
  //       'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  //   });

  //   midias.push({
  //     titulo: 'THE BOYS',
  //     src: '/assets/image-11.png',
  //     ano: '2019',
  //     duracao: '3 temporadas',
  //     tipo: 'serie',
  //     sinopse:
  //       'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  //   });

  //   midias.push({
  //     titulo: 'VAMPIRE DIARES',
  //     src: '/assets/image-12.png',
  //     ano: '2009',
  //     duracao: '8 temporadas',
  //     tipo: 'serie',
  //     sinopse:
  //       'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  //   });

  //   midias.push({
  //     titulo: 'STRANGER THINGS',
  //     src: '/assets/image-13.png',
  //     ano: '2016',
  //     duracao: '4 temporadas',
  //     tipo: 'serie',
  //     sinopse:
  //       'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  //   });

  //   midias.push({
  //     titulo: 'WANDAVISION',
  //     src: '/assets/image-14.png',
  //     ano: '2021',
  //     duracao: '1 temporada',
  //     tipo: 'serie',
  //     sinopse:
  //       'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  //   });

  //   midias.push({
  //     titulo: 'TEEN WOLF',
  //     src: '/assets/image-15.png',
  //     ano: '2011',
  //     duracao: '6 temporadas',
  //     tipo: 'serie',
  //     sinopse:
  //       'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  //   });

  //   return of(new HttpResponse<Midia[]>({ body: midias }));
  // }
  getMidias() {
    return this.http
      .get<{
        results: { name: string; list_type: string; description: string }[];
      }>(
        `https://api.themoviedb.org/3/movie/550/lists?api_key=${this.TMBD_TOKEN}`
      )
      .pipe(
        map(response =>
          response.results.map(
            filme =>
              ({
                titulo: filme.name,
                tipo: filme.list_type,
                sinopse: filme.description,
              } as Midia)
          )
        )
      );
  }

  //   description
  // :
  // "İzlediğim her türlü şey"
  // favorite_count
  // :
  // 0
  // id
  // :
  // 8218382
  // iso_639_1
  // :
  // "tr"
  // item_count
  // :
  // 176
  // list_type
  // :
  // "movie"
  // name
  // :
  // "İzlenenler"
  // poster_path
  // :
  // null
}

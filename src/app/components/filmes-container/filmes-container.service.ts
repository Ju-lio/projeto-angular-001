import { Midia } from 'src/app/models/models.model';

export class FilmesContainerService {
  loadFilmes(genre: string) {
    if (genre == 'filme-mais-acess') {
      return this.getFilmesMaisAcess();
    } else if (genre == 'serie-mais-acess') {
      return this.getSeriesMaisAcess(); //##JSC
    } else {
      return [];
    }
  }

  getFilmesMaisAcess() {
    const filmes: Midia[] = [];

    filmes.push({
      titulo: 'NIGHTCRAWLER',
      src: '../assets/filme-mais-acess-00.png',
      ano: '2014',
      duracao: '1h 57m',
    });

    filmes.push({
      titulo: 'FIGHT CLUB',
      src: '../assets/filme-mais-acess-01.png',
      ano: '1999',
      duracao: '2h 19m',
    });

    filmes.push({
      titulo: 'NO COUNTRY FOR OLD MAN',
      src: '../assets/filme-mais-acess-02.png',
      ano: '2007 ',
      duracao: '2h 2m',
    });

    filmes.push({
      titulo: 'NOCTURNAL ANIMALS',
      src: '../assets/filme-mais-acess-03.png',
      ano: '2016 ',
      duracao: '1h 19m',
    });

    filmes.push({
      titulo: 'VIVARIUM',
      src: '../assets/filme-mais-acess-04.png',
      ano: '2019  ',
      duracao: '1h 37m',
    });

    filmes.push({
      titulo: 'MARROWBONE',
      src: '../assets/filme-mais-acess-05.png',
      ano: '2017 ',
      duracao: '1h 50m',
    });

    filmes.push({
      titulo: 'DONNIE DARKO',
      src: '../assets/filme-mais-acess-06.png',
      ano: '2001  ',
      duracao: '1h 53m',
    });

    filmes.push({
      titulo: 'CONJURING',
      src: '../assets/filme-mais-acess-07.png',
      ano: '2013',
      duracao: '1h 52m',
    });

    return filmes;
  }

  getSeriesMaisAcess() {
    let series = [] as {
      titulo: string;
      src: string;
      ano: string;
      duracao: string;
    }[];

    series.push({
      titulo: 'EUPHORIA',
      src: '../assets/serie-mais-acess-01.png',
      ano: '2019',
      duracao: '2 temporadas',
    });

    series.push({
      titulo: 'BREAKING BAD',
      src: '../assets/serie-mais-acess-02.png',
      ano: '2008',
      duracao: '5 temporadas',
    });

    series.push({
      titulo: 'SUPERNATURAL',
      src: '../assets/serie-mais-acess-03.png',
      ano: '2005',
      duracao: '15 temporadas',
    });

    series.push({
      titulo: 'THE BOYS',
      src: '../assets/serie-mais-acess-04.png',
      ano: '2019',
      duracao: '3 temporadas',
    });

    series.push({
      titulo: 'VAMPIRE DIARES',
      src: '../assets/serie-mais-acess-05.png',
      ano: '2009',
      duracao: '8 temporadas',
    });

    series.push({
      titulo: 'STRANGER THINGS',
      src: '../assets/serie-mais-acess-06.png',
      ano: '2016',
      duracao: '4 temporadas',
    });

    series.push({
      titulo: 'WANDAVISION',
      src: '../assets/serie-mais-acess-07.png',
      ano: '2021',
      duracao: '1 temporada',
    });

    series.push({
      titulo: 'TEEN WOLF',
      src: '../assets/serie-mais-acess-08.png',
      ano: '2011',
      duracao: '6 temporadas',
    });

    return series;
  }
}

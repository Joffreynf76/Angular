import { Injectable } from '@angular/core';
import { Http} from "@angular/http";

@Injectable()
export class GestionFilmService {
  private movieList: Array<object>;
  constructor( private http : Http) {
      /*this.movieList = [{
          id:'1',
          titre: "Coco",
          realisateur: "Lee Unkrich",
          date: "2017-11-29",
          lien : "https://fr.wikipedia.org/wiki/Lee_Unkrich",
          note : '5',
          resume:'Depuis déjà plusieurs générations, la musique est bannie dans la famille de Miguel. Un vrai déchirement pour le jeune garçon dont le rêve ultime est de devenir un musicien aussi accompli que son idole, Ernesto de la Cruz. \n' +
          'Bien décidé à prouver son talent, Miguel, par un étrange concours de circonstances, se retrouve propulsé dans un endroit aussi étonnant que coloré : le Pays des Morts. Là, il se lie d’amitié avec Hector, un gentil garçon mais un peu filou sur les bords. Ensemble, ils vont accomplir un voyage extraordinaire qui leur révèlera la véritable histoire qui se cache derrière celle de la famille de Miguel…'


      },
          {
              id:'2',
              titre: "Django Unchained",
              realisateur: "Quentin Tarantino",
              date: "2013-01-16",
              lien:"https://fr.wikipedia.org/wiki/Quentin_Tarantino",
              note : '5',
              resume:'Dans le sud des États-Unis, deux ans avant la guerre de Sécession, le Dr King Schultz, un chasseur de primes allemand, fait l’acquisition de Django, un esclave qui peut l’aider à traquer les frères Brittle, les meurtriers qu’il recherche. Schultz promet à Django de lui rendre sa liberté lorsqu’il aura capturé les Brittle – morts ou vifs.\n' +
              'Alors que les deux hommes pistent les dangereux criminels, Django n’oublie pas que son seul but est de retrouver Broomhilda, sa femme, dont il fut séparé à cause du commerce des esclaves…\n' +
              'Lorsque Django et Schultz arrivent dans l’immense plantation du puissant Calvin Candie, ils éveillent les soupçons de Stephen, un esclave qui sert Candie et a toute sa confiance. Le moindre de leurs mouvements est désormais épié par une dangereuse organisation de plus en plus proche… Si Django et Schultz veulent espérer s’enfuir avec Broomhilda, ils vont devoir choisir entre l’indépendance et la solidarité, entre le sacrifice et la survie…'
          },

          {
              id:'3',
              titre: "Retour vers le futur",
              realisateur: "Robert Zemeckis",
              date: "1985-10-30",
              lien:"https://fr.wikipedia.org/wiki/Robert_Zemeckis",
              note : '5',
              resume:'1985. Le jeune Marty McFly mène une existence anonyme auprès de sa petite amie Jennifer, seulement troublée par sa famille en crise et un proviseur qui serait ravi de l\'expulser du lycée. Ami de l\'excentrique professeur Emmett Brown, il l\'accompagne un soir tester sa nouvelle expérience : le voyage dans le temps via une DeLorean modifiée. La démonstration tourne mal : des trafiquants d\'armes débarquent et assassinent le scientifique. Marty se réfugie dans la voiture et se retrouve transporté en 1955. Là, il empêche malgré lui la rencontre de ses parents, et doit tout faire pour les remettre ensemble, sous peine de ne pouvoir exister...'
          },

          {
              id:'4',
              titre: "Avengers",
              realisateur: "Joss Whedon",
              date: "2012-04-25",
              lien : "https://fr.wikipedia.org/wiki/Joss_Whedon",
              note : '4',
              resume:'Lorsque Nick Fury, le directeur du S.H.I.E.L.D., l\'organisation qui préserve la paix au plan mondial, cherche à former une équipe de choc pour empêcher la destruction du monde, Iron Man, Hulk, Thor, Captain America, Hawkeye et Black Widow répondent présents.\n' +
              'Les Avengers ont beau constituer la plus fantastique des équipes, il leur reste encore à apprendre à travailler ensemble, et non les uns contre les autres, d\'autant que le redoutable Loki a réussi à accéder au Cube Cosmique et à son pouvoir illimité...'
          }


      ]*/
  }
  getAll(){
    return this.http.get('http://localhost:3000/movieList').toPromise().then(response => response.json())
        .catch(err =>console.log('Une erreur est survenue'));
  }


}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {

  artista: any[] = [];
  topTracks: any[] = [];
  // tslint:disable-next-line: no-inferrable-types
  loading: boolean = false;

  constructor( private activated: ActivatedRoute,
               private spotify: SpotifyService) {
    this.activated.params.subscribe( params => {
      // tslint:disable-next-line: no-string-literal
      console.log('console1 ' + params['id']);
      // tslint:disable-next-line: no-string-literal
      this.getArtista(params['id']);
      // tslint:disable-next-line: no-string-literal
      this.getTop(params['id']);
    });
   }

   getArtista( id: string ) {
     this.loading = true;
     this.spotify.getArtista( id )
    .subscribe( (artista: any) => {
      this.loading = false;
      this.artista = artista;
      console.log(this.artista);
    });
   }

   getTop( id: string) {
     this.spotify.getTop( id )
     .subscribe( topTracks => {
      console.log(topTracks);
      this.topTracks = topTracks;
     });
   }

  ngOnInit() {
  }

}

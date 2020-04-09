import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  loading: boolean;
  // tslint:disable-next-line: no-inferrable-types
  mensaje: any[] = [];

  constructor( private spotify: SpotifyService) {
    this.loading = true;
    this.spotify.getNewReleases()
    .subscribe ( (data: any) => {
      this.loading = false;
      this.nuevasCanciones = data;
    }, ( errorService ) => {
      console.log(errorService);
      this.loading = false;
      this.mensaje = (errorService.error.error.message);
    });

  }

  ngOnInit() {
  }

}

/*
paises: any[] = [];
 constructor( private http: HttpClient, ) {
  this.http.get('https://restcountries.eu/rest/v2/lang/es')
  .subscribe( (resp: any) => {
    this.paises = resp;
    console.log(this.paises);
  });
  console.log('informacion obtenida');
}
--> */

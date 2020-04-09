import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})

export class SearchComponent implements OnInit {

  constructor( private spotify: SpotifyService) { }

  loading: boolean;
  artistas: any[] = [];
  mensaje: any[] = [];

  buscar(txtBuscar: string) {
    this.loading = true;
    this.spotify.getArtistas(txtBuscar)
    .subscribe( (data: any) => {
      this.loading = false;
      this.artistas = data;
    }, (mensaje) => {
      this.loading = false;
      console.log(mensaje);
      this.mensaje = mensaje.error.error.message;
    });
  }
  ngOnInit(): void {
  }


}

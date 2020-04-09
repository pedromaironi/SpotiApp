import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  @Input() items: any[] = [];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  verArtista( item ) {
    let artistaID;

    // tslint:disable-next-line: triple-equals
    if (item.type == 'artist') {
      artistaID = item.id;
    } else {
      artistaID = item.artists[0].id;
    }
    console.log(artistaID);
    this.router.navigate(['/artista', artistaID]);
  }

}

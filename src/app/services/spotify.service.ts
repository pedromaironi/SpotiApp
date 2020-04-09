import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private Http: HttpClient) {
    console.log('spotify service listo');
   }

   getQuery( query: string) {
     const url = `https://api.spotify.com/v1/${query}`;

     const headers = new HttpHeaders({
      Authorization: 'Bearer BQD3miWkLdE2pHfRv38GMnZrfHFXYD6qzjNtDihANWrAqb51wDQda6_oXk4pnt2-AOTZT7exzM_Eg9_HGxg'
    });

     return this.Http.get(url, {headers});
   }

   getNewReleases() {
    return this.getQuery('browse/new-releases')
    // tslint:disable-next-line: no-string-literal
    .pipe( map( data => data['albums'].items));

    // Anterior return
    /*const headers = new HttpHeaders({
      Authorization: 'Bearer BQC7G2w2mUPAovLNjVcsOjLwgcjRLERGcEvCi-LO8sZURQEEPKvPPjmcDoS01kxEwOjhQyLoix_pi47p_yY'
    });*/
   }

   getArtistas(termino: string) {
    // `` Por que utilizamos un template {}
      return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe( map(data =>
        // tslint:disable-next-line: no-string-literal
        data['artists'].items
      ));

    // Anterior return
     /* ``````
      return this.Http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, { headers })
      */
   }

   getArtista( id: string ) {
    // `` Por que utilizamos un template {}
      return this.getQuery(`artists/${ id }`);
      // .pipe( map(data =>s
      //   // tslint:disable-next-line: no-string-literal
      //   data['artists'].items
      // ));

    // Anterior return
     /* ``````
      return this.Http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, { headers })
      */
   }

   getTop( id: string ) {
      return this.getQuery(`artists/${ id }/top-tracks?country=us`)
      .pipe( map(data =>
        // tslint:disable-next-line: no-string-literal
        data['tracks']));
   }



}

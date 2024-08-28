import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class JsonPlaceholderService {
  //YmjnFTA9xkuy9GzbuhvMtoHhmcSWCijtEaGBgrYSXu7EFk2oLgLzVOTQ
  // private apiUrl = 'https://api.pexels.com/v1/';
  // private apiKey = 'YmjnFTA9xkuy9GzbuhvMtoHhmcSWCijtEaGBgrYSXu7EFk2oLgLzVOTQ'; // Reemplaza con tu clave de API

  // constructor(private http: HttpClient) { }

  // // Método para obtener imágenes aleatorias
  // getRandomImage(query: string): Observable<any> {
  //   const headers = new HttpHeaders({
  //     'Authorization': this.apiKey
  //   });
  //   return this.http.get<any>(`${this.apiUrl}search?query=${query}&per_page=1`, { headers });
  // }
  private baseUrl = 'https://picsum.photos/';

  getRandomPhoto(width: number = 300, height: number = 200): string {
    return `${this.baseUrl}${width}/${height}`;
  }
}

import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnimeService {
  constructor(private http: HttpClient) {}

  async get(url: string, search: object = {}) {
    const params = {
      params: {
        'test': 'pog'
      }
    };
    const get$ = this.http.get(environment.apiAnimeUrl + url, params);
    const data = await firstValueFrom(get$);
    return data;
  }
}
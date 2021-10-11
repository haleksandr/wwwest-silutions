import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from './shared/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  public getNews(): Observable<News[]> {
    return this.http.get<News[]>(
      `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${environment.apiKeyNews}`
    );
  }
}

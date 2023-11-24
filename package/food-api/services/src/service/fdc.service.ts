import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FdcService {
  private apiKey = 'xfITlKQ9dE74iWGyGvlW0bAncnZnjjlKGLcQrsGR';
  readonly resourceUrl = 'https://api.nal.usda.gov/fdc/v1/';

  constructor(
    private httpClient: HttpClient,
    private domSanitizer: DomSanitizer
  ) {}

  searchFoodDetail(searchResult: string): Observable<any> {
    return this.httpClient.get(
      `${this.resourceUrl}foods/search?api_key=${this.apiKey}&query=${searchResult}`
    );
  }
}

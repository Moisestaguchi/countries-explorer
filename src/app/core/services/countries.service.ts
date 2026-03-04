import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../../features/countries/models/country.model';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private readonly baseUrl = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  getAllCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(
      `${this.baseUrl}/all?fields=name,population,region,capital,flags,cca3`
    );
  }


  getCountryByName(name: string): Observable<Country[]> {
    return this.http.get<Country[]>(
      `${this.baseUrl}/name/${name}`
    );
  }

  getCountriesByRegion(region: string): Observable<Country[]> {
    return this.http.get<Country[]>(
      `${this.baseUrl}/region/${region}`
    );
  }

  getCountryByCode(code: string): Observable<Country> {
  return this.http.get<Country>(
    `${this.baseUrl}/alpha/${code}?fields=name,population,region,subregion,capital,flags,languages,currencies,borders,cca3`
  );
}

  getCountriesByCodes(codes: string[]): Observable<Country[]> {
    return this.http.get<Country[]>(
      `${this.baseUrl}/alpha?codes=${codes.join(',')}&fields=name,cca3,flags`
    );
  }

}

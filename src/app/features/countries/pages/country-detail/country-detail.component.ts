import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../../../core/services/countries.service';
import { Country } from '../../models/country.model';
import { LoadingSpinnerComponent } from '../../../../shared/components/loading-spinner/loading-spinner.component';
import { ErrorMessageComponent } from '../../../../shared/components/error-message/error-message.component';

@Component({
  selector: 'app-country-detail',
  standalone: true,
  imports: [LoadingSpinnerComponent, ErrorMessageComponent],
  templateUrl: './country-detail.component.html',
  styleUrl: './country-detail.component.scss'
})
export class CountryDetailComponent implements OnInit {
  country: Country | null = null;
  borderCountries: Country[] = [];
  isLoading = false;
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private countriesService: CountriesService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const code = params.get('code');
      if (code) this.loadCountry(code);
    });
  }

  loadCountry(code: string): void {
    this.isLoading = true;
    this.errorMessage = '';
    this.borderCountries = [];

    this.countriesService.getCountryByCode(code).subscribe({
      next: (data) => {
        this.country = data; // direto, sem [0]
        this.isLoading = false;
        if (this.country?.borders?.length) {
          this.loadBorders(this.country.borders);
        }
      },
      error: () => {
        this.errorMessage = 'Erro ao carregar o país.';
        this.isLoading = false;
      }
    });
  }

  loadBorders(codes: string[]): void {
    this.countriesService.getCountriesByCodes(codes).subscribe({
      next: (data) => this.borderCountries = data,
      error: () => { }
    });
  }

  goToBorder(code: string): void {
    this.router.navigate(['/countries', code]);
  }

  goBack(): void {
    this.router.navigate(['/countries']);
  }

  get languages(): string {
    if (!this.country?.languages) return 'N/A';
    return Object.values(this.country.languages).join(', ');
  }

  get currencies(): string {
    if (!this.country?.currencies) return 'N/A';
    return Object.values(this.country.currencies)
      .map(c => `${c.name} (${c.symbol})`)
      .join(', ');
  }

  get capital(): string {
    return this.country?.capital?.[0] ?? 'N/A';
  }

  get formattedPopulation(): string {
    return this.country?.population.toLocaleString('pt-BR') ?? '0';
  }
}
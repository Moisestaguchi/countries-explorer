import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from '../../models/country.model';

@Component({
  selector: 'app-country-card',
  standalone: true,
  imports: [],
  templateUrl: './country-card.component.html',
  styleUrl: './country-card.component.scss'
})
export class CountryCardComponent {
  @Input() country!: Country;

  constructor(private router: Router) {}

  goToDetail(): void {
    this.router.navigate(['/countries', this.country.cca3]);
  }

  get formattedPopulation(): string {
    return this.country.population.toLocaleString('pt-BR');
  }

  get capital(): string {
    return this.country.capital?.[0] ?? 'N/A';
  }
}
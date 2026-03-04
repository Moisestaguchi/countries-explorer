import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CountriesService } from '../../../../core/services/countries.service';
import { Country } from '../../models/country.model';

import { LoadingSpinnerComponent } from '../../../../shared/components/loading-spinner/loading-spinner.component';
import { ErrorMessageComponent } from '../../../../shared/components/error-message/error-message.component';
import { RegionFilterComponent } from '../../components/region-filter/region-filter.component';
import { CountryCardComponent } from '../../components/country-card/country-card.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';

@Component({
  selector: 'app-countries-list',
  standalone: true,
    imports: [
    CommonModule,
    SearchBarComponent,
    RegionFilterComponent,
    CountryCardComponent,
    LoadingSpinnerComponent,
    ErrorMessageComponent
  ],
  templateUrl: './countries-list.component.html',
  styleUrl: './countries-list.component.scss'
})
export class CountriesListComponent implements OnInit {

  countries: Country[] = [];
  filteredCountries: Country[] = [];

  searchTerm = '';
  selectedRegion = '';
  sortBy = '';

  isLoading = false;
  errorMessage = '';

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.fetchCountries();
  }

  fetchCountries(): void {
    this.isLoading = true;

    this.countriesService.getAllCountries().subscribe({
      next: (data) => {
        this.countries = data;
        this.applyFilters();
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Erro ao carregar países.';
        this.isLoading = false;
      }
    });
  }

  onSearch(term: string) {
    this.searchTerm = term;
    this.applyFilters();
  }

  onRegionChange(region: string) {
    this.selectedRegion = region;
    this.applyFilters();
  }

  onSortChange(sort: string) {
    this.sortBy = sort;
    this.applyFilters();
  }

  private applyFilters() {
    let result = [...this.countries];

    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      result = result.filter(c =>
        c.name.common.toLowerCase().includes(term)
      );
    }

    if (this.selectedRegion) {
      result = result.filter(c => c.region === this.selectedRegion);
    }

    if (this.sortBy === 'name') {
      result.sort((a, b) => a.name.common.localeCompare(b.name.common));
    }

    if (this.sortBy === 'population') {
      result.sort((a, b) => b.population - a.population);
    }

    this.filteredCountries = result;
  }
}
import { Component, OnInit } from '@angular/core';
import { CloroMeasurement } from '../../types/cloro-Measurement.model';
import { SupabaseService } from '../../services/supabase.service';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from "../../search.pipe";

@Component({
    selector: 'app-cloro-table',
    standalone: true,
    templateUrl: './cloro-table.component.html',
    styleUrl: './cloro-table.component.css',
    imports: [FormsModule, SearchPipe]
})
export class CloroTableComponent implements OnInit{
  cloroMeasurements: CloroMeasurement[] = [];
  filteredCloroMeasurements: CloroMeasurement[] = [];
  loading = true;
  error: string | null = null;
  searchText = '';

  constructor(private supabaseService: SupabaseService) {}

  async ngOnInit(){
    try {
      this.cloroMeasurements = await this.supabaseService.getCloroMeasurements();
      this.filteredCloroMeasurements = this.cloroMeasurements;
    }
    catch (error) {
      this.error = 'Failed to fetch water quality data. Please try again later.';
      console.error(error);
    }
    finally {
      this.loading = false;
      this.applyFilter();
    }
  }

  applyFilter() {
    const searchPipe = new SearchPipe();
    this.filteredCloroMeasurements = searchPipe.transform(this.cloroMeasurements, this.searchText, 'location');
  }

}

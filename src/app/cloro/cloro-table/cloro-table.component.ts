import { Component, OnInit } from '@angular/core';
import { CloroMeasurement } from '../../types/cloro-Measurement.model';
import { SupabaseService } from '../../services/supabase.service';

@Component({
  selector: 'app-cloro-table',
  standalone: true,
  imports: [],
  templateUrl: './cloro-table.component.html',
  styleUrl: './cloro-table.component.css'
})
export class CloroTableComponent implements OnInit{
  cloroMeasurements: CloroMeasurement[] = [];
  loading = true;
  error: string | null = null;

  constructor(private supabaseService: SupabaseService) {}

  async ngOnInit(){
    try {
      this.cloroMeasurements = await this.supabaseService.getCloroMeasurements();
    }
    catch (error) {
      this.error = 'Failed to fetch water quality data. Please try again later.';
      console.error(error);
    }
    finally {
      this.loading = false;
    }
  }

}

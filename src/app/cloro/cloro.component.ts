import { Component, OnInit } from '@angular/core';
import { SupabaseService } from '../services/supabase.service';
import { CloroMeasurement } from '../types/cloro-Measurement.model';

@Component({
  selector: 'app-cloro',
  standalone: true,
  imports: [],
  templateUrl: './cloro.component.html',
  styleUrl: './cloro.component.css'
})
export class CloroComponent implements OnInit{
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

import { Injectable } from '@angular/core';
import { SupabaseClient } from '@supabase/supabase-js';
import { createBrowserClient } from '@supabase/ssr';
import { CloroMeasurement } from '../types/cloro-Measurement.model';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() { 
    this.supabase = createBrowserClient(environment.supabaseUrl, environment.supabaseKey);
  }

  async getCloroMeasurements(): Promise<CloroMeasurement[]> {
    const { data, error } = await this.supabase
      .from('freechlorine')
      .select('*')
    if (error) {
      console.error('Error fetching cloro measurements:', error.message);
      return [];
    }
    return data as CloroMeasurement[];
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloroTableComponent } from './cloro-table.component';

describe('CloroTableComponent', () => {
  let component: CloroTableComponent;
  let fixture: ComponentFixture<CloroTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloroTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CloroTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloroComponent } from './cloro.component';

describe('CloroComponent', () => {
  let component: CloroComponent;
  let fixture: ComponentFixture<CloroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CloroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

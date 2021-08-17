import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleCarouselComponent } from './example-carousel.component';

describe('ExampleCarouselComponent', () => {
  let component: ExampleCarouselComponent;
  let fixture: ComponentFixture<ExampleCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

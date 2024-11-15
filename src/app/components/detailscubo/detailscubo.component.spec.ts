import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailscuboComponent } from './detailscubo.component';

describe('DetailscuboComponent', () => {
  let component: DetailscuboComponent;
  let fixture: ComponentFixture<DetailscuboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailscuboComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailscuboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SprinklerMainComponent } from './sprinkler-main.component';

describe('SprinklerMainComponent', () => {
  let component: SprinklerMainComponent;
  let fixture: ComponentFixture<SprinklerMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SprinklerMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SprinklerMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactShowComponent } from './contact-show.component';

describe('ContactShowComponent', () => {
  let component: ContactShowComponent;
  let fixture: ComponentFixture<ContactShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

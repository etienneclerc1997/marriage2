import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogContributeComponent } from './dialog-contribute.component';

describe('DialogContributeComponent', () => {
  let component: DialogContributeComponent;
  let fixture: ComponentFixture<DialogContributeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogContributeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogContributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

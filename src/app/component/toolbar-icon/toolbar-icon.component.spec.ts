import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarIconComponent } from './toolbar-icon.component';

describe('ToolbarIconComponent', () => {
  let component: ToolbarIconComponent;
  let fixture: ComponentFixture<ToolbarIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

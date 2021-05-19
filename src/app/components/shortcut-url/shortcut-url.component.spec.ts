import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortcutUrlComponent } from './shortcut-url.component';

describe('ShortcutUrlComponent', () => {
  let component: ShortcutUrlComponent;
  let fixture: ComponentFixture<ShortcutUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortcutUrlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortcutUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

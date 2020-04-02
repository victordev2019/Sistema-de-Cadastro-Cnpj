import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPj.ComponentComponent } from './cadastro-pj.component.component';

describe('CadastroPj.ComponentComponent', () => {
  let component: CadastroPj.ComponentComponent;
  let fixture: ComponentFixture<CadastroPj.ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroPj.ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroPj.ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

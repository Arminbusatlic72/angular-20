import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirectiveNgforVsFo } from './structural-directive-ngfor-vs-fo';

describe('StructuralDirectiveNgforVsFo', () => {
  let component: StructuralDirectiveNgforVsFo;
  let fixture: ComponentFixture<StructuralDirectiveNgforVsFo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuralDirectiveNgforVsFo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuralDirectiveNgforVsFo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

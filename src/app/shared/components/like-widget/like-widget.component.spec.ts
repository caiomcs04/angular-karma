import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UniqueIdService } from '../../services/unique-id/unique-id.service';

import { LikeWidgetComponent } from './like-widget.component';
import { LikeWidgetModule } from './like-widget.module';

describe(LikeWidgetComponent.name, () => {
  let fixture: ComponentFixture<LikeWidgetComponent> = null;
  let component: LikeWidgetComponent = null;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LikeWidgetModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LikeWidgetComponent)
    component = fixture.componentInstance;
  });

  it('Should create component', () => {
    expect(component).toBeTruthy();
  });

  it('Should auto generate ID when id input prop is missing', () => {
    //por padrao nao é detectado mudança de estado pelo angular
    //para detectar mudanças devemos utilizar o detectChanges do fixture
    //ele é responsavel por disparar o ngOnInit
    //é possivel fazer de forma automatica passando 
    //a responsabilidade para o provider fixture. porém não é recomendavel que se faça isso
    fixture.detectChanges();

    expect(component.id).toBeTruthy();
  })

  it('Should auto generate ID when id input prop is present', () => {
    const someId = 'someId';
    component.id = someId
    fixture.detectChanges();

    expect(component.id).toBeTruthy();
  })
});

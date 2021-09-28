import { ComponentFixture, TestBed } from '@angular/core/testing';
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

  it('Should auto-generate ID during ngOnInit when (@Input id) is not assigned', () => {
    //por padrao nao é detectado mudança de estado pelo angular
    //para detectar mudanças devemos utilizar o detectChanges do fixture
    //ele é responsavel por disparar o ngOnInit
    //é possivel fazer de forma automatica passando 
    //a responsabilidade para o provider fixture. porém não é recomendavel que se faça isso
    fixture.detectChanges();

    expect(component.id).toBeTruthy();
  })

  it('Should NOT auto-generate ID during ngOnInit when (@Input id) is assigned', () => {
    const someId = 'someId';
    component.id = someId
    fixture.detectChanges();

    expect(component.id).toBeTruthy();
  })

  it(`#${LikeWidgetComponent.prototype.like.name} should trigger (@Output liked) when called`, () => {

    //spy on espiona o metodo de certo objeto para avisar
    //ao jasmine quando o metodo é chamado
    spyOn(component.liked, 'emit')
    fixture.detectChanges();
    component.like();
    expect(component.liked.emit).toHaveBeenCalled();
  })
});

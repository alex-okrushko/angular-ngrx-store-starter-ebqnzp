import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { StoreModule, Store } from '@ngrx/store';
import * as fromRoot from './reducers';
import * as counterActions from './actions/counter.actions';
import { HelloComponent } from './hello.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let store: Store<fromRoot.AppState>;
  let compEl: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot(fromRoot.reducers)],
      declarations: [AppComponent, HelloComponent]
    }).compileComponents();

    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    compEl = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  }));

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Angular & NgRx'`, () => {
    expect(component.name).toEqual('Angular & NgRx');
  });

  it('should render title in a h1 tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'Hello Angular & NgRx'
    );
  });

  it('should dispatch an action to load data when created', () => {
    const action = counterActions.increment();
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should display counter value', () => {
    const span = compEl.querySelector('#num');
    expect(span.textContent).toEqual('2');
  });
});

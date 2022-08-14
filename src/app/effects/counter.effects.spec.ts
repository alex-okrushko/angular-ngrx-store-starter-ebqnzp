import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CounterEffects } from './counter.effects';
import { StorageMap } from '@ngx-pwa/local-storage';
import { storeCounter } from '../actions/counter.actions';

describe('CounterEffects', () => {
  // let actions$: Observable<any>;
  let effects: CounterEffects;
  let storage: StorageMap;
  const action = storeCounter({ val: 10 });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CounterEffects,
        // provideMockActions(() => actions$),
        StorageMap
      ]
    });
    storage = TestBed.get(StorageMap);
    effects = TestBed.get<CounterEffects>(CounterEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should call storage on action', () => {});
});

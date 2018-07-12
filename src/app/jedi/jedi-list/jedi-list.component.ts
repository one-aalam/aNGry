import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Jedi, JediState } from './jedi-list.model';
import { addJedi, remJedi, loadJedis } from './jedi-list.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'jedi-list',
  templateUrl: './jedi-list.component.html',
  styleUrls: ['./jedi-list.component.css']
})
export class JediListComponent {
  list$: Observable<Array<Jedi>>;
  counter=0
  newJedi=""

  constructor(private store: Store<JediState>) {
    this.list$ = this.store.select(state => {
      return state.jediList;
    })
  }

  add() {
    this.store.dispatch(addJedi(
      this.newJedi
    ));
    this.newJedi = "";
  }

  remove(id) {
    this.store.dispatch(
      remJedi(id)
    )
  }

  clear() {
    this.store.dispatch(
      loadJedis(
        []
      )
    );
  }
}

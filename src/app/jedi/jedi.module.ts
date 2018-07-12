import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { JediListComponent } from './jedi-list/jedi-list.component';
import { jediListReducer } from './jedi-list/jedi-list.reducer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature(
      'jediList',
      jediListReducer
    )
  ],
  declarations: [JediListComponent],
  exports: [JediListComponent],
  bootstrap: [JediListComponent]
})
export class JediModule { }

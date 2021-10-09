import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TRANSLOCO_SCOPE} from '@ngneat/transloco';

@NgModule({
  imports: [CommonModule],
  providers: [{
    provide: TRANSLOCO_SCOPE,
    useValue: 'my-lib-one'
  }],
})
export class MyLibOneModule {}

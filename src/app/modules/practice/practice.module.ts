import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { PracticeRoutingModule } from './practice-routing.module';
import { CounterComponent } from './counter/counter.component';
import { ComunicationComponent } from './comunication/comunication.component';

@NgModule({
  imports: [
    CommonModule,
    PracticeRoutingModule,
    SharedModule
  ],
  declarations: [CounterComponent, ComunicationComponent],
  entryComponents: []
})
export class PracticeModule { }

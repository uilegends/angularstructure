import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerSaveComponent } from './customer-save/customer-save.component';

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule,
    SharedModule
  ],
  declarations: [
    CustomerListComponent,
    CustomerSaveComponent
  ],
  entryComponents: []
})
export class CustomersModule { }

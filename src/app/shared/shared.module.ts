import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: []
})
export class SharedModule { }

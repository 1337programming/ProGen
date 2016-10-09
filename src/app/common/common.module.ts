import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {CommonModule} from '@angular/common';

// Modules

// Components
import {HomeComponent} from './components/home/home.component';

// Routes
import {routing} from '../app.router';

// Services

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule, HttpModule, routing
  ],
  declarations: [HomeComponent],
  exports: []
})
export class AppCommonModule {
}

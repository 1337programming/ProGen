import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {CommonModule} from '@angular/common';

// Modules

// Components
import {NavbarComponent} from './components/navbar/navbar.component';

// Routes
import {routing} from '../app.router';

// Services
import {AuthService} from './services/auth.service';
import {AuthGuard} from './services/auth-guards.service';
import {CommonService} from './services/common.service';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule, HttpModule, routing
  ],
  declarations: [NavbarComponent],
  providers: [AuthService, AuthGuard, CommonService],
  exports: [NavbarComponent]
})
export class AppCommonModule {
}

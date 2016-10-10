import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

// Modules
import {PanelMenuModule} from 'primeng/primeng';

// Components
import {DashboardComponent} from './dashboard.component';
import {DrawerComponent} from './components/drawer/drawer.component';
import {HomeComponent} from './components/home/home.component';

// Services
import {DrawerService} from './components/drawer/services/drawer.service';

// Routing
import {routing} from './dashboard.router';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule, HttpModule, PanelMenuModule, routing
  ],
  declarations: [DashboardComponent, DrawerComponent, HomeComponent],
  providers: [
    DrawerService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ]
})
export class DashboardModule {
}

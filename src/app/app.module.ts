import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

// Modules
import {AppCommonModule} from './common/common.module';
import {DashboardModule} from './modules/dashboard/dashboard.module';

// Components
import {AppComponent} from './app.component';

// Services
import {CommonService} from './common/services/common.service';
import {DrawerService} from './modules/dashboard/components/drawer/services/drawer.service';

// Routing
import {routing, appRoutingProviders} from './app.router';

@NgModule({
  imports: [
    BrowserModule, ReactiveFormsModule, FormsModule, HttpModule, AppCommonModule, DashboardModule, routing
  ],
  declarations: [AppComponent],
  providers: [
    CommonService,
    DrawerService,
    appRoutingProviders,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

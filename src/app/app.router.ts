import {Routes, RouterModule}   from '@angular/router';
import {ModuleWithProviders}  from '@angular/core';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
];


/**
 * Routing Providers for the App
 * @type {Array}
 */
export const appRoutingProviders: any[] = [];

/**
 * Routes for the App
 * @type {ModuleWithProviders}
 */
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

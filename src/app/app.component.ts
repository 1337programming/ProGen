import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app',
  template: `
        <div (window:resize)="onWindowResize()">
            <router-outlet></router-outlet>
        </div>
            `
})
export class AppComponent {
  
  public bufferLoaded = false;
  public size: any;
  
  constructor(private router: Router) {
    this.size = {};
    this.onWindowResize();
    setTimeout(() => this.bufferLoaded = true, 4200);
  }
  
  private onWindowResize() {
    this.size.width = window.innerWidth;
    this.size.height = window.innerHeight;
  }
  
  private getLoadProgress() {
    const bfrCount = this.bufferLoaded ? 1 : 0;
    return 101;
  }
  
  private isLoading() {
    return this.getLoadProgress() < 100;
  }
  
  private isLoggingIn(): boolean {
    return location.hash.indexOf('login') === -1;
  }
}

import {Component} from '@angular/core';
import {CommonService} from '../../services/common.service';

let template = require('./views/navbar.html');
let style = require('!!raw!sass!./views/navbar.scss');

@Component({
  selector: 'navbar',
  template: template,
  styles: [style]
})
export class NavbarComponent {
  
  constructor(private commonService:CommonService) {
  }
  
  public toggleDrawer():void {
    this.commonService.toggleDrawer();
  }
  
  public isOpen():boolean {
    return this.commonService.isOpen();
  }
  
}

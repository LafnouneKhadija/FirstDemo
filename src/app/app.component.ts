import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FirstApp';
  public currenRoute : any;
  constructor(private router : Router) {
  }

  gotoHome() {
    this.currenRoute = "home"
this.router.navigateByUrl("/home")
  }

  gotoProducts() {
    this.currenRoute = "products"
    this.router.navigateByUrl("/products")
  }
}

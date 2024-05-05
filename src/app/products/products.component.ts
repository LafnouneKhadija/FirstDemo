import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent  implements OnInit{
  public products : any;
  public Keyword : string ="";



  ngOnInit(): void {
    this.products = [

      {"id":1 , "name":"computer" , "price": 1230},
      {"id":2 , "name":"printer" , "price": 290},
      {"id":3 , "name":"smartphone" , "price": 140},
      {"id":4 , "name":"mouse" , "price": 123}
    ];
  }

  deleteProduct(p: any) {
  let index = this.products.indexOf(p);
  this.products.splice(index,1);
  }

  search() {
    console.log(this.Keyword);
    let result:any[]= [];
    for(let p of this.products){
      if(p.name.includes(this.Keyword)){
        result.push(p);
      }
    }
    this.products=result;
    //this.products = this.products.filter((p:any)=>p.name.includes(this.products));
  }
}

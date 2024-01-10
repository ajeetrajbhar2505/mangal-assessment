import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mangalApp';
  activeImagePath = 'product-1.png'
  productImages = ['product-1.png','product-2.png','product-3.png','product-4.png']
  index = 0
  toogle:boolean = false

  tooglMenu(){
    this.toogle = ! this.toogle
  }
  setActiveImage(path:string,index:number){
    this.index = index
    this.activeImagePath = path
  }

  nextImage() {
    this.index = (this.index + 1) % this.productImages.length;
    this.activeImagePath = this.productImages[this.index];
  }
  

}

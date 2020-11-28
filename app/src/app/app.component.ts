import {Component, OnInit, Renderer2, ViewChild } from '@angular/core';
declare var cv: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private renderer: Renderer2){
  }
zeros: any = new Lala();

script: HTMLScriptElement;
ngOnInit(){  
  this.script = this.renderer.createElement('script');
  this.renderer.appendChild(document.head, this.script);
  this.script.src = `https://docs.opencv.org/3.4.0/opencv.js`;
  this.script.onload = () => {
    console.log(this.zeros);
    this.zeros = cv.Mat.zeros(12, 69, cv.CV_8UC3);
    console.log(cv.Mat.zeros(12, 69, cv.CV_8UC3))
    console.log(this.zeros);
  }
}


}

class Lala{
  rows = 2;
  cols = 31;
}
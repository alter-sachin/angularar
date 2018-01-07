import {Component, OnInit, AfterViewInit, ElementRef} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , AfterViewInit{
iframe2Url:any ="https://sketchfab.com/models/5ef4a0ebf5bd4008976f8ef88c306b3e/embed?autostart=1";
  iframe1Url:any="https://sketchfab.com/models/acf17ee90c0043bd89fa4b635883f665/embed" ;

  constructor(private element:ElementRef) {
  }


  ngOnInit() {
  }

  ngAfterViewInit()
  {
  document.getElementById("iframe1").setAttribute("src",this.iframe1Url);
    document.getElementById("iframe2").setAttribute("src",this.iframe2Url);
  }

  toggleMenu():void{
    this.element.nativeElement.querySelector('#MenuOverlay').classList.toggle('open')
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practicing-databinding',
  templateUrl: './practicing-databinding.component.html',
  styleUrls: ['./practicing-databinding.component.css']
})
export class PracticingDatabindingComponent implements OnInit {
  stringaVuota:boolean=true;
  username:string="";
  constructor() { }
  ngOnInit(): void {
  }
  clearInput(){
    this.username="";
    this.stringaVuota=true;
  }
  controllaUsername(){
    if(this.username==""){
      this.stringaVuota=true;
    }
    else{
      this.stringaVuota=false;
    }
  }
}

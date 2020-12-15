import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Angular Course: practising-directives';
  isDetailsVisible:boolean=false;
  toggleDetailsButtonLabel:string="Show Details";
  logs:any=[];
  onToggleDetailsClick(){
    this.isDetailsVisible=!this.isDetailsVisible;
    this.toggleDetailsButtonLabel=this.isDetailsVisible ? 'Hide Details' : 'Show Details';
    this.logs.push(Date.now().toString());
    console.log(this.logs);
  }
}
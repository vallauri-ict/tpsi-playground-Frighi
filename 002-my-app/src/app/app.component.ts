import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  names = ["Daniel Navonzio","Un Pony","Antonio Licc","Cu","Paperino","Pippo","Pluto","Topolino","Impostor","CrewMate"];
  myName='Nicolò Frighi';
  changeName(){
    var i=Math.floor((Math.random()*10))
    this.myName=this.names[i];
  }
}

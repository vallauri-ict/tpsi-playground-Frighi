import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector:'[app-servers]',
  //selector:'-app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean= true;
  serverCreationStatus:string ="No server was created"
  serverName:string="-Digita qui il nome del tuo server";

  constructor() {
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000)
   }

  ngOnInit(): void {
  }
  onCreateServer(){
    this.serverCreationStatus="Server "+this.serverName+" was created"
    this.serverName="-Digita qui il nome del tuo server"
  }
  onUpdateServerName(event:any)
  {
    //console.log(event.target.value);
    this.serverName=event.target.value;
  }
}

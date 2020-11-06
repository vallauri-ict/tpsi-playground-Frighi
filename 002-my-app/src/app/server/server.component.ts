import { Component } from '@angular/core';

@Component({
    selector:'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent{
    serverId:number;
    serverStatus: string;
    constructor(){
        this.serverId=this.gettRandomInt(1,100)
        this.getServerStatus();
    }
    getServerStatus(){
        this.serverStatus=this.gettRandomInt(0,1)==0 ? 'offline' : 'online';
        return this.serverStatus;
    }
    gettRandomInt(min,max)
    {
        return Math.floor(Math.random()*(max-min+1))+ min;
    }
    getColor(){
        return this.serverStatus==='offline' ? "red" :"green";
    }
}
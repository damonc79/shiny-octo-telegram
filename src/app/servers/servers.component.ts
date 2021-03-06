import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = "Server Not Created";
  serverName: string = "Old Server";
  serverCreated: boolean = false;
  servers = ["Wolverine", "Hulk", "Beast"];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
   }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server '" + this.serverName + "' was succesfully created!";
  }

  onUpdateServerName(evt: any){
    console.log(evt);
    this.serverName = (<HTMLInputElement>evt.target).value;
  }

}

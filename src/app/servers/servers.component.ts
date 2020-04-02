import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  ServerCreatedStatus = "Server is not created";
  serverName = "Test Server";
  userName = 'shvou';
  serverCreated = false;
  servers = ['test server','test server 2'];
  constructor() { 
    this.userName = Math.random() > 0.5 ? 'ashadozzaman' :'shvou'; 
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
  }

  ngOnInit(): void {
  }
  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.ServerCreatedStatus ='Server Was created ' +this.serverName;
  }
  onUpdateServerName(event: Event){
     this.serverName = (<HTMLInputElement>event.target).value;
  }

  getColor(){
    return this.userName === 'ashadozzaman' ? 'red' : 'green';
  }

}

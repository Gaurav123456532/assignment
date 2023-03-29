import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cockpit-app';
  serverElements=[{type:'Server', name:'Server', content:'Server'}];
     onAddserver(serverElement:{name:string,content:string}){
      this.serverElements.push({
        type: 'server',
        name: serverElement.name,
        content:serverElement.content
      });
    }
   
     onAddBlueprint(blueprintElement:{name:string,content:string}) {
      this.serverElements.push({
        type: 'blueprint',
        name: blueprintElement.name,
        content: blueprintElement.content
      });
     }
}

import { Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent  {
  // newServerName = '';
  // newServerContent = '';
  @Output() servercreated=new EventEmitter<{name:string,content:string}>();
  @Output() blueprintcreated=new EventEmitter<{name:string,content:string}>();
  @ViewChild('localref',{static:false})serverelement :ElementRef
  onAddServer(cockpitvalue:HTMLInputElement) {
    this.servercreated.emit({name:cockpitvalue.value,
      content:this.serverelement.nativeElement.value
    })
 }

  onAddBlueprint(cockpit:HTMLInputElement) {
    this.blueprintcreated.emit({name:cockpit.value,
      content:this.serverelement.nativeElement.value
  })
}
}

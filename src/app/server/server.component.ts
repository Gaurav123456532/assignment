import { ViewEncapsulation} from '@angular/compiler';
import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, ContentChild, ElementRef, Input, ViewChild} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements AfterViewInit,AfterContentInit
{
@Input() element :{type:String,name:String,content:String};
@ViewChild('localhost',{static:true})selfaddict:ElementRef
@ContentChild('localhost2',{static:true})seladdict2:ElementRef
ngAfterViewInit(): void {
  console.log('name'+this.selfaddict.nativeElement.textContent)
}
ngAfterContentInit(): void {
  console.log('content'+this.seladdict2.nativeElement.textContent)
}


}

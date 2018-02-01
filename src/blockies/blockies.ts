import {
    Component,
    Input,
    Output,
    ElementRef,
    EventEmitter,
    AfterViewInit,
    NgZone,
} from '@angular/core';
import './blockies.lib';

@Component({
  template: '<div></div>',
  selector: 'angular-blockies'
})
export class BlockiesComponent implements AfterViewInit {

  @Input() options: any;

  constructor(private element: ElementRef, private zone: NgZone) {
  }

  ngAfterViewInit(){
    setTimeout(() => {
      this.zone.runOutsideAngular(() => {
        let canvas = window['blockies'].create(this.options);
        this.element.nativeElement.appendChild(canvas); // is a canvas element
      })
    }, 1)
  }

}

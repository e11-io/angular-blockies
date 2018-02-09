import {
    Component,
    Input,
    Output,
    ElementRef,
    EventEmitter,
    AfterViewInit,
    NgZone,
    OnChanges,
	  SimpleChanges,
} from '@angular/core';
import './blockies.lib';

@Component({
  template: '<div></div>',
  selector: 'angular-blockies'
})
export class BlockiesComponent implements AfterViewInit, OnChanges {

  @Input() options: any;

  constructor(private element: ElementRef, private zone: NgZone) {
  }

  ngAfterViewInit(){
    setTimeout(() => {
      this.setupBlockies();
    }, 1)
  }
  ngOnChanges(changes: SimpleChanges) {
    if(changes.options && changes.options.currentValue !== changes.options.previousValue) {
      this.setupBlockies();
    }
  }

  setupBlockies() {
    this.zone.runOutsideAngular(() => {
      let canvas = window['blockies'].create(this.options);
      while (this.element.nativeElement.firstChild) {
          this.element.nativeElement.removeChild(this.element.nativeElement.firstChild);
      }
      this.element.nativeElement.appendChild(canvas); // is a canvas element
    })
  }
}

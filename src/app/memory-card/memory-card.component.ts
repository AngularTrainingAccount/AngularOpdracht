import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ct-memory-card',
  templateUrl: './memory-card.component.html',
  styleUrls: ['./memory-card.component.css']
})
export class MemoryCardComponent {
  @Input() index : number;
  @Input() imageUrl : string;
  @Output() cardClicked :  EventEmitter<number> = new EventEmitter<number>();
  ngOnInit() {
    console.log(this.imageUrl);
  }
 onCardClick() {

  this.cardClicked.emit(this.index)
  
 }
  ngOnChanges() {
    console.log(this.imageUrl)

  }

}

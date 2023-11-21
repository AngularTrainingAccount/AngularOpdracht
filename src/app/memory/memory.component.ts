import { Component } from '@angular/core';

@Component({
  selector: 'ct-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.css']
})
export class MemoryComponent {
  amountOfCardsClicked : number = 0;
  images : string[] = ["cat", "pig"];
  ngOnInit() {
    this.addSets();
    this.shuffleCards();
    
  }
  shuffleCards() {
    for (var i = this.images.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = this.images[i];
      this.images[i] = this.images[j];
      this.images[j] = temp;
  }
  }
  addSets() {
      this.images.push(...this.images);

  }
  cardHasBeenClicked(index : number) {
    this.amountOfCardsClicked++;
    console.log(index);
    
  }


}

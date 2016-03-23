import { Component, EventEmitter } from 'angular2/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'new-restaurant-rating',
  outputs: ['onRatingSubmit'],
  template: `
  <div class="task-form">
    <select required #newRating>
      <option value='1'>1</option>
      <option value='2'>2</option>
      <option value='3'>3</option>
      <option value='4'>4</option>
      <option value='5'>5</option>
    </select>
  <button (click)="addRating(newRating)" class="btn btn-lg">Add</button>
  </div>
  `
})
export class NewRestaurantRatingComponent {
  public onRatingSubmit: EventEmitter<number>;
  public selectedRestaurant: Restaurant;
  constructor(){
    this.onRatingSubmit = new EventEmitter();
  }
  addRating(userRating: HTMLSelectElement) {
    var ratingNumber = Number(userRating.value);
    console.log(ratingNumber);
    var values = ratingNumber;
    this.onRatingSubmit.emit(values);
  }
}

import { Component } from 'angular2/core';
import { Restaurant } from './restaurant.model';
import { NewRestaurantRatingComponent } from './new-restaurant-rating.component';

@Component({
  selector: 'edit-restaurant',
  inputs: ['restaurant'],
  directives: [NewRestaurantRatingComponent],
  template: `
  <div class="restaurant-form">
    <h3>Edit Restaurant: </h3>
    <label>Restaurant Name:</label>
    <input [(ngModel)]="restaurant.name" class="col-sm-8 input-lg task-form">
    <label>Restaurant Address:</label>
    <input [(ngModel)]="restaurant.address" class="col-sm-8 input-lg task-form">
    <label>Restaurant Cost:</label>
    <select (change)="updateCost($event.target.value)">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
    <new-restaurant-rating (onRatingSubmit)="createRating($event)"></new-restaurant-rating>
  </div>
  `
})

export class EditRestaurantComponent {
  public restaurant: Restaurant;
  createRating(rating: number): void{
    this.restaurant.rating.push(
      rating
    )
  }
}

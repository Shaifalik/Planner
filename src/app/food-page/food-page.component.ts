import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food-page.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css'],
  providers: [FoodService]
})

export class FoodPageComponent implements OnInit {
  private food_items;
  private show_FoodListPanel:boolean=true;
  private show_FoodDetailsPanel:boolean=false;
  private foodObject;
  private itemsList:Array<String>;
  private fooditem;

  constructor(service:FoodService) { 
   this.food_items=service.getFoodItems();
   this.foodObject=service.getFoodObject();
  }

  ngOnInit() {
  }

  showDetailsPanel (){
    this.show_FoodListPanel=false;
    this.show_FoodDetailsPanel=true;
  }

  showListPanel (){
    this.show_FoodListPanel=true;
    this.show_FoodDetailsPanel=false;
  }

  addItems(item:String){
    this.itemsList.push(item);
    this.foodObject.itemsList.push(item);
  }

}

import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food-page.service';
import { Food } from '../food';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css'],
  providers: [FoodService]
})

export class FoodPageComponent implements OnInit {
  private foodListPanel:boolean=true;
  private foodDetailsPanel:boolean=false;
  private foodItems;

  private foodItemsList:String[];
  private foodItemsListName:string;
  private foodItem:string;

  constructor(service:FoodService) { 
   this.foodItems=service.getFoodItems();
   this.foodItem='';
   this.foodItemsListName='';
   this.foodItemsList=[];
  }

  ngOnInit() {
  }

  showDetailsPanel (){
    this.foodListPanel=false;
    this.foodDetailsPanel=true;
  }

  showListPanel (){
    this.foodListPanel=true;
    this.foodDetailsPanel=false;
  }

  addFoodItems(){
    this.foodItemsList.push(this.foodItem);
  }

  removeFoodItems(){
    this.foodItemsList.pop();
  }

  submitFoodList(newFoodListForm: NgForm){
    this.foodItemsList=[];
  }

}

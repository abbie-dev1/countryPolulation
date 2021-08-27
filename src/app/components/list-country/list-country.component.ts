import { Component, OnInit,  Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-country',
  templateUrl: './list-country.component.html',
  styleUrls: ['./list-country.component.css']
})
export class ListCountryComponent implements OnInit 
{

  @Input("countries") countries: any;
  @Output() onSelectedCountry = new EventEmitter();
  constructor() { }

  ngOnInit(): void 
  {

  }

  getCountry(country: any) 
  {
    this.onSelectedCountry.emit(country);
  }

}
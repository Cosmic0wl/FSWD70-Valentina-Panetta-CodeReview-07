import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
	public heroHeading: string;
	public heroText: string;
	public heroBtnText : string;
	public heroBtnUrl: string;

  constructor() { 
	  this.heroHeading = "PhoneBook";
	  this.heroText = "Keep your contacts in one place";
	  this.heroBtnText = "Learn More";
  }

  ngOnInit() {
  }

}

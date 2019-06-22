import { Component, OnInit } from '@angular/core';
import { ContactService } from "../shared/contact.service";
import { ContactListComponent } from '../contact-list/contact-list.component';

@Component({
  selector: 'app-important-numbers',
  templateUrl: './important-numbers.component.html',
  styleUrls: ['./important-numbers.component.css']
})
export class ImportantNumbersComponent implements OnInit {
	favContacts = [];
  public titleHeading: string;

  constructor(public contactService: ContactService) { 
    this.titleHeading = "My Favorite Contacts";
  }

  ngOnInit() {
  	  	this.contactService.getContactData().subscribe(
  		(list) => { 
  			this.favContacts = list.map((item) => {
  				return {
  					$key: item.key,
  					...item.payload.val()
  				}
  			})
  	})
  }

  // filters contacts based on favorite property (true)
  filterFavorite(contact){
  	return contact.favorite;
  }

}

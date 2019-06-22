import { Component, OnInit } from '@angular/core';
import { ContactService } from "../shared/contact.service";

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
	contactsArray = [];
	showDeleteMessage: boolean;
	searchText: string = '';

  constructor(public contactService: ContactService) { }

  // displays data
  ngOnInit() {
  	this.contactService.getContactData().subscribe(
  		(list) => { 
  			this.contactsArray = list.map((item) => {
  				return {
  					$key: item.key,
  					...item.payload.val()
  				}
  			})
        this.sortByAlphabet();
  	})

  }

  // display delete message upon calling deleteContact()
  onDelete($key){
  	if(confirm('Are you sure you want to delete this contact?')) {
  		this.contactService.deleteContact($key);
  		this.showDeleteMessage = true;
  		setTimeout(()=> this.showDeleteMessage = false , 3000)
  	}
  }

  // sorts last names by alphabet
  sortByAlphabet(){
    this.contactsArray.sort(function(contact1,contact2){
      return (contact1.lastName + contact1.firstName).localeCompare(contact2.lastName + contact2.firstName);
    });
  }

  // filters based on last name and then first name
  filterContact(contact){
  	return contact.lastName.toLowerCase().startsWith(this.searchText.toLowerCase()) || contact.firstName.toLowerCase().startsWith(this.searchText.toLowerCase());
  }
  
}

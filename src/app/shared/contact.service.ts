import { Injectable } from '@angular/core';
import { FormControl , FormGroup, Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(public firebase: AngularFireDatabase) { }
  contactList: AngularFireList<any>;
  form = new FormGroup({
  $key: new FormControl(null),
  firstName: new FormControl('', Validators.required),
  lastName: new FormControl('', Validators.required),
  mobile: new FormControl('', [Validators.required, Validators.minLength(8)]),
  favorite: new FormControl(null)
  });

  // get contact data function
  getContactData(){
  	this.contactList = this.firebase.list('contacts');
  	return this.contactList.snapshotChanges();
  }

  // add contact function, pushes contact in the contactList array
  addContact(contact){
  	this.contactList.push({
  		firstName: contact.firstName,
  		lastName: contact.lastName,
  		mobile: contact.mobile,
      favorite: false
  	});
  }

  // populate takes the value from this contact obj into the form group
  populateForm(contact){
  	this.form.setValue(contact);
  }

  // edit contact data 
  editContact(contact){
  	this.contactList.update(contact.$key,{
  		firstName: contact.firstName,
  		lastName: contact.lastName,
  		mobile: contact.mobile,
      favorite: contact.favorite
  	})
  }

  // delete contact data
  deleteContact($key:string){
  	this.contactList.remove($key);
  }

  // toggles favorite property and updates contact

  favoriteContact(contact){
    contact.favorite = !contact.favorite;
    this.editContact(contact);
  }
}


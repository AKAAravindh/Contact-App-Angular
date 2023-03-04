import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  // All contacts - to get all contact data from api
  allContacts(){

    // http request to get all contacts
    return this.http.get('http://localhost:3000/contacts')
  }

  // View contact - to get a particular contact data from api
  viewContact(contactId:string){

    // concantinate contact id into url
    return this.http.get('http://localhost:3000/contacts/'+contactId)
  }

  // View contact group name - to get names of groups based on id
  viewContactGroupName(groupId:string){
    return this.http.get('http://localhost:3000/groups/'+groupId)
  }

  // api call to get all groups
  allGroups() {
    return this.http.get('http://localhost:3000/groups')
  }

  // api call to add new contact details
  addContact(contact:any) {
    return this.http.post('http://localhost:3000/contacts',contact)
  }

  // api call for deleting a contact
  deleteContact(contactId:any) {
    return this.http.delete('http://localhost:3000/contacts/'+contactId)
  }

  // api call for updating data of an existing contact
  updateContact(contactId:string, contactBody:any) {
    return this.http.put('http://localhost:3000/contacts/'+contactId,contactBody)
  }
}

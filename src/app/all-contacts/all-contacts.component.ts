import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-contacts',
  templateUrl: './all-contacts.component.html',
  styleUrls: ['./all-contacts.component.css']
})
export class AllContactsComponent implements OnInit {


  // to hold all contact data from api
  allContacts:any = []
  searchKey:string = ''

  constructor(private api:ApiService){

  }
  ngOnInit(): void {
    this.getAllContacts()
  }

  // function to get all contact
  getAllContacts(){
    this.api.allContacts()
      .subscribe((result: any) => {

        // result have all contact array data from api
        console.log(result);

        // we assign the data in result to a class variable
        this.allContacts = result
      })
  }

  // delete contact
  deleteContact(contactId:any) {
    this.api.deleteContact(contactId).subscribe((data:any)=>{

      // display all contacts
      this.getAllContacts()
    })
  }
}

import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit{

  contactId:string = ''
  contact:any = {}
  groupName:string = ''

  constructor(private activatedRoute:ActivatedRoute, private api:ApiService){

  }

  // life cycle
  ngOnInit(): void {

    // To get path parameter from url
    this.activatedRoute.params.subscribe((data:any)=>{
      this.contactId = data.id
      console.log(this.contactId);
      
    })

    // To get details of a particular contact
    this.api.viewContact(this.contactId).subscribe((result:any)=>{
      console.log(result);
      this.contact = result

      // get group id from contact
      let groupId = this.contact.groupId
      console.log(groupId);

      // api call for get group details
      this.api.viewContactGroupName(groupId).subscribe((groupInfos:any)=>{
        console.log(groupInfos);
        this.groupName = groupInfos.name
      })
    })
  }
}

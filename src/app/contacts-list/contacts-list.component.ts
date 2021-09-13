import { Component, OnInit } from '@angular/core';
import { ContactsService  } from '../contacts.service';
@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
allContacts:any=[];
  constructor(_ContactsService:ContactsService) {
    _ContactsService.getAllContacts().subscribe(Response=>{
      this.allContacts=Response.data;
    })
   }

  ngOnInit(): void {
  }

}

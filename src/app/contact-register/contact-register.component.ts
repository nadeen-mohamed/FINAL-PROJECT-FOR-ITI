import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactsService  } from '../contacts.service';
import { ContactsListComponent } from '../contacts-list/contacts-list.component';
@Component({
  selector: 'app-contact-register',
  templateUrl: './contact-register.component.html',
  styleUrls: ['./contact-register.component.css']
})
export class ContactRegisterComponent implements OnInit {
  myimage:string = "assets/images/undraw_Access_account_re_8spm.png";

 
  registerform = new FormGroup ({name:new FormControl("",Validators.required), job:new FormControl() });
  constructor(private _ContactsService:ContactsService) { 
    
  }
save(){
 this._ContactsService.addContact(this.registerform.value).subscribe(Response=>{
    console.log(Response.data);
    alert("done");
  })
}
  ngOnInit(): void {
  }

}

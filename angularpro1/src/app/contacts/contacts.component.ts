import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
    public contacts = [];

  constructor(private _http:HttpService) { }

  ngOnInit(): void {
   
  }
  addContacts(){
    this._http.getContacts()
             .subscribe(data=>this.contacts=data);
             console.log(this.contacts);
  }

}

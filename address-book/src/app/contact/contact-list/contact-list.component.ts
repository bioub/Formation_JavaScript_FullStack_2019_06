import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts = [
    // {prenom: 'Romain', _id: '32452352dfgd'},
    // {prenom: 'Jean', _id: '5f4g1er55fff'},
    // {prenom: 'Eric', _id: 'g8t748h7gd87'}
  ];

  constructor(
    private httpClient: HttpClient,
  ) {}

  ngOnInit() {
    this.httpClient.get<any[]>('http://localhost:3000/api/contacts')
      .subscribe((contacts) => {
        this.contacts = contacts;
      });
    // setInterval(() => {
    //   this.contacts.push({prenom: 'ABC', _id: '1345'})
    // }, 1000)

  }

}

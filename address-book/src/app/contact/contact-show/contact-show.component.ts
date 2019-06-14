import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-contact-show',
  templateUrl: './contact-show.component.html',
  styleUrls: ['./contact-show.component.css']
})
export class ContactShowComponent implements OnInit {

  contact;

  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    // console.log(this.activatedRoute.snapshot.params.id);
    // this.activatedRoute.params.subscribe((params) => {
    //   this.httpClient.get<any[]>('http://localhost:3000/api/contacts/'+params.id)
    //     .pipe(
    //       delay(params.id === '5d0236309604884ceb6b5770' ? 2000 : 0)
    //     )
    //   .subscribe((contact) => {
    //     this.contact = contact;
    //   });
    // })
    this.activatedRoute.params.pipe(
      switchMap((params) => this.httpClient.get<any[]>('http://localhost:3000/api/contacts/' + params.id))
    ).subscribe((contact) => {
      this.contact = contact;
    });

  }

}

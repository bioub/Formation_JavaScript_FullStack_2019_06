import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactShowComponent } from './contact-show/contact-show.component';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [ContactListComponent, ContactShowComponent, ContactAddComponent, ContactComponent],
  imports: [
    CommonModule,
    ContactRoutingModule
  ],
  // exports: [
  //   ContactListComponent
  // ]
})
export class ContactModule { }

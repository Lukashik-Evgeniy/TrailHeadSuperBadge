import { LightningElement, wire } from 'lwc';

import { reduceErrors } from 'c/ldsUtils';

import FIRST_NAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LAST_NAME_FIELD from '@salesforce/schema/Contact.LastName';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';

import getContacts from '@salesforce/apex/ContactController.getContacts';

const COLUMNS = [
    { label: 'Contact FirstName', fieldName: FIRST_NAME_FIELD.fieldApiName, type: 'text' },
    { label: 'Contact LastName', fieldName: LAST_NAME_FIELD.fieldApiName, type: 'text' },
    { label: 'Email', fieldName: EMAIL_FIELD.fieldApiName, type: 'text' }
];

export default class ContactList extends LightningElement {
    columns = COLUMNS;
    // contacts = [];

    // @wire(getContacts)
    // wiredContacts({data, error}) {
    //     if (data) {
    //         this.contacts = data;
    //         this.errors = undefined;
    //     } else if (error) {
    //         this.errors = reduceErrors(error);
    //         this.contacts = [];
    //     }
    // }

    @wire(getContacts)
    contacts;

    get errors() {
        return (this.contacts.error) ? reduceErrors(this.contacts.error) : [];
    }
}
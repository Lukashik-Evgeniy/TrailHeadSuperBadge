import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import CONTACT_OBJECT from '@salesforce/schema/Contact';

import FIRST_NAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LAST_NAME_FIELD from '@salesforce/schema/Contact.LastName';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';

export default class ContactCreator extends LightningElement {
    fields = [FIRST_NAME_FIELD, LAST_NAME_FIELD, EMAIL_FIELD];
    objectApiName = CONTACT_OBJECT;

    handleSuccess(event) {
        const recordId = event && event.detail && event.detail.id || '';

        if (recordId) {            
            const toastEvent = new ShowToastEvent({
                title: "Contact created",
                message: "Record ID: " + recordId,
                variant: "success"
            });
            
            this.dispatchEvent(toastEvent);
        }
    }

}

    @api objectApiName = 'Contact';
    handleSuccess(event) {
        const evt = new ShowToastEvent({
            title: 'Contact created',
            message: 'Record ID: ' + event.detail.id,
            variant: 'success',
        });
        this.dispatchEvent(evt);
    }
}
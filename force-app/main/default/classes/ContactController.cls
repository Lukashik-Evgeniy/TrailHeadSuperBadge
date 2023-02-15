public with sharing class ContactController {

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts() {
        List<Contact> contacts;

        try {
            contacts = [SELECT FirstName, LastName, Email FROM Contact WITH_SECURITY_INFORCED];
        } catch (Exception ex) {
            throw new AuraHandledException('Forced error ' );
        }

        return contacts;
    }
}
import { insertContact, findAllContacts, findOneContact, updateContact, deleteContact } from "../repositories/contacts.repository.js";
import { Request, Response } from 'express';
import { deleteEmail, insertEmails } from '../repositories/emails.repository.js';
import { Contact, Email, EntityContact, PhoneNumber } from '../protocols/contact.protocol.js';
import { insertPhoneNumbers } from '../repositories/phones.repository.js';

export async function create(req: Request, res: Response){
    const contact = res.locals.contact;
    const emails = contact.emails;
    const phoneNumbers = contact.phoneNumbers;
    delete contact.emails;
    delete contact.phoneNumbers;
    try {
        const savedContact = await insertContact(contact as Contact);
        let newEmails: Email[] = emails.map((email) => {
            return {
                email: email,
                contactId: savedContact.id
            }
        });
        let newPhoneNumbers: PhoneNumber[] = phoneNumbers.map((phone) => {
            return {
                phoneNumber: phone,
                contactId: savedContact.id
            }
        });
        const savedEmails = await insertEmails(newEmails);
        const savedPhoneNumbers = await insertPhoneNumbers(newPhoneNumbers);
        res.status(201).send({
            message: `${1} contact inserted`
        });
    } catch (error) {
        res.sendStatus(500);
    }
}

export async function list(req: Request, res: Response) {
    try {
        const result = await findAllContacts();
        res.status(201).send(result);
    } catch (error) {
        res.sendStatus(500);
    }

}

export async function listOne(req: Request, res: Response) {
    const id = Number(req.params.id);

    try {
        const result = await findOneContact(id);
        res.status(201).send(result);
    } catch (error) {
        res.sendStatus(500);
    }

}

export async function update(req: Request, res: Response) {
    const contact = res.locals.contact;
    const emails = contact.emails as string[];
    const phoneNumbers = contact.phoneNumbers as string[];
    delete contact.emails;
    delete contact.phoneNumbers;
    const id = Number(req.params.id);
    try {
        const existedContact: EntityContact = await findOneContact(id);

        if(!existedContact){
            return res.status(404).send("contact not found");
        }
        if(emails.length > 0){
            //atualizar ou criar emails
        }
        if(phoneNumbers.length > 0){
            //atualizar ou criar phoneNumbers
        }
        const result = await updateContact(contact, id);
        if(emails.length)
        res.status(201).send({
            message: `${1} contact updated`
        });
    } catch (error) {
        res.sendStatus(500);
    }
}

export async function remove(req: Request, res: Response) {
    const id = Number(req.params.id);

    try {
        const existedContact = await findOneContact(id);
        
        if(!existedContact){
            return res.status(404).send("contact not found");
        }

        const result = await deleteContact(id);
        res.status(201).send({
            message: `${1} contact removed`
        });
    } catch (error) {
        res.sendStatus(500);
    }
}


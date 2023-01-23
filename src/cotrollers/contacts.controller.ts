import connectionDB from '../database/db.js';
import { insertContact, findAllContacts, findOneContact, updateContact, deleteContact } from "../repositories/contacts.repository.js";
import { Request, Response } from 'express';

export async function create(req: Request, res: Response){
    const contact = res.locals.contact;

    try {
        const result = await insertContact(contact);
        res.status(201).send({
            message: `${result.rowCount} contact inserted`
        });
    } catch (error) {
        res.sendStatus(500);
    }
}

export async function list(req: Request, res: Response) {
    try {
        const result = await findAllContacts();
        res.status(201).send(result.rows);
    } catch (error) {
        res.sendStatus(500);
    }

}

export async function listOne(req: Request, res: Response) {
    const id = Number(req.params.id);

    try {
        const result = await findOneContact(id);
        res.status(201).send(result.rows);
    } catch (error) {
        res.sendStatus(500);
    }

}

export async function update(req: Request, res: Response) {
    const contact = res.locals.contact;
    const id = Number(req.params.id);
    try {
        const existedContact = await findOneContact(id);

        if(existedContact.rowCount === 0){
            return res.status(404).send("contact not found");
        }

        const result = await updateContact(contact, id);
        res.status(201).send({
            message: `${result.rowCount} contact updated`
        });
    } catch (error) {
        res.sendStatus(500);
    }
}

export async function remove(req: Request, res: Response) {
    const id = Number(req.params.id);

    try {
        const existedContact = await findOneContact(id);
        
        if(existedContact.rowCount === 0){
            return res.status(404).send("contact not found");
        }

        const result = await deleteContact(id);
        res.status(201).send({
            message: `${result.rowCount} contact removed`
        });
    } catch (error) {
        res.sendStatus(500);
    }
}


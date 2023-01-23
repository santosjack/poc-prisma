import connectionDB from "../database/db.js";
import QueryResult from "pg";
import { Contact, EntityContact } from "../protocols/contact.protocol.js";


async function findAllContacts(): Promise<QueryResult<EntityContact>> {
    return connectionDB.query(
        "SELECT * FROM contacts"
    );
}

async function insertContact(contact: Contact): Promise<QueryResult> {
    console.log("entrei no inset")
    return connectionDB.query(
        'INSERT INTO contacts (full_name, phone_number, email) VALUES ($1, $2, $3)',
        [contact.name, contact.phoneNumber, contact.email]
    );
   
}

async function updateContact(contact: Contact, id: number): Promise<QueryResult>{
    return connectionDB.query(
        `UPDATE contacts SET full_name = $1, phone_number = $2, email = $3
         WHERE id = $4`, [contact.name, contact.phoneNumber, contact.email, id]
    );
}

async function deleteContact(id: number): Promise<QueryResult>{
    return connectionDB.query(
        `DELETE FROM contacts WHERE id = $1`, [id]
    );
}

async function findOneContact(id: number): Promise<QueryResult<EntityContact>> {
    return connectionDB.query(
        "SELECT * FROM contacts WHERE id = $1", [id]
    );
}

export {
    insertContact,
    findAllContacts, 
    findOneContact,
    updateContact,
    deleteContact
}



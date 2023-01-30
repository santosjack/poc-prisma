import prisma from "../database/db.js";
import QueryResult from "pg";
import { Contact, Email, EntityContact } from "../protocols/contact.protocol.js";
import { contacts, emails } from "@prisma/client";

async function insertEmails(emails: Email[]) {

    const result = await prisma.emails.createMany({
        data: emails
    });

    console.log(result);
   
    return result;
}

async function deleteEmail(id: number): Promise<emails>{
    return prisma.emails.delete({
        where: {
            id: id
        }
    });
}



export {
    insertEmails, 
    deleteEmail
}



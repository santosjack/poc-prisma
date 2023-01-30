import prisma from "../database/db.js";
import { Contact, EntityContact } from "../protocols/contact.protocol.js";
import { contacts } from "@prisma/client";


async function findAllContacts(): Promise<contacts[]> {
   return prisma.contacts.findMany({
        include: {
            emails: {
                select: {
                    email: true
                }
            },
            phoneNumbers: {
                select: {
                    phoneNumber: true
                }
            }
        }
   });
}

async function insertContact(contact: Contact): Promise<contacts> {
    return await prisma.contacts.create({
        data: {
            name: contact.name
        }
    });   
}

async function updateContact(contact: Contact, id: number): Promise<contacts>{
    return prisma.contacts.update({
        where: {
            id: id,
        },
        data: {
            name: contact.name,
        }
    });
}

async function deleteContact(id: number): Promise<contacts>{
    return prisma.contacts.delete({
        where: {
            id: id
        }
    });
}

async function findOneContact(id: number): Promise<contacts> {
    return prisma.contacts.findUnique({
        where: {
            id: id
        },
        include: {
            emails: {
                select: {
                    email: true
                }
            },
            phoneNumbers: {
                select: {
                    phoneNumber: true
                }
            }
        }
    })
}

export {
    insertContact,
    findAllContacts, 
    findOneContact,
    updateContact,
    deleteContact
}



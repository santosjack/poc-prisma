import prisma from "../database/db.js";
import QueryResult from "pg";
import { Contact, Email, EntityContact, PhoneNumber } from "../protocols/contact.protocol.js";
import { contacts } from "@prisma/client";

async function insertPhoneNumbers(phoneNumbers: PhoneNumber[]) {

    const result = await prisma.phoneNumbers.createMany({
        data: phoneNumbers
    });

    console.log(result);
   
    return result;
}



export {
    insertPhoneNumbers
}



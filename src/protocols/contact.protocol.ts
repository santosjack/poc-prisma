export type Email = {
    id?: number,
    email: string,
    contactId: number
}

export type PhoneNumber = {
    id?: number,
    phoneNumber: string,
    contactId: number
}


export type EntityContact = {
    id: number,
    name: string,
    phoneNumber?: PhoneNumber[],
    email?: Email[]
}

export type Contact = Omit<EntityContact, "id">; 
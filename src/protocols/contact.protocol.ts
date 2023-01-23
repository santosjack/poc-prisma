export type EntityContact = {
    id: number,
    name: string,
    phoneNumber: number,
    email: string
}

export type Contact = Omit<EntityContact, "id">; 
export interface Student {
    fname: string;
    lname?: string;
    age: number;
    username: string;
    password: string;
    phoneNumber?: string;
    id: null | number
}

export interface EditDialog {
    isOpen: boolean;
    type: string;
    id: null | number
}

export type FieldType = {
    username: string;
    password: string;
    firstname: string;
    lastname?: string;
    age: number;
    phone: string;
    id?: null | number;
};
import { faker } from '@faker-js/faker';

const randomNumber = Math.floor(Math.random() * (999998 - 111111 + 1)) + 1
export const leadForename:string = faker.name.firstName() //+ randomNumber
export const leadSurname:string = faker.name.lastName() //+ randomNumber
export const leadCellPhoneNumber:string = `512111116` //+ randomNumber



import { faker } from '@faker-js/faker';

export default{
    createUser: function(){
        let dados ={
            nome: faker.person.fullName(),
            email: faker.internet.email()
        }
        return dados;
    }
}
import axios from 'axios'
const urlBase = 'http://192.168.4.78:3001';

const createUser = (nome, email, password, fone, birthDate) => {
    debugger;
    const content = {
        name: nome,
        email: email,
        password: password,
        fone: fone,
        birthDate: birthDate,        
    }

    axios.post(`${urlBase}/users`, content).then( (response) => {
        console.log("response: "+ response);;
    }).catch((err) => {
        console.log("erro: " + err)
    });
}

export { createUser };
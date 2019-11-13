import axios from 'axios';
import { url } from './url';


const sendFile = async(file, id) => {
    const data = new FormData();
    data.append("file", file[0]);

    const res = await axios({
        url: `${url}/file/${id}`,
        method: "POST",
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        data
    })

    console.log(res);

}

const createUser = async({name, email, password, user_uf, user_city, cel, date, file}) => {

    const content = {
        name,
        email,
        password,
        user_uf,
        user_city,
        phone: cel,
        birth_date: date,        
    }

    const res = await axios.post(`${url}/users`, content);
    await sendFile(file, res.data.id);

    if(res.status === 200) {
        window.location.href =  `/${res.data.id}`;
    }
}

export { createUser, sendFile };
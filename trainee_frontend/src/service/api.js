import axios from 'axios';



//post api
export const addUser = async (data) => {
    try{
        return await axios.post(`/api/add`, data);
    }catch(error){
        console.log('Error while calling addUser api', error);
    }
}


//get api
export const getUsers = async (data) => {
    try {
        return await axios.get(`/api/all`);
    }catch(error) {
        console.log('Error while calling getUsers api', error);
    }
}


//get api
export const getUser = async (id) => {
    try{
        return await axios.get(`/api/${id}`);
    }catch(error) {
        console.log('Error while calling getUser api', error);
    }
}


//put api
export const editUser = async (user, id) => {
    try{
        return await axios.put(`/api/${id}`, user);
    }catch(error) {
        console.log('Error while calling editUser api', error);
    }
}


//delete api
export const deleteUser = async (id) => {
    try {
        return await axios.delete(`/api/${id}`);
    }catch(error) {
        console.log('Error while calling deleteUser api', error);
    }
}
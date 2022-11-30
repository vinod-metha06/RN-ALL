import axios from "axios";
const url='https://api.instantwebtools.net/v1/airlines/';

export const getData=async(id)=>{
    
    try {
        const res= await axios.get(url+`${id}`);
        console.log(res.data);
        return res.data;
        

    } catch (error) {
        console.log('error');
    }
    
}
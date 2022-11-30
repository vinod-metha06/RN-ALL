import axios from "axios";
const url='https://api.instantwebtools.net/v1/airlines';

export const getAirlines= async()=>{
    try {
        const res= await axios.get(url);
        console.log(res.data +"data");
        return res.data;
    } catch (error) {
        return 'error';
    }

}
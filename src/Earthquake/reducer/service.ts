import axios from "axios";
const url="https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02";

export  const GetEarthQuakeData=async()=>{
    try {
        const res=await axios.get(url);
        console.log(res.data)
        return res.data;
    } catch (error) {
        return 'error'
    }

}
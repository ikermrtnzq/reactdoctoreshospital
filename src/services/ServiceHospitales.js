import Global from '../Global';
import axios from 'axios';

export default class ServiceHospitales{
    
    getHospitales = new Promise(function(resolve){
        let url= Global.urlApiHospitales;
        let endpoint ="api/hospitales";
        axios.get(url + endpoint).then((response) => {
            resolve(response.data)
        })

    })

    getHospitales2(){
        return new Promise(function(resolve){
            let url= Global.urlApiHospitales;
            let endpoint ="api/hospitales";
            axios.get(url + endpoint).then((response) => {
                resolve(response.data)
            })

        })
    }
    
    getDoctoresHospital(id){
        return new Promise(function(resolve){
            let url = Global.urlApiDoctores;
            let endpoint = "api/Doctores/DoctoresHospital/";
            axios.get(url + endpoint + id).then((response) => {
                resolve(response.data)
            })
        })
    }

    
}
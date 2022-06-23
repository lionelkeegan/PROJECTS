import axios from 'axios';
import { useEffect, useState } from "react";
import Global from "../../components/Global";
import Hero from "../../components/Hero";
import Summary from "../../components/Summary";


function CovidIndonesia(){
    //url
    const url = `https://covid19.mathdro.id/api/countries/indonesia`;
    
    const [covids, setCovids] = useState([])
    //membuat state covid

    useEffect(()=>{
        getCovidsIndonesia();
    },[])
    
    async function getCovidsIndonesia(){
        //response for covids data
        const response = await axios(url)

        let covids = [
            response.data.confirmed,
            response.data.recovered,
            response.data.deaths,
        ]
        setCovids(covids)
    }

    return(
        <>
            <Hero />
            <Global title="Indonesia" tag="Data Covid Berdasarkan Indonesia" covids={covids}  />
            <Summary src="https://covid19.mathdro.id/api/countries/indonesia/og" title="Indonesia" />
        </>
    )
}

export default CovidIndonesia;
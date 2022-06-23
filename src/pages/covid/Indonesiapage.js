import { useEffect, useState } from "react";
import Global from "../../components/Global";
import Hero from "../../components/Hero";
import Summary from "../../components/Summary";
import axios from 'axios';


function CovidIndonesia(){
    //url
    const url = `https://covid19.mathdro.id/api/countries/indonesia`;
    
    const [covids, setCovids] = useState([])
    //membuat state covid

    useEffect(()=>{
        getCovidsIndonesia();
    },[])
    
    async function getCovidsIndonesia(){
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
            <Global title="Indonesia" tagline="Data Covid Berdasarkan Indonesia" covids={covids}  />
            <Summary src="https://covid19.mathdro.id/api/countries/indonesia/og" title="Indonesia" />
        </>
    )
}

export default CovidIndonesia;
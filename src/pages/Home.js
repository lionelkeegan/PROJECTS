import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Global from "../components/Global/";
import Hero from "../components/Hero";
import Summary from "../components/Summary";


function Home() {
   //url
    const url = `https://covid19.mathdro.id/api`;
    
    const [covids, setCovids] = useState([])
    //membuat state covid

    useEffect(()=>{
        getCovidsGlobal();
    },[])
    
    async function getCovidsGlobal(){
        const response = await axios(url)

        
        let covids = [
          response.data.confirmed,
          response.data.recovered,
          response.data.deaths,
        ]

        setCovids(covids)
    }

  return (
      <div>
        <Hero />
        <Global title="Global" tagline="Data Covid Berdasarkan Global" covids={covids}/>
        <Summary src="https://covid19.mathdro.id/api/og" title="Global" />
      </div>
  )
}

export default Home;

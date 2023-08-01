import { useState } from 'react';
import style from './IpTrack.module.css'
import { useQuery } from 'react-query';


function IpTrack() {   
  const [ip, setIp] = useState('');
  const [info, setInfo] = useState('');

  function handleSubmit(e){
    setIp(e.target.value);
    console.log(ip);
    const url = `https://ipgeolocation.abstractapi.com/v1/?api_key=91110d20bf094f3e93eff5156d5ab722&ip_address=${ip}`;


    const {data} = useQuery("ips", () =>{
      fetch(url)
      .then(res => res.json())
      .catch(error => console.log(error))
    }); 
  }

return (
  <>
    <h1 className = {style.h1}>IpTrack</h1>
    <form className={style.form} onSubmit={handleSubmit}>
        <label htmlFor="inputIp">IP</label>
        <input type="text" value={ip} placeholder='Digite o IP'/>
        <button type="submit">Pesquisar</button>
    </form>
  </>
)

}
export default IpTrack
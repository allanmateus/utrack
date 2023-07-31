import { useState } from 'react';
import style from './IpTrack.module.css'


function IpTrack() {   
  const [ip, setIp] = useState();

  function onSubmit(e){
    e.prevent.default();
    setIp(e.value);
    console.log(e);
    const url = `https://ipgeolocation.abstractapi.com/v1/?api_key=91110d20bf094f3e93eff5156d5ab722&ip_address=${ip}`;
    
    fetch(url)
      .then(res => res.json())
      .then(console.log(res))
      .catch(error => console.log(error))
  }

return (
  <>
    <h1 className = {style.h1}>IpTrack</h1>
    <form className={style.form}>
      <div className='form-group'>
        <label htmlFor="inputIp">IP</label>
        <input type="text" placeholder='Digite o IP'/>
      </div>
      <div className='form-group'>
        <button onClick={onSubmit(e)}>Pesquisar</button>
      </div>
    </form>
  </>
)

}
export default IpTrack
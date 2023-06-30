import React, { useEffect, useState } from 'react';
 import './../style/darkMode.css'
import bg from "./../images/mountains.jpg"
import { SearchBox } from '../components/search';

import { Content } from '../components/contant';



function Layout() {


    const [data, setData] = useState([""])  

    const apiKey = 'edc228562ac0a8aa3116d41c0687cf56'
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=${apiKey}&units=metric`

    const [api, setApi] = useState(null)
    
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(para => {
                setApi(para)
            })
            .catch(error => {
               alert('akbarrr')
              });

    }, [data])


    const [darkMode, setDarkMode] = useState(false);


    return (
        <section className={darkMode ? 'dark' : 'light' }>

            <SearchBox  data={data.name} setData={setData}  setDarkMode={setDarkMode} darkMode={darkMode}/>
            <Content api={api} data={data} setApi={setApi} />
        </section>
    );
}
export default Layout;








//onFocus={focucHandaler} 
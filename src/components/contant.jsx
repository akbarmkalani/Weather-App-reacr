import { useState } from "react"
import bgImg from "./../images/mountain.png"
import styleMultiple from './../style/styleApp.css'
import { BoxApp } from "./boxApp"
const _list = document.getElementById("list")

export const Content = ({ api, data, setApi }) => {

   const [appData, setAppData] = useState()


  
   const handleChange = (e) => {
      e.preventDefault()
      setAppData(api)
      /*  setImg(appData?.weather[0].icon}.png"`
       ) */
   }

   
   return (
      <section className="row justify-content-center mx-0 px-0">
         <button className="btn1 mt-2" onClick={handleChange}>Search</button>
         <div className="">
            <section className="col-12 box mt-3   col-11 col-md-6 col-lg-4  " >

               <div className=" ">
                  
                  { appData && <BoxApp  appData={appData}/>}
                 
               </div>
            </section>
         </div>
      </section>
   )
}
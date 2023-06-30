import { useEffect, useState } from "react"
import styleMultiple from './../style/styleApp.css'

export const BoxApp = ({ appData }) => {

   
   

   const icon = `https://openweathermap.org/img/w/${appData?.weather[0]?.icon}.png`;

   return (
      <>
         <section className="borderBox pb-3 ">
            <div className="row justify-content-center  mx-0 px-0">
               <span className="col-6 mt-4  text-center text d-flex justify-content-center ">{appData?.name}</span>
               <span className="col-6 mt-4 text-center  d-flex justify-content-center ">
                  <span id="country">
                     {appData?.sys?.country}
                  </span>
               </span>
               {appData &&
                  (<span className="text-center text col-6">{appData?.weather[0]?.main}</span>)
               }
               {
                  appData && (
                     <span className="text-center text col-6">{appData?.weather[0].description}</span>
                  )
               }
               {appData && (
                  <span className="text-center text col-6">{Math.round(appData.main.temp)}°c</span>
               )}
            </div>
            <figure   className=" row justify-content-center align-items-center">
               {appData && (
                  <img className="col-4 text" src={icon} alt="icon" />
               )}
            </figure>
            <div className="row justify-content-center  mx-0 px-0">
               {
                  appData && (
                     <span className=" text text-center col-6">H : {Math.round(appData?.main?.temp_max)}°c</span>
                  )
               }
               {appData && (
                  <span className=" text text-center col-6">L : {Math.round(appData.main.temp_min)}°c</span>
               )}
               {
                  appData && (
                     <span className=" text text-center col-6">humidity: {appData?.main?.humidity}%</span>
                  )
               }


               {
                  appData && (
                     <span className=" text text-center  col-6">Wind: {appData?.wind?.deg}%</span>
                  )
               }
              {/*  {
                  appData && (
                     <span className=" text col-6">feels_like : {appData?.main?.feels_like}°c</span>
                  )
               }
               {
                  appData && (
                     <span className=" text col-6">visibility: {appData?.visibility} km/h</span>
                  )
               } */}

            </div>
         </section>
      </>
   )
}
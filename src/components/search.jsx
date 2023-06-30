import React, { useRef, useEffect } from 'react';
import { Toggle } from "./taggel";




export const SearchBox = ({ data, setData, setDarkMode, darkMode }) => {
    const inputRef = useRef(null);

    const handleChange = (event) => {
        const newData = event.target.value;
        setData(newData);

        //  setData('')
    }



    useEffect(() => {
        inputRef.current.focus();
    }, []);

    useEffect(() => {
        const currentHour = new Date().getHours();
        const isNightTime = currentHour < 6 || currentHour > 18;

        setDarkMode(isNightTime);
    }, []);
    const handleModeToggle = (e) => {
        setDarkMode(!darkMode);
        console.log(e)
    };

    return (
        <section className=" row mx-0 px-0 justify-content-center">
            <Toggle
                label=""
                toggled={true}
                onClick={handleModeToggle}
            />
            <div className="  row ">
                <input
                    className="searchinp  border p-3 col-11 col-md-6 col-lg-4  mx-auto"
                    type="text"
                    name="name"
                    ref={inputRef}
                    value={data}
                    placeholder="search your city"
                    onChange={handleChange} />

            </div>
        </section>
    )
}
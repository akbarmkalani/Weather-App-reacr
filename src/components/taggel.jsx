import { useState } from 'react'
import TaggelStyle from './../style/taggelStyle.css'
export const Toggle = ({ label, toggled, onClick }) => {
    const [isToggled, toggle] = useState(toggled)

    const callback = () => { 
        toggle(!isToggled)
        onClick(!isToggled)
    }

    return (
        <section className='row align-items-center'>
            <label className=''>
                <input className='inp' type="checkbox" defaultChecked={isToggled} onClick={callback} />
                <span   className='pan' />
              
            </label>
            <h1 className="text-center border-3 border-bottom p-2 mt-2 col-11">Weather App</h1>
        </section>
    )
}
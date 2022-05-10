import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Form.css'

const Form = () => {
    const form = useRef();

    const [done, setDone]=useState(false)

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_xe4dpp7', 'template_1h6xna8', form.current, 'dHIcXZQREF6T3UlZC')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
   <div className="form" id='Form'>
       <div className="CV">
           <div className="span">
               <span>Get in touch</span><br/>
               <span>Contact Me...</span>
           </div>
       </div>
       {/* form */}
       <div className="form-right">
           <form ref={form} onSubmit={sendEmail}>
               <input type="text" name="user-name" className='user' placeholder='Name' />
               <input type="email" name='user-email' className='user' placeholder='Email' />
               <textarea name="message" className='user' placeholder='Message'></textarea>
              
               <button type="submit" value='send' className='button'>Submit</button>
               <span>{done && "Thanks For Contacting Me..."}</span>
           </form>
       </div>
   </div>
    )
}

export default Form
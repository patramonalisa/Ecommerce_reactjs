import React from 'react'
import PizzaLeft from '../asstes/pizzaLeft.jpg';
import '../styles/Contact.css'


function Contact() {
  return (
    <div>
        <div className='leftSide' style={{backgroundImage:`url(${PizzaLeft})` }}></div>
        <div className='rightSide'>
            <h1>Contact Us</h1>
            <form id='contact-form' method='post'>
                <label htmlfor='name'>Full Name</label> 
                <input name='name' placeholder='Enter Full name...' type='text' />
                <label htmlfor='email'>Email</label> 
                <input name='email' placeholder='Enter email id...' type='email' />
                <label htmlfor='message'>Message</label> 
                <textarea rows={6} placeholder='enter message...' name='message' required></textarea>
                <button type='submit'>Send Message</button>

            </form>
        </div>
        </div>
  )
}

export default Contact
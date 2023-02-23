// import { useState } from 'react'
// import { useForm } from 'react-hook-form';
import StyledContactForm from './contact.styled'

export const Contacts = () => {

    return (
        <StyledContactForm>
            <h1>{"Don't"} be a stranger 🤗</h1>
            <p>I am currently looking for opportunities to broaden my horizons as a Frontend developer. Want to work together?</p>
            <form>
                <label htmlFor="client-name">Name</label>
                <input type="text" id="client-name" placeholder='John Doe' />
                <label htmlFor="email">Email</label>
                <input type="text" id="email" placeholder='johndoe@example.com' />
                <label htmlFor="message">Message</label>
                <textarea id="message" rows='10' placeholder='Hello Victor, I would like to hire you for a project'></textarea>
                <input type="submit" value="Send" />
            </form>
        </StyledContactForm>
    )
}

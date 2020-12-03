import React from 'react';
import ContactForm from './components/ContactForm'
import {render, screen} from '@testing-library/react'
import useEvent from '@testing-library/react'
import userEvent from '@testing-library/user-event';

test('renders with no errors', ()=>{
    render(<ContactForm />)
});

test('user can fill out and submit', async ()=>{
    render(<ContactForm />);

    const firstNameInput = screen.getByLabelText(/first name*/i);
    const lastNameInput = screen.getByLabelText(/last Name*/i);
    const emailInput = screen.getByLabelText(/email*/i);
    const messageInput = screen.getByLabelText(/message/i)

    userEvent.type(firstNameInput, 'Trey');
    userEvent.type(lastNameInput, 'Roberts');
    userEvent.type(emailInput, 'trey@trey.com');
    userEvent.type(messageInput, 'Trey is so cool!')

    

    const button = screen.getByRole("button")
    userEvent.click(button);
    
    const newUser= await screen.findByText(/trey/i)

    
    expect(newUser).toBeInTheDocument


})
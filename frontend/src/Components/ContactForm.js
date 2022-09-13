import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ContactForm = () => {
    const [status, setStatus] = useState('Submit');
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');
        const { name, email, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };
        let response = await fetch ('http://localhost:5000/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(details),
        });
        setStatus('Submit');
        let result = await response.json();
        alert(result.status);
    };

    return (
        <>
        <h1 className='section3'>Reach Out</h1>
        <Form className='form' onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId='formName'>
                <Form.Label htmlFor='name'>Name:</Form.Label>
                <Form.Control placeholder='Your Name Here' type='text' id='name' required />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formEmail'>
                <Form.Label htmlFor='email'>Email:</Form.Label>
                <Form.Control type='email' placeholder='Enter email' id='email' required />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formText'>
                <Form.Label htmlFor='message'>Message:</Form.Label>
                <Form.Control as='textarea' rows={3} id='message' required />
            </Form.Group>
            <Button variant='primary' type='submit'>{status}</Button>
        
        </Form>
        </>
    );
};

export default ContactForm;
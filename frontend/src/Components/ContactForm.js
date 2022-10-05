import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ContactForm = () => {
    const [status, setStatus] = useState('Submit');
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');
        const { name, email, subject, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            subject: subject.value,
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
        <p className='formText'>For any questions or inquiries about membership, please reach out to us via the form below or directly at <a href='mailto:MelissaA@VAFoodIndustry.org'>MelissaA@VAFoodIndustry.org</a></p>
        <Form className='form' onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId='formName'>
                <Form.Label column sm={2} htmlFor='name'>Name:</Form.Label>
                <Form.Control placeholder='Your Name Here' type='text' id='name' required />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formEmail'>
                <Form.Label column sm={2} htmlFor='email'>Email:</Form.Label>
                <Form.Control type='email' placeholder='Enter email' id='email' required />
            </Form.Group>
            <Form.Group classname='mb-3' controlId='formSubject'>
                <Form.Label column sm={2} htmlFor='subject'>Subject</Form.Label>
                <Form.Control type='text' placeholder='Enter Subject' id='subject' required />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formText'>
                <Form.Label column sm={2} htmlFor='message'>Message:</Form.Label>
                <Form.Control as='textarea' rows={3} id='message' required />
            </Form.Group>
            <Button variant='primary' type='submit'>{status}</Button>
        
        </Form>
        </>
    );
};

export default ContactForm;
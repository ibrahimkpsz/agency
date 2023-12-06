import React from 'react'
import { useForm, ValidationError } from '@formspree/react';

function Form() {
    const [state, handleSubmit] = useForm("xpzgvwnp");
    if (state.succeeded) {
        return (
            <>
                <div className="container mt-5">
                    <div class="alert alert-light" role="alert">
                        Mesajınız tarafımıza ulaşmıştır.
                    </div>
                </div>
                <Form />
            </>
        );
    }
  return (
    <div className='mb-5' id='form'>
        <div className="container p-5 shadow-sm rounded-4 mt-5">
            <h1 className='contact-title'>Bize mesaj bırakın</h1>
            <form onSubmit={handleSubmit} className='d-flex flex-column gap-4'>
                <input type="text" name='name' placeholder='Ad Soyad' className='name-input' required/>
                <ValidationError 
                    prefix="Name" 
                    field="name"
                    errors={state.errors}
                />
                <input type="email" name='email' placeholder='E-posta' className='email-input' required />
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                />
                <input type="text" name='issue' placeholder='Konu' className='issue-input' required />
                <ValidationError 
                    prefix="Issue" 
                    field="issue"
                    errors={state.errors}
                />
                <textarea name='message' placeholder='Mesajınız' className='message-input' required />
                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                />
                <button className='btn btn-dark rounded-5 submit-btn' disabled={state.submitting}>Gönder</button>
            </form>
    
        </div>
    </div>
  )
}

export default Form
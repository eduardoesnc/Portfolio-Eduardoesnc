import React, { useState } from "react";
import { FaUserAlt, FaMapMarkedAlt, FaPhoneAlt, FaPaperPlane} from "react-icons/fa";
import emailJs from '@emailjs/browser';

import './contact.css';

export function Contact(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    function handleSubmit(e){
      e.preventDefault();
  
      if (name === '' || email === '' || subject === '' || message === ''){
        alert('Preencha todos os campos');
        return
      }

      const templateParams ={
        from_name: name,
        subject: subject,
        message: message,
        email: email
      }

      emailJs.send("service_57twyjo", "template_gye68it", templateParams, "1vg9rpe0JEvIIszXJ")
      .then((response) => {
        console.log("Email Enviado", response.status, response.text)
        setName('')
        setEmail('')
        setSubject('')
        setMessage('')
      }, (err) => {
        console.log('Erro:', err)
      })


    };
    
    return (
        <section className='contact' id="contact">

        <div className='section-heading'>
            <h2 className='section-title'>
              Entre em Contato
              <span class="title-bg">Contato</span>
            </h2>
        </div>

        <div className='contact-container'>
          <div className='message-form'>
            <div className='contact-container-heading'>
              <h4>Envie-me uma mensagem</h4>
            </div>

            <form onSubmit={handleSubmit}>
              <input className='f-inputs' type='text' name='name' placeholder='Nome' value={name} onChange={(e) => setName(e.target.value)}></input>
              <input className='f-inputs' type='text' name='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
              <input type='text' name='subject' placeholder='Assunto' value={subject} onChange={(e) => setSubject(e.target.value)}></input>
              <textarea name='message' placeholder='Mensagem' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
              <input type='submit' name='submit' value={'Enviar Mensagem'}></input>
            </form>

          </div>
          <div className='contact-info-container'>
            <div className='contact-container-heading'>
              <h4>Dados de contato</h4>
              <p>Sempre disponível para trabalhos, caso o projeto certo apareça. Sinta-se à vontade para entrar em contato comigo!</p>
            </div>

            <div className='contact-container-infos'>

              <div className='contact-container-info-single'>
                <div className='contact-info-icon'>
                  <FaUserAlt className='icon'/>
                </div>
                <div className='contact-info'>
                  <h6>Nome</h6>
                  <span>Eduardo Estevão</span>
                </div>
              </div>

              <div className='contact-container-info-single'>
                <div className='contact-info-icon'>
                  <FaMapMarkedAlt className='icon'/>
                </div>
                <div className='contact-info'>
                  <h6>Localização</h6>
                  <span>Recife, Pernambuco, BR</span>
                </div>
              </div>

              <div className='contact-container-info-single'>
                <div className='contact-info-icon'>
                  <FaPhoneAlt className='icon'/>
                </div>
                <div className='contact-info'>
                  <h6>Me ligue</h6>
                  <span><a href="tel:+5581997688104">+55 (81) 9 9768-8104</a></span>
                </div>
              </div>
              
              <div className='contact-container-info-single'>
                <div className='contact-info-icon'>
                  <FaPaperPlane className='icon'/>
                </div>
                <div className='contact-info'>
                  <h6>Me envie um e-mail</h6>
                  <span><a href="mailto:eduardoestevaonc@gmail.com">eduardoestevaonc@gmail.com</a></span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    );
}
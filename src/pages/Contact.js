import React from 'react'
import '../styles/Contacts/contacts.css'

export default function Contact() {
  return (
    <div className='contacts'>
      <center>
      <div className='socials'>
      <i onClick={()=>{alert('social page links will be here')}} className="fa-brands fa-facebook" />
      <i onClick={()=>{alert('social page links will be here')}} className="fa-brands fa-twitter" />
      <i onClick={()=>{alert('social page links will be here')}} className="fa-brands fa-line" />
      <i onClick={()=>{alert('social page links will be here')}} className="fa-brands fa-instagram" />
      </div>
      <div className='conPhone'>
       <a href='tel:+995591703703' className='phones'><i className="fa-solid fa-phone" />Call Us : 591703703</a>
        <p className='contP'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d396.0195488659457!2d-121.90056402495613!3d37.43341010982896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fc92a46d1cac1%3A0xf0a78fde956b9f6c!2s120%20S%20Main%20St%20%2320%2C%20Milpitas%2C%20CA%2095035%2C%20USA!5e0!3m2!1sen!2sge!4v1667235762957!5m2!1sen!2sge" className='contact-map' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </p>
      </div>
      </center>
    </div>
  )
}

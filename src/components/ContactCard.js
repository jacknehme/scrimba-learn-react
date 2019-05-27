import React from 'react';

function ContactCard (props){
    const contact = props.contact;
    return (
        <div className="contact-card">
            <img src={contact.imgUrl} />
            <h3>{contact.name}</h3>
            <p>Phone: {contact.phone}</p>
            <p>Email: {contact.email}</p>
        </div>
    );
}

export default ContactCard;
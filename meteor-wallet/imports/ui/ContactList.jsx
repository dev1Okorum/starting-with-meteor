import React from "react";
import {ContactCollections} from "../api/contactCollections";
import {useTracker} from "meteor/react-meteor-data";


export const ContactList = () => {

    const contacts = useTracker(()=>{
        return ContactCollections.find({}).fetch();
    })
    return (
        <>
            <h3>Contact List</h3>
            {contacts.map(contact => (
                <li key={contact.email}>{contact.name} -  {contact.email}</li>
            ))}
        </>
    )

}
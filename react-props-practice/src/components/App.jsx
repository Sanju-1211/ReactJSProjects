import React from "react";
import ContactCard from "./ContactCard";
import contacts from "../contacts";


function App(props) {
    return (
        <div>
        <h1 className="heading">My Contacts</h1>
        <ContactCard 
            name = {contacts[0].name}
            imgURL = {contacts[0].imgURL}
            phone = {contacts[0].phone}
            email = {contacts[0].email}
            />

        <ContactCard 
            name = {contacts[1].name}
            imgURL = {contacts[1].imgURL}
            phone = {contacts[1].phone}
            email = {contacts[1].email}
            />

        <ContactCard 
            name = {contacts[2].name}
            imgURL = {contacts[2].imgURL}
            phone = {contacts[2].phone}
            email = {contacts[2].email}
            />
        </div>
    );
  }

  export default App;
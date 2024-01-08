import React from "react";
import ContactCard from "./ContactCard";
import contacts from "../contacts";


function createCard(cont){
    return(
        <ContactCard 
            id = {cont.id}
            key = {cont.id}
            name = {cont.name}
            imgURL ={cont.imgURL}
            phone = {cont.phone}
            email = {cont.email}
            />
    )
}

function App(props) {
    return (
        <div>
        <h1 className="heading">My Contacts</h1>
        {contacts.map(createCard) }
        </div>
    );
  }

  export default App;
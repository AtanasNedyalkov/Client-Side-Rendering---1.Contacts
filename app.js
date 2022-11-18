import {html, render} from "./node_modules/lit-html/lit-html.js";   
import {contacts} from "./contacts.js";

const root = document.getElementById("contacts");
const contactCard = (contact) => html `
 <div class="contact card">
            <div>
                <i class="far fa-user-circle gravatar"></i>
            </div>
            <div class="info">
                <h2>Name:${contact.name}</h2>
                <button class="detailsBtn">Details</button>
                <div class="details" id=${contact.id}>
                    <p>Phone number:${contact.phoneNumber}</p>
                    <p>Email:${contact.email}</p>
                </div>
            </div>
        </div>`;
        
        root.addEventListener("click" , toogleDetails)

        render(contacts.map(contactCard),root)

        function toogleDetails(e){
           if(e.target.classList.contains("detailsBtn")){
               const parent = e.target.parentElement;
               const details = parent.querySelector('.details')
               if(details.style.display == 'block')
               details.style.details = 'none'
               else
               details.style.details = 'block'
            }
        }
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { Reveal } from "./Reveal";

function Contact() {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // EmailJS Service params
        const serviceId = import.meta.env.VITE_REACT_APP_SERVICE_ID as string;
        const templateId = import.meta.env.VITE_REACT_APP_TEMPLATE_ID as string;
        const publicKey = import.meta.env.VITE_REACT_APP_PUBLIC_KEY as string;

        // Check if any of the variables are undefined before sending the email
        // if (!serviceId || !templateId || !publicKey) {
        //     console.error("Missing environment variables for email configuration");
        //     return;
        // }


        // Create a new obect that contains dynamic template params
        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'Web Wizard',
            subject: subject,
            message: message
        }

        emailjs.send(serviceId, templateId, templateParams, publicKey).then((response) => {
            console.log('Email sent succesfully; ', response);
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
        }).catch((error) => {
            console.error('Error sending mail:', error)
        })
    }

    return (
        <div>
            <div className=" w-full h-screen flex flex-col justify-center items-center">
                <div className="w-9/12 h-full flex flex-row items-center">
                    <div className="w-full py-4 mt-5">
                        <div className="w-1/2">
                            <Reveal>
                                <h1 className="text-4xl text-green font-display pb-2 font-bold">Contact</h1>
                            </Reveal>
                            <form onSubmit={handleSubmit} className="w-auto flex flex-col">
                                <Reveal>
                                <input type="text" id="user_name" name="user_name" className="w-full border-b-2 border-bottom border-green text-white text-xl bg-black px-4 py-2 mb-4 focus:outline-none focus:shadow-outline" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                                </Reveal>
                               <Reveal>
                               <input type="text" id="user_email" name="user_email" className="w-full border-b-2 border-bottom border-green text-white text-xl bg-black px-4 py-2 mb-4 focus:outline-none focus:shadow-outline" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
                               </Reveal>
                                <Reveal>
                                <input type="email" id="user_email" name="user_email" className="w-full border-b-2 border-bottom border-green text-white text-xl bg-black px-4 py-2 mb-4 focus:outline-none focus:shadow-outline" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </Reveal>
                                <Reveal>
                                <textarea id="message" name="message" className="w-full h-40 border-b-2 border-bottom border-green text-white text-xl bg-black px-4 py-2 mb-4 focus:outline-none focus:shadow-outline" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
                                </Reveal>
                                <Reveal>
                                <input type="submit" value="Send" className="w-full text-black text-xl bg-green px-4 py-2 mb-4 rounded-lg focus:outline-none focus:shadow-outline" />
                                </Reveal>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;

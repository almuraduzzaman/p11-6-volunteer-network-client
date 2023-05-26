import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";



const EventRegister = () => {
    const [error, setError] = useState('');
    const { id } = useParams();
    const events = useLoaderData();
    // console.log(id, events);

    const eventDescription = events?.find(event => event._id == id);
    // console.log(eventDescription.eventName);

    const handleEventRegister = (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const date = event.target.date.value;
        const description = event.target.description.value;
        // console.log(name, email, password);

        const eventData = { name, email, date, description };

        // console.log(eventData);
        setError('');

        fetch(`http://localhost:5000/volunteer`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert('Registration Successful')
            })
    }


    return (
        <section className="flex flex-col items-center justify-center mt-6 h-screen">
            <div>
                <p className="text-xl font-bold mb-3 text-center">Register as a Volunteer</p>
            </div>
            <div className="border-2 p-12 md:w-1/2 mt-4">
                <form onSubmit={handleEventRegister}>
                    <div className="flex flex-col">

                        <input className="input focus:outline-none" placeholder="Your Name" type="text" name="name" required />
                        <div className="divider m-0"></div>

                        <input className="input focus:outline-none" placeholder="Email" type="email" name="email" required />
                        <div className="divider m-0"></div>

                        <input className="input focus:outline-none" placeholder="Date" type="date" name="date" required />
                        <div className="divider m-0"></div>

                        <input className="input focus:outline-none" defaultValue={eventDescription?.eventName} type="text" name="description" required readOnly={eventDescription ? true : false} />
                        <div className="divider m-0"></div>

                        <p>{error}</p>

                        <input className="btn w-full mb-4 mt-2" type="submit" value="Register" />

                    </div>
                </form>
            </div>
        </section>
    );
};

export default EventRegister;
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const MyEvents = () => {
    const [myEvents, setMyEvents] = useState([]);



    useEffect(() => {
        fetch('http://localhost:5000/my-events')
            .then(res => res.json())
            .then(data => {
                setMyEvents(data)
            })
    }, [])
    return (
        <div className="grid grid-cols-4 gap-6 px-28 my-10">
            {
                myEvents.map(event =>
                    <div key={event._id}>
                        <div className="card w-full bg-base-100 shadow-xl">
                            <figure><img className="w-fit h-[300px]" src={event.imageLink} /></figure>
                            <Link to={`/event-register/${event._id}`} className="card-body rounded-b-xl text-white" style={{ backgroundColor: event.colorCode }}>
                                <h2 className="text-xl font-medium text-center">{event.eventName}</h2>
                            </Link>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default MyEvents;
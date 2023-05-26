import { useEffect, useState } from "react";
import InputBanner from "../InputBanner/InputBanner";
import { Link } from "react-router-dom";


const Home = () => {
    const [allEvents, setAllEvents] = useState([]);
    const [myEvents, setMyEvents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/all-events')
            .then(res => res.json())
            .then(data => setAllEvents(data));
    }, []);

    useEffect(() => {
        fetch('http://localhost:5000/my-events')
            .then(res => res.json())
            .then(data => setMyEvents(data));
    }, []);

    // useEffect(() => {
    //     const combinedEvents = [...allEvents, ...myEvents];
    //     setAllEvents(combinedEvents);
    // }, [myEvents, allEvents]);



    return (
        <div className="relative">
            <InputBanner />

            <div className="grid grid-cols-4 gap-6 px-28 my-10 absolute top-[65%]">
                {
                    allEvents.map(event =>
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
                {
                   myEvents && myEvents.map(event =>
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

        </div>
    );
};

export default Home;
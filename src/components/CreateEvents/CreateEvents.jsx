
const CreateEvents = () => {

    const getRandomColorCode = () => {
        const letters = "0123456789ABCDEF";
        let colorCode = "#";
        for (let i = 0; i < 6; i++) {
            colorCode += letters[Math.floor(Math.random() * 16)];
        }
        return colorCode;
    };

    const handleEventSubmit = (event) => {

        event.preventDefault();

        const eventName = event.target.name.value;
        const imageLink = event.target.photo.value;
        const colorCode = getRandomColorCode();
        // console.log(eventName, imageLink, colorCode);

        const eventData = { eventName, imageLink, colorCode };

        fetch('http://localhost:5000/upload-event', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data?.insertedId) {
                    alert('New Event Crated Successfully')
                }
            })


    }

    return (
        <section className="flex flex-col items-center justify-center mt-6 h-screen">
            <div>
                <p className="text-xl font-bold mb-3 text-center">Create a New Event</p>
            </div>
            <div className="border-2 p-12 md:w-1/2 mt-4">
                <form onSubmit={handleEventSubmit}>
                    <div className="flex flex-col">

                        <input className="input focus:outline-none" placeholder="Event Name" type="text" name="name" required />
                        <div className="divider m-0"></div>

                        <input className="input focus:outline-none" placeholder="Photo URL" type="url" name="photo" required />
                        <div className="divider m-0"></div>


                        <input className="btn w-full mb-4 mt-2" type="submit" value="Register" />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default CreateEvents;
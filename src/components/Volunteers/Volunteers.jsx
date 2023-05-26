import { useEffect, useState } from "react";

const Volunteers = () => {
    const [volunteers, setVolunteers] = useState([]);
    const [control, setControl] = useState(false);

    // console.log(volunteers);
    useEffect(() => {
        fetch('https://a11-toystacks-server.vercel.app/all-toys')
            .then(res => res.json())
            .then(data => setVolunteers(data))
    }, [control]);


    const handleVolunteerRemove = id => {
        console.log(id);


        fetch(`http://localhost:5000/delete-volunteer/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert('Volunteer Removed')
                }
                setControl(!control)
            })

    }

    return (
        <div className="overflow-x-auto w-full flex justify-center mt-10">
            <table className="table table-compact  w-[80%]">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        volunteers.map((volunteer, idx) => {
                            return (
                                <tr key={volunteer._id}>
                                    <th>{idx + 1}</th>
                                    <td>{volunteer.name}</td>
                                    <td>{volunteer.email}</td>
                                    <td>{volunteer.date}</td>
                                    <td>{volunteer.description}</td>
                                    <td onClick={() => handleVolunteerRemove(volunteer._id)} className="btn btn-warning">X</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Volunteers;
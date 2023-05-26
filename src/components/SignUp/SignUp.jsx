import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { updateProfile } from "firebase/auth";


const SignUp = () => {
    const [error, setError] = useState('');
    const { createUser } = useContext(AuthContext);


    const handleEventRegister = (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // console.log(name, email, password);

        if (password.length < 7) {
            setError('Password must be at least 7 characters long');
            return;
        }

        setError('');

        createUser(email, password)
            .then(result => {
                const newUser = result.user;
                updateUsername(newUser);
                alert('Account Created Successfully')
                console.log(newUser);
                event.target.reset();
            })
            .catch(err => setError(err.message))


        const updateUsername = (user) => {
            updateProfile(user, {
                displayName: name
            })
                .then(() => console.log('user name updated'))
                .catch(err => setError(err.message))
        }
    }


    return (
        <section className="flex flex-col items-center justify-center mt-6 h-screen">
            <div>
                <p className="text-xl font-bold mb-3 text-center">Sign Up</p>
            </div>
            <div className="border-2 p-12 md:w-1/2 mt-4">
                <form onSubmit={handleEventRegister}>
                    <div className="flex flex-col">

                        <input className="input focus:outline-none" placeholder="Your Name" type="text" name="name" required />
                        <div className="divider m-0"></div>

                        <input className="input focus:outline-none" placeholder="Email" type="email" name="email" required />
                        <div className="divider m-0"></div>

                        <input className="input focus:outline-none" placeholder="Password" type="password" name="password" required />
                        <div className="divider m-0"></div>

                        <p>{error}</p>

                        <input className="btn w-full mb-4 mt-2" type="submit" value="Register" />

                        <p>Already have an account? <Link to={'/login'} className="text-green-600">Login</Link></p>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default SignUp;
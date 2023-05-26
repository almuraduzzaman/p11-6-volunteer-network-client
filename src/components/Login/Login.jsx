import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";


const Login = () => {
    const [error, setError] = useState('');
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';


    const handleLogin = (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;
        // console.log(name, email, password);


        setError('');

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                alert('Login Successful')
                console.log(loggedUser);
                event.target.reset();
                navigate(from, { replace: true })
            })
            .catch(err => setError(err.message))

    }
    

    return (
        <section className="flex flex-col items-center justify-center mt-6 h-screen">
            <div>
                <p className="text-xl font-bold mb-3 text-center">Login</p>
            </div>
            <div className="border-2 p-12 md:w-1/2 mt-4">
                <form onSubmit={handleLogin}>
                    <div className="flex flex-col">

                        <input className="input focus:outline-none" placeholder="Email" type="email" name="email" required />
                        <div className="divider m-0"></div>

                        <input className="input focus:outline-none" placeholder="Password" type="password" name="password" required />
                        <div className="divider m-0"></div>

                        <p>{error}</p>

                        <input className="btn w-full mb-4 mt-2" type="submit" value="Register" />

                        <p>Do not have an account? <Link to={'/signUp'} className="text-green-600">Sign Up</Link></p>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Login;
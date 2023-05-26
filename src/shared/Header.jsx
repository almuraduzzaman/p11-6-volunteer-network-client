import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logos/Group 1329.png';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.error(err))
    }

    return (
        <div className="navbar bg-gray-100 py-11 px-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to={'/'} className={({ isActive }) => isActive ? 'text-green-500' : 'text-[#757575]'}><button>Home</button></NavLink></li>
                        <li><NavLink to={'/donation'} className={({ isActive }) => isActive ? 'text-green-500' : 'text-[#757575]'}><button>Donation</button></NavLink></li>
                        <li><NavLink to={'/create-events'} className={({ isActive }) => isActive ? 'text-green-500' : 'text-[#757575]'}><button>Events</button></NavLink></li>
                        <li><NavLink to={'/blogs'} className={({ isActive }) => isActive ? 'text-green-500' : 'text-[#757575]'}><button>Blog</button></NavLink></li>
                    </ul>
                </div>
                <img className='h-[60px]' src={logo} />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold">
                    <li><NavLink to={'/'} className={({ isActive }) => isActive ? 'text-green-500' : 'text-[#757575]'}><button>Home</button></NavLink></li>
                    <li><NavLink to={'/donation'} className={({ isActive }) => isActive ? 'text-green-500' : 'text-[#757575]'}><button>Donation</button></NavLink></li>
                    <li><NavLink to={'/my-events'} className={({ isActive }) => isActive ? 'text-green-500' : 'text-[#757575]'}><button>Events</button></NavLink></li>
                    <li><NavLink to={'/blogs'} className={({ isActive }) => isActive ? 'text-green-500' : 'text-[#757575]'}><button>Blog</button></NavLink></li>
                </ul>
            </div>
            <div className='navbar-end gap-5'>
                <div >
                    <Link to={'/event-register'} className="btn btn-primary">Register</Link>
                </div>
                
                {
                    user ? <div className="dropdown dropdown-end">
                        <button className="btn btn-ghost ">
                            <div>
                                <p className='normal-case'>{user.displayName}</p>
                            </div>
                        </button>
                        <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-auto md:w-52 space-y-2">
                            <li><Link to={'/create-events'} className="btn btn-active btn-ghost normal-case">Create Events</Link></li>
                            <li><Link to={'/volunteers'} className="btn btn-active btn-ghost normal-case">Volunteers</Link></li>
                            <li><button onClick={handleLogOut} className="btn btn-active btn-primary text-white normal-case">Logout</button></li>
                        </ul>
                    </div> : <Link to={'/login'}><button className="btn btn-active btn-ghost normal-case">Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Header;
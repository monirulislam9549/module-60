import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <nav>
            <div className="navbar bg-primary text-primary-content">
                <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
                <Link className="btn btn-ghost normal-case text-xl" to="/">Home</Link>
                {/* by default Profile route hide. if user login then it showen  */}
                {
                    user && <Link className="btn btn-ghost normal-case text-xl" to="/profile">Profile</Link>
                }
                <Link className="btn btn-ghost normal-case text-xl" to="/login">Login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/register">Register</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/orders">Orders</Link>
                {
                    user ?
                        <>
                            <span>{user.email}</span>
                            <button onClick={handleLogOut} className="btn btn-xs">Sign Out</button>
                        </> : <Link to="/login">Login</Link>
                }
            </div>
        </nav>
    );
};

export default Header;
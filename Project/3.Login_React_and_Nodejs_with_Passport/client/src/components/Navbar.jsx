import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ user }) {
    return (
        <div className='navbar'>
            <span className='logo'><Link to='/'>App NTT</Link> </span>

            {user ? (
                <ul className='list'>
                    <li className='listItem'>
                        <img src='https://scontent.fdad3-3.fna.fbcdn.net/v/t39.30808-6/277791657_106083558732245_8190340676768010477_n.jpg?stp=dst-jpg_s526x395&_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=s49UbF7wPxsAX-dfsix&_nc_ht=scontent.fdad3-3.fna&oh=00_AT9xGSvaF3tRi02xmlhod1sS1YhPi-n01ElDSyhGz8pN3g&oe=62556A05' alt='avartar' className='avatar'></img>
                    </li>
                    <li className='listItem'>Thanh Truong</li>
                    <li className='listItem'>Logout</li>
                </ul>
            ) : (<Link className='link' to='login'>Login</Link>)}

        </div>
    )
}

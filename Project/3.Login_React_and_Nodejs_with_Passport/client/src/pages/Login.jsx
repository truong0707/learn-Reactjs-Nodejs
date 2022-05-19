import React from 'react';


export default function Login() {
  return (
    <div>
        <h1 className='loginTitle'>Choose a Login Method</h1>
        <div className='wrapper'>
            <div className='left'>
                <div className='loginButton google'>
                    <img style={{width:'20%'}} src='https://cdn.wccftech.com/wp-content/uploads/2018/01/Google-Logo.png' className='icon' />
                    Google
                </div>

                <div className='loginButton facebook'>
                    <img style={{width:'20%'}} src='https://png.pngtree.com/element_our/md/20180506/md_5aeedeff67ded.jpg' className='icon' />
                    Facebook
                </div>
            </div>

            <div className='center'>
                <div className='line'/>
                <div className='or'>OR</div>
            </div>

            <div className='right'>
                <input type='text' placeholder='Username'/>
                <input type='text' placeholder='Password'/>
                <button className='submit'>Login</button>
            </div>
        </div>
    </div>
  )
}

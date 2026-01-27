import { useState } from 'react';
import HomeLayout from '../Layouts/HomeLayout.jsx'

import { Link, useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux';

import toast from 'react-hot-toast'
import { loginAccount } from '../Redux/Slices/AuthSlice.js';

function Login(){

    const dispatch = useDispatch();
    const navigate = useNavigate();

    //Maintaining the initial form state with geting user credetials
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    })

    function handleUserInput(e){
        const {name, value} = e.target;
        setLoginData({
            ... loginData,
            [name]:value
        })
    }

    //
    async function onLogin(event){
        event.preventDefault();

        //vaidations
        if(!loginData.email || !loginData.password ){
            toast.error("Please fill all the details")
            return;
        }

        // dispatch create  account action
        const response = await dispatch(loginAccount(loginData));
        
        console.log('responsesss',response)
        
        if(response?.payload?.success)
        navigate('/');

        setLoginData({
            email: "",
            password: "", 
        })

    }

    return (
        <HomeLayout>
            <div className='flex items-center justify-center h-[90vh]'>

                <form onSubmit={onLogin} noValidate className='flex flex-col justify-center items-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px]'>
                    <h1 className='text-center text-2xl font-bold'>Login Page</h1>

                    <div className=' w-full flex flex-col gap-1'>
                        <label htmlFor="email" className='font-semibold'>Email</label>
                        <input 
                            type="email" 
                            required
                            name='email'
                            id='email'
                            placeholder='Enter your name'
                            className='bg-transparent px-2 py-1 border'
                            onChange={handleUserInput}
                            value={loginData.email}
                        />
                    </div>
                    <div className='w-full flex flex-col gap-1'>
                        <label htmlFor="password" className='font-semibold'>Password</label>
                        <input 
                            type="password" 
                            required
                            name='password'
                            id='password'
                            placeholder='Enter password'
                            className=' bg-transparent px-2 py-1 border'
                            onChange={handleUserInput}
                            value={loginData.password}
                        />
                    </div>

                    <button type='submit' className='mt-2 w-full bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-poiter'>
                        Login
                    </button>

                    <p className="text-center">
                        Donot have an account ? <Link to='/signup' className='link text-accent cursor-pointer'> Login </Link>
                    </p>
                </form>

            </div>
        </HomeLayout>
    );
}

//
export default Login;
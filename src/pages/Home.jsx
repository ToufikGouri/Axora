import React, { useEffect } from 'react'
import { BotIcon, HandCoinsIcon, MoveRightIcon, ZapIcon } from 'lucide-react'
import ChatVideo from "../assets/AI_and_human_chat.mp4"
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Home = () => {

    useEffect(() => {
        document.title = "Axora" 
    }, [])

    return (
        <>
            <main className='flex flex-col justify-center items-center mb-10 mx-2'>

                {/* Hero */}
                <section className='h-screen grid place-items-center'>
                    <div className='w-full md:w-4/5 text-center space-y-10 tracking-wider'>
                        <h1 className='text-4xl md:text-6xl font-bold capitalize clipText'>Axora : Unleash the Power of <br /> Conversation with AI</h1>
                        <p className='text-secondaryText md:text-xl'>Axora is an AI-powered conversational tool designed to assist any person or teams with intuitive, seamless text-based interactions.</p>
                        <Link to="/chat" className='p-2 px-4 bg-cta text-black font-bold rounded-xl inline-flex items-center group'>Start a Conversation <MoveRightIcon className='ms-1 group-hover:translate-x-2 duration-100' /> </Link>
                    </div>
                </section>

                {/* Mid */}
                <section className='w-full md:w-4/5 grid md:grid-cols-2 rounded-xl border overflow-hidden'>
                    <h1 className='text-xl md:text-2xl max-md:p-4 text-center flex items-center italic md:mx-10 md:leading-9'>Axora delivers fast, intelligent chats powered by advanced AI.
                        <br /> See how it transforms interactions into meaningful,
                        real-time conversations that engage and inspire you.
                    </h1>
                    <video autoPlay loop muted>
                        <source src={ChatVideo} type="video/mp4" />
                    </video>
                </section>

                {/* End */}
                <section className='w-full md:w-4/5 grid place-items-center mt-20 space-y-20'>
                    <h1 className='text-2xl md:text-4xl font-bold capitalize clipText text-center'>Feel the differnce with Axora</h1>

                    <div className='w-4/5 md:w-full grid md:grid-cols-3 gap-20 text-black text-xl font-semibold'>
                        <div className='grid place-items-center h-28 rounded-2xl bg-yellow-300 shadow-sm shadow-black relative'>
                            <div className=' after:border-2 after:border-yellow-300 after:absolute after:left-4 after:top-4 after:-z-10 after:size-full after:rounded-2xl'></div>
                            <BotIcon className='size-16' />
                            <h1>AI That Understands You</h1>
                        </div>
                        <div className='grid place-items-center h-28 rounded-2xl bg-purple-500 shadow-sm shadow-black relative'>
                            <div className=' after:border-2 after:border-purple-500 after:absolute after:left-4 after:top-4 after:-z-10 after:size-full after:rounded-2xl'></div>
                            <ZapIcon className='size-16' />
                            <h1>Fast, Reliable, and Secure</h1>
                        </div>
                        <div className='grid place-items-center h-28 rounded-2xl bg-green-500 shadow-sm shadow-black relative'>
                            <div className=' after:border-2 after:border-green-500 after:absolute after:left-4 after:top-4 after:-z-10 after:size-full after:rounded-2xl'></div>
                            <HandCoinsIcon className='size-16' />
                            <h1>Free of cost</h1>
                        </div>
                    </div>

                    <Link to="/chat" className='max-md:w-4/5 w-1/4 p-2 px-4 bg-cta text-black font-bold rounded-xl inline-flex justify-center items-center group'>Let's Go <MoveRightIcon className='ms-1 group-hover:translate-x-2 duration-100' /> </Link>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Home
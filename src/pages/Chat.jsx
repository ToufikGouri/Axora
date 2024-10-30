import React, { useEffect, useRef, useState } from 'react'
import { CohereClientV2 } from "cohere-ai"
import { CircleArrowUp } from 'lucide-react'

const Chat = () => {

    const cohere = new CohereClientV2({ token: import.meta.env.VITE_COHERE_API })
    const [msg, setMsg] = useState("")
    const [chats, setChats] = useState([])
    // const [chats, setChats] = useState(["What's axios", "Axios is a promise-based HTTP client for the browser and Node.js that features a simple-to-use API, offering a powerful set of features like automatic transformation of JSON data, error handling, and request cancellation, making asynchronous programming in JavaScript easier and more efficient."])
    const [loading, setLoading] = useState(false)
    const containerRef = useRef()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const refineMsg = msg.trim()
        if (!refineMsg) return

        setMsg("")  // clearing input field
        setChats((prev) => [...prev, { role: "user", content: refineMsg }])     // updating the user's side chat 
        setLoading(true)

        await cohere.chat({
            model: "command-r-plus",
            messages: [
                { role: "user", content: refineMsg }
            ]
        }).then(res => {
            setChats((prev) => [...prev, { role: "system", content: res.message.content[0].text }])       // updating the AI side chat 
            setLoading(false)
            console.log(res);
        }).catch(err => console.log("The error", err))
    }

    useEffect(() => {
        document.title = "Chat | Axora"
    }, [])

    useEffect(() => {
        // to scroll to the last line after output
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight
        }
    }, [chats])

    return (
        <>
            <section className='min-h-screen mx-2'>
                {/* Response */}
                {
                    !chats.length ?
                        <h1 className='h-screen grid place-items-center text-2xl md:text-4xl font-bold capitalize clipText'>How can I help you ?</h1>
                        :
                        <section ref={containerRef} className='h-[95vh] overflow-y-scroll grid place-items-center'>
                            <div className='w-11/12 md:w-2/4 flex flex-col mb-28 space-y-6'>
                                <h1>Some repsonse</h1>
                                {chats.map((val, ind) =>
                                    <div key={ind} className={`flex whitespace-pre-wrap ${val.role === "user" ? "p-2 px-6 self-end bg-cardBG rounded-full"    // for user's chat
                                        : ""}`} >
                                        {val.content}
                                    </div>
                                )}
                                <h1>----------END----------</h1>
                            </div>

                        </section>
                }

                {/* Chat input */}
                <div className='w-full fixed bottom-2 left-0 grid place-items-center'>
                    <form onSubmit={handleSubmit} className='w-11/12 md:w-2/4 p-1 px-2 flex items-center bg-cardBG border border-white/20 rounded-full'>
                        <textarea
                            className='w-full px-2 mx-1 min-h-10 max-h-40 rounded-2xl bg-transparent outline-none resize-none'
                            value={msg}
                            onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) handleSubmit(e) }}
                            onChange={(e) => setMsg(e.target.value)}
                            placeholder='Start typing...'
                        />
                        <button type='submit'>
                            <CircleArrowUp className='size-8 text-cta' />
                        </button>
                    </form>
                </div>
            </section >
        </>
    )
}

export default Chat
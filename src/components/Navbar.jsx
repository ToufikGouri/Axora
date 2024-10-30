import React, { useEffect, useState } from 'react'

const Navbar = () => {

    const [isDarkMode, setIsDarkMode] = useState(true)

    useEffect(() => {
        const isDarkModeByDefault = window.matchMedia('(prefers-color-scheme: dark)').matches
        if (!isDarkModeByDefault) setIsDarkMode(false)

        if (isDarkMode) {
            document.body.classList.add("dark", "text-primaryText")
            document.body.style.backgroundColor = "#121212"
        } else {
            document.body.classList.remove("dark", "text-primaryText")
        }
    }, [])

    return (
        <>
            <nav className='h-10 bg-blue-600'>
                I'm Navbar
            </nav>
        </>
    )
}

export default Navbar
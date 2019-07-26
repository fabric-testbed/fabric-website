import { useState, useEffect } from 'react'

let defaultWidth

// This conditional makes the build work.
// The browser handles this fine during development.
// However, Node has no window object, so we check here to see if it exists.
if (typeof window !== 'undefined') {
    defaultWidth = window.innerWidth
}

const COMPACT_THRESHOLD = 900

export const useWindowWidth = (initialWidth = defaultWidth) => {
    const [width, setWidth] = useState(initialWidth)
    const determineIfCompact = () => width < COMPACT_THRESHOLD
    const [isCompact, setIsCompact] = useState(determineIfCompact())
    
    useEffect(() => {
        setIsCompact(determineIfCompact())
    }, [width])

    useEffect(() => {
        setWidth(typeof window !== 'undefined' ? window.innerWidth : 0)
    }, [])
    
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })
    
    return { width, isCompact }
}

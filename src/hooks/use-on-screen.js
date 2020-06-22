import { useState, useEffect } from "react"

export default function useOnScreen(ref, rootMargin = "0px") {
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting)
      },
      {
        rootMargin,
      }
    )
    if (ref.current) {
      observer.observe(ref.current)
    }
    return () => {
      observer.unobserve(ref.current)
    }
  }, [])

  return isIntersecting
}

// {
//   onScreen ? <h1>Within margin</h1> : <h1>Outside of margin</h1>
// }

//or

// const AnElement = () => {
//   const ref = useRef()
//   const onScreen = useOnScreen(ref, "0px")
//   return (
//     <div
//       ref={ref}
//       style={{
//         backgroundColor: onScreen ? "red" : "black",
//         color: onScreen ? "red" : "black",
//       }}
//     >
//       <h1>Is on screen</h1>
//     </div>
//   )
// }

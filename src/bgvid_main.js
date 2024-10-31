import './style/images_videos.css'
import React, { useState, useEffect, useRef } from 'react'
import TextContainer from './text_containers'

function scrollToRef(ref) {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
}

const VideoImageContainer = () => {
    const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 650)
    useEffect(() => {
        const resize_function = () => {
            const isMobile = window.innerWidth <= 650
            setIsMobileView(isMobile)
            console.log(isMobile)
        }
        window.addEventListener('resize', resize_function)
        return () => window.removeEventListener('resize', resize_function)
    }, [])

    let media = isMobileView ? (
    
        <picture>
            <source media="(min-width: 650px)" srcSet="./images_videos/hero_jwst.webp" />
            <source media="(max-width: 400px)" srcSet="./images_videos/hero_jwst_small.webp" />
            <img 
            width="100%" 
            alt="Background Image" 
            src="./images_videos/hero_jwst.webp"
            />
        </picture>
    ) : (
        <video autoPlay muted loop playsInline className="bgvid" poster="./images_videos/hero_jwst.webp">
            <source src="./images_videos/Hero-WT-2024-07-12-1920x1080-AD-mix.webm" type="video/webm" />
        </video>
    )
      
    return (
        <>
            {media}
        </>
    )
}

const VideoContainer = () => {
    const containerRef = useRef(null)

    const handleScroll = () => {
        scrollToRef(containerRef)
    }

  return (
    <>
    <div className="components_front_main">
        <div className="main_text_container">
            <div id="main_text">
                <div className="hero_text">
                    <p>Masinõppe algoritm</p>
                    <p>fotomeetrilised punanihked</p>
                </div>
                <button onClick={handleScroll} id="explore_button_main"><span>Loe rohkem</span></button>
            </div>
        </div>
        <div className="video_container">
            <VideoImageContainer />
        </div>
    </div>
    <div ref={containerRef}>
    <TextContainer />
    </div>
    </>
  )
}

export default VideoContainer
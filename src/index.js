import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/main.css'

import NavigationBar from './navigation' // navigation html
import VideoContainer from './bgvid_main'
import Footer from './page_footer'
import InformationSection from './info_section'

function EmptySpace() {
  return (
    <>
      {/* main.css */}
      <div className="empty_section dark_bg"></div>
    </>
  )
}


const vanigation = ReactDOM.createRoot(
  document.querySelector('#header_nav')
)
vanigation.render(
  <NavigationBar />
)

const main_content = ReactDOM.createRoot(
  document.querySelector('#main_content')
)
main_content.render(
  <>
  <VideoContainer />
  <InformationSection />
  <EmptySpace />
  </>
)

const page_footer = ReactDOM.createRoot(
  document.querySelector('#page_footer')
)

page_footer.render(
  <>
  <Footer />
  </>
)
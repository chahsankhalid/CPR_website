import './index.css'
import './mediaQueries.css'
import React, { useEffect } from 'react'
import { useLocation, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import MouseFollower from 'mouse-follower'
import gsap from 'gsap'
import Email from './components/email'
import { AnimatePresence } from 'framer-motion'
import jQuery from 'jquery'
import Allblogs from './components/allblogs'
import { Helmet } from 'react-helmet'
import Aboutus from './components/aboutus'
import Termsandconditions from './components/terms&conditions'
import Privacypolicy from './components/privacypolicy'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import Mainblogs from './components/mainBlogs'
import Blogsdetail from './components/blodDetails'
import Careers from './components/careers'
MouseFollower.registerGSAP(gsap)

function App() {
  // const [loading, setLoading] = useState(true)
  const location = useLocation()
  const spinner = document.getElementById('pre-loader')

  const cursor = new MouseFollower()
  useEffect(() => {
    ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 2,
      smoothTouch: 0.1,
      effects: true
    })

    const elements1 = document.querySelectorAll('.card-img-top')
    elements1.forEach((element) => {
      element.addEventListener('mouseenter', () => {
        cursor.setText('')
      })
      element.addEventListener('mouseleave', () => {
        cursor.removeText()
      })
    })

    const elements2 = document.querySelectorAll('.blogcovers')
    console.log(elements2)
    elements2.forEach((element) => {
      element.addEventListener('mouseenter', () => {
        cursor.setText('EXPLORE')
      })
      element.addEventListener('mouseleave', () => {
        cursor.removeText()
      })
    })
  })

  // if (spinner) {
  jQuery(document).ready(function () {
    setTimeout(() => {
      jQuery(spinner).slideUp(1200)
    }, 1000)
    // setLoading(false)
  })
  // setTimeout(() => {
  // spinner.style.display = 'none'
  // setLoading(false)
  // }, 3000)
  // }

  // var cursor = document.querySelector('.cursor');

  return (
    <div className="App">
      <a id="back-to-top" href="#" className="back-to-top" role="button">
        <p className="scrollbtnp">Up</p>
      </a>
      <AnimatePresence mode="wait" initial={false} exitBeforeEnter>
        <Helmet>
          <title>Constantine-Pr</title>
          <meta name="description" content="Get info about ConstantinePR" />
          <meta
            name="keywords"
            content="digital marketing agency, digital marketing agency pakistan, digital advertising agency, digital advertising agencies near me, branding agencies, branding and marketing agency, digital strategy, web development, app development, media production, event management, rebranding, brand management, social media marketing, corporate branding, corporate marketing strategy, print media, digital media        "
          />
        </Helmet>
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Home />} />
          <Route path="/work" element={<Allblogs />} />
          <Route path="/about-us" element={<Aboutus />} />
          <Route path="/terms&conditions" element={<Termsandconditions />} />
          <Route path="/contact" element={<Email />} />
          <Route path="/privacypolicy" element={<Privacypolicy />} />
          <Route path="/blogs" element={<Mainblogs />} />
          <Route path='/careers' element={<Careers />} />
          <Route path="/allblogs/:id" element={<Blogsdetail />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}
export default App

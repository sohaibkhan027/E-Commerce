import React from 'react'
import "./About.css"
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className="about-container">
    <header>
        <h1>About Us</h1>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    </header>
    <main>
        <section className="about-content">
            <h2>Our Story</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id felis diam. Vestibulum convallis urna ut eleifend. Integer ultrices at leo ut consectetur. Phasellus suscipit condimentum nunc, a viverra nunc.</p>
        </section>
    </main>
</div>

  )
}

export default About
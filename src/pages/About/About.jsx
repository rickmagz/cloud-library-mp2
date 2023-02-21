import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <p className='fs-17'>Searching a book online before reading it can provide valuable information about the book that can help you make an informed decision about whether to read it. Online book searches can provide information about the author, the book's genre, publication date, and reader reviews.</p>
            <p className='fs-17'>By checking reviews and ratings from other readers, you can get an idea of whether the book is highly regarded and worth investing your time in. You can also often read a synopsis or excerpt from the book online to get a sense of the writing style, tone, and themes.</p>
            <p className='fs-17'>Online book searches can also help you find the best price for the book, whether you're looking to purchase a physical copy or an electronic version. Overall, searching for a book online before reading it can help you make a more informed decision about what to read next and enhance your reading experience.</p>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About

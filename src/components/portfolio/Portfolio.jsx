import React from 'react'
import "./Portfolio.css"
// import A2 from '../../assets/a2.jpg'
import P1 from '../../assets/P1.jpg'
import P2 from '../../assets/P2.jpg'
import P3 from '../../assets/P3.jpg'
import P4 from '../../assets/P4.png'
import P5 from '../../assets/P5.png'
import P6 from '../../assets/P6.png'
import D1 from '../../assets/D1.jpg'
import D2 from '../../assets/D2.png'
import D4 from '../../assets/D4.png'
import D5 from '../../assets/D5.jpg'

const Portfolio = () => {
    const data=[
      {
        id:1,
        image:P1,
        title:"mobile app with flutter for Student from grade 1-8 textbook",
        github:'https://github.com/alemude/books_prim.git',
        demo:D1
      },
      {
        id:2,
        image:P2,
        title:"mobile app with flutter for hotels to order food and drink online",
        github:'https://github.com/alemude/food_memu1' ,
        demo:D2
      },
      {
        id:3,
        image:P3,
        title:"Court Management system with HTML CSS PHP and SQLI. ",
        github:'https://github.com/alemude/federal_court' ,
        demo:P3
      },
      {
        id:4,
        image:D4,
        title:"House marketing System with MERN(MongoBD, Expressjs,Reactjs and Nodejs)",
        github:'https://github.com/alemude/house-market' ,
        demo:P4
      },
      
        {
          id:5,
          image:P5,
          title:"Job searching system with MERN(MongoBD, Expressjs,Reactjs and Nodejs)",
          github:'https://github.com/alemude/Jobify' ,
          demo:D5
        },
        {
          id:6,
          image:P6,
          title:"Simple feedback  System with MERN(MongoBD, Expressjs,Reactjs and Nodejs)",
          github:'https://github.com/alemude/books_prim.git' ,
          demo:P6
        },
    ]
  return (
    <section id='portfolio'>
    <h5 className='padding-left'>My Recent Works</h5>
    <h2 className='padding-left'>Portfolio</h2>
    <div className="container portfolio_container">
    {data.map(({id,image,title,github,demo})=>{
return(
  <article key={id} className='portfolio_item'>
<div className="portfolio_item-image">
<img src={image} alt={title}/>
</div>
<h3>{title}</h3>
<div className="portfolio_item-cta">
<a href={github} className='btn'>Github</a>
<a href={demo} className='btn-primary' target='_blank'>Live Demo</a>
</div></article>
)
    })}
    </div>
    </section>
  )
}

export default Portfolio

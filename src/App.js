import './App.scss';
import image_john from './images/image-john.jpg';
import image_tanya from './images/image-tanya.jpg';
import next from './images/icon-next.svg';
import prev from './images/icon-prev.svg';
import React, {useState} from 'react';

const testimonials=[
  {
    img: image_tanya,
    quote: "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
    name:"Tanya Sinclair",
    occupation:"UX Engineer"
  },
  {
    img: image_john,
    quote: "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
    name:"John Tarkpor",
    occupation:"Junior Front-end Developer"
  }
];

function App() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const displayedTestimonial = testimonials[currentTestimonial];
  const altText= `${displayedTestimonial.name}'s image`;
  return (
    <div className="App">
      <main className="container">
        <div className="container__text">
          <blockquote key={"b"+currentTestimonial}>{displayedTestimonial.quote}</blockquote>
          <cite key={"c"+currentTestimonial}>
            <span>{displayedTestimonial.name}</span>
            <span>{displayedTestimonial.occupation}</span>
          </cite>
        </div>
        <div className="container__img">
              <img key={"i"+currentTestimonial} className="testimonial__img" src={displayedTestimonial.img} alt={altText}></img>
          <div className='buttonSet'>
              <button className="prev" onClick={()=>onClick('prev')} title="previous"><img src={prev} alt="previous button"></img></button>
              <button className="next" onClick={()=>onClick('next')} title="next"><img src={next} alt="next button"></img></button>
          </div>
        </div>
      </main>
    </div>
  );
  function onClick(action){
    if (action==='prev'){
      currentTestimonial===0? setCurrentTestimonial(testimonials.length-1): setCurrentTestimonial(prev=>prev-1);
    }else if (action==='next'){
      currentTestimonial===testimonials.length-1? setCurrentTestimonial(0): setCurrentTestimonial(prev=>prev+1);
    }else{
      console.error('Wrong/missing action');
    }
  }
}

export default App;

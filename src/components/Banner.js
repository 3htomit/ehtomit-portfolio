import demo_img from '../assets/demo_day.jpg';
import '../styles/components/Banner.scss';

function Banner() {
  return (
    <div className='banner' style={{backgroundImage: `url(${demo_img})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <button type='button' className='prev-btn'>previous</button>
      <button type='button' className='next-btn'>next</button>
    </div>
  );
}

export default Banner;

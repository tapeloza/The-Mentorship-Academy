import { Link } from 'react-router-dom';
import image from '../assets/images10.jpg';
import thuli from '../assets/thuli.jpeg';
import norah from '../assets/norah.jpeg';
import fatima from '../assets/fatima.jpeg';
import gugu from '../assets/gugu.jpeg';
import shanthini from '../assets/shanthini.jpeg';
import maureen from '../assets/maureen.jpeg';
import marlene from '../assets/marlene.jpeg';
import mashudu from '../assets/mashudu.jpeg';
import thando from '../assets/thando.jpeg';
import emanuel from '../assets/emanuel.jpeg';

const mentors = [
  ['Thuli Madonsela', thuli], ['Norah Fakude', norah], ['Fatima Joyce Parker', fatima], ['Gugu Sema', gugu],
  ['Shanthini Naidoo', shanthini], ['Maureen Mboshane', maureen], ['Marlene Le Roux', marlene], ['Mashudu Ndou', mashudu],
  ['Thando Hlophe', thando], ['Emanuel Carvalho', emanuel],
];

export function Mentors() {
  return <>
    <section className="page-hero"><p className="eyebrow">Share what you know</p><h1>Great leaders<br /><em>make room.</em></h1><p>Our mentors are generous professionals, entrepreneurs and changemakers who believe that their experience can open a door for someone else.</p></section>
    <section className="mentor-directory"><div className="mentor-directory-heading"><p className="eyebrow">Meet the mentors</p><h2>Experience, shared generously.</h2></div><div className="mentor-grid">{mentors.map(([name, portrait]) => <article className="mentor-card" key={name}><img src={portrait} alt={name} /><h3>{name}</h3></article>)}</div></section>
    <section className="split-section reverse"><div><p className="eyebrow">Why mentor?</p><h2>Your perspective can change a trajectory.</h2><p>Mentoring is not about having every answer. It is about listening well, asking the questions that matter and helping a young woman recognise her own capability.</p><div className="check-list"><p>Give back with purpose</p><p>Grow your leadership and coaching skills</p><p>Join a thoughtful professional network</p></div><Link to="/contact" className="button">Become a mentor →</Link></div><img src={image} alt="A mentor speaking with a young professional" /></section>
    <section className="quote-section">“When women support women, whole communities move forward.”</section>
  </>;
}

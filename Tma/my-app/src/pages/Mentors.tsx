import { Link } from 'react-router-dom';
import image from '../assets/images10.jpg';
import { academyIcon, mentors } from '../data/academyProfiles';

export function Mentors() {
  return <>
    <section className="page-hero"><p className="eyebrow">Share what you know</p><h1>Great leaders<br /><em>make room.</em></h1><p>Our mentors are generous professionals, entrepreneurs and changemakers who believe that their experience can open a door for someone else.</p></section>
    <section className="mentor-directory"><div className="mentor-directory-heading"><p className="eyebrow">Meet the mentors</p><h2>Experience, shared generously.</h2><p>Explore each mentor’s profile and professional story.</p></div><div className="mentor-grid">{mentors.map((mentor) => <Link className="mentor-card" key={mentor.slug} to={`/our-mentors/${mentor.slug}`}><img className={mentor.portrait ? '' : 'profile-placeholder'} src={mentor.portrait || academyIcon} alt={mentor.portrait ? mentor.name : 'The Mentorship Academy'} /><h3>{mentor.name}</h3><span>View biography →</span></Link>)}</div></section>
    <section className="directory-link-band"><div><p className="eyebrow">Growing together</p><h2>Meet the mentees.</h2><p>Learn about the professionals building the next chapter of leadership.</p></div><Link to="/mentees" className="button">Explore mentees →</Link></section>
    <section className="split-section reverse"><div><p className="eyebrow">Why mentor?</p><h2>Your perspective can change a trajectory.</h2><p>Mentoring is not about having every answer. It is about listening well, asking the questions that matter and helping a young woman recognise her own capability.</p><div className="check-list"><p>Give back with purpose</p><p>Grow your leadership and coaching skills</p><p>Join a thoughtful professional network</p></div><Link to="/contact?interest=Becoming%20a%20mentor" className="button">Become a mentor →</Link></div><img src={image} alt="A mentor speaking with a young professional" /></section>
    <section className="quote-section">“When women support women, whole communities move forward.”</section>
  </>;
}

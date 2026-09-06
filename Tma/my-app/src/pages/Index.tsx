import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import applyImage from '../assets/bento-mentorship.png';
import loginImage from '../assets/images1.jpg';
import storyImage from '../assets/images4.jpg';
import newsImage from '../assets/images7.jpg';
import eventsImage from '../assets/images2.jpg';
import mentorImage from '../assets/images10.jpg';
import highlightsImage from '../assets/images11.jpg';
import contactImage from '../assets/images12.jpg';

const tiles = [
  ['bento-apply', '/contact', 'Apply Now', 'Start your leadership journey', applyImage],
  ['bento-login', '/contact', 'Members Login', 'Your Academy space', loginImage],
  ['bento-story', '/our-story', 'Our Story', 'Why we do this work', storyImage],
  ['bento-news', '/news', 'News', 'Stories that move us forward', newsImage],
  ['bento-events', '/events', 'Upcoming Events', 'Gather. Learn. Connect.', eventsImage],
  ['bento-mentor', '/our-mentors', 'Become a mentor', 'Pass your experience forward', mentorImage],
  ['bento-highlights', '/events', 'Event Highlights', 'Moments from our community', highlightsImage],
  ['bento-contact', '/contact', 'Contact Us', 'There is a seat for you here', contactImage],
];

export function Index() {
  return <>
    <Hero />
    <section className="academy-bento"><div className="bento-heading"><p className="eyebrow">Your place in the Academy</p><h2>More than mentorship.<br /><em>A movement forward.</em></h2></div><div className="bento-grid bento-grid-complete">
      {tiles.map(([className, to, title, description, image]) => <Link className={`bento-tile ${className}`} to={to} key={title}><img src={image} alt="" /><span className="bento-image-overlay" /><div><p>{description}</p><h3>{title}</h3><b>Discover <i>→</i></b></div></Link>)}
    </div></section>
  </>;
}

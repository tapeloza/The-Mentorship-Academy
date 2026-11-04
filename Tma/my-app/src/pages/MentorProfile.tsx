import { Link, useParams } from 'react-router-dom';
import { academyIcon, mentors } from '../data/academyProfiles';

export function MentorProfile() {
  const { slug } = useParams();
  const mentor = mentors.find((item) => item.slug === slug);

  if (!mentor) return <section className="profile-not-found"><h1>Profile not found.</h1><Link to="/our-mentors" className="button">Back to mentors</Link></section>;

  return <section className="profile-page">
    <Link to="/our-mentors" className="back-link">← All mentors</Link>
    <div className="profile-layout"><img className={mentor.portrait ? '' : 'profile-placeholder'} src={mentor.portrait || academyIcon} alt={mentor.portrait ? mentor.name : 'The Mentorship Academy'} /><div><p className="eyebrow">Mentor profile</p><h1>{mentor.name}</h1><p className="profile-biography">{mentor.biography}</p><Link to="/contact?interest=Becoming%20a%20mentor" className="button">Become a mentor →</Link></div></div>
  </section>;
}

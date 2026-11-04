import { Link, useParams } from 'react-router-dom';
import { academyIcon, mentees, mentors } from '../data/academyProfiles';

export function MenteeProfile() {
  const { slug } = useParams();
  const mentee = mentees.find((item) => item.slug === slug);

  if (!mentee) return <section className="profile-not-found"><h1>Profile not found.</h1><Link to="/mentees" className="button">Back to mentees</Link></section>;

  const mentor = mentors.find((item) => item.slug === mentee.mentorSlug);
  return <section className="profile-page">
    <Link to="/mentees" className="back-link">← All mentees</Link>
    <div className="profile-layout"><img className={mentee.portrait ? '' : 'profile-placeholder'} src={mentee.portrait || academyIcon} alt={mentee.portrait ? mentee.name : 'The Mentorship Academy'} /><div><p className="eyebrow">Mentee profile</p><h1>{mentee.name}</h1><p className="profile-biography">{mentee.biography}</p><div className="assigned-mentor"><p className="eyebrow">Assigned mentor</p><Link to={`/our-mentors/${mentee.mentorSlug}`}>{mentor?.name || 'Meet the mentor'} →</Link></div></div></div>
  </section>;
}

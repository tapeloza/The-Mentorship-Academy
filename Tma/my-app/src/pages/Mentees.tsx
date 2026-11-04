import { Link } from 'react-router-dom';
import { academyIcon, mentees, mentors } from '../data/academyProfiles';

export function Mentees() {
  return <>
    <section className="page-hero centered"><p className="eyebrow">The next generation</p><h1>Meet the women<br /><em>moving forward.</em></h1><p>Our mentees are ambitious professionals building confidence, clarity and connections across Africa.</p></section>
    <section className="mentee-directory"><div className="mentor-directory-heading"><p className="eyebrow">Mentee profiles</p><h2>Purpose, potential and possibility.</h2><p>Open a profile to read each mentee’s full biography and meet their assigned mentor.</p></div><div className="mentee-grid">{mentees.map((mentee) => { const mentor = mentors.find((item) => item.slug === mentee.mentorSlug); return <article className="mentee-card" key={mentee.slug}><Link className="mentee-image-link" to={`/mentees/${mentee.slug}`}><img className={mentee.portrait ? '' : 'profile-placeholder'} src={mentee.portrait || academyIcon} alt={mentee.portrait ? mentee.name : 'The Mentorship Academy'} /></Link><div><p className="eyebrow">Mentee</p><h2><Link to={`/mentees/${mentee.slug}`}>{mentee.name}</Link></h2><p>Assigned mentor: <Link className="mentor-text-link" to={`/our-mentors/${mentee.mentorSlug}`}>{mentor?.name || 'View mentor'}</Link></p><Link className="profile-link" to={`/mentees/${mentee.slug}`}>Read full biography →</Link></div></article>; })}</div></section>
  </>;
}

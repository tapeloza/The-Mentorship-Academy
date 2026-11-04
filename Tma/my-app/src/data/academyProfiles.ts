import academyIcon from '../assets/favicon.png';
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
import portiaMentor from '../assets/portia-mentor.png';
import ayofemi from '../assets/ayofemi.png';
import jeremiah from '../assets/jeremiah.png';
import sezanele from '../assets/sezanele.png';
import michelle from '../assets/michelle.png';
import portiaMentee from '../assets/portia-mentee.png';
import oluwabusayo from '../assets/oluwabusayo.png';
import stellamaris from '../assets/stellamaris.png';
import sheetal from '../assets/sheetal.png';
import esther from '../assets/esther.png';
import eve from '../assets/eve.png';
import jasmine from '../assets/jasmine.png';
import charlotte from '../assets/charlotte.png';
import olawunmi from '../assets/olawunmi.png';
import angelique from '../assets/angelique.png';

export type PersonProfile = {
  name: string;
  slug: string;
  biography: string;
  portrait?: string;
};

export type MenteeProfile = PersonProfile & {
  mentorSlug: string;
};

const biographyPending = 'A full biography will be added soon.';

export const mentors: PersonProfile[] = [
  { name: 'Thuli Madonsela', slug: 'thuli-madonsela', biography: biographyPending, portrait: thuli },
  { name: 'Norah Fakude', slug: 'norah-fakude', biography: biographyPending, portrait: norah },
  { name: 'Fatima Joyce Parker', slug: 'fatima-joyce-parker', biography: biographyPending, portrait: fatima },
  { name: 'Gugu Sema', slug: 'gugu-sema', biography: biographyPending, portrait: gugu },
  { name: 'Shanthini Naidoo', slug: 'shanthini-naidoo', biography: biographyPending, portrait: shanthini },
  { name: 'Maureen Mboshane', slug: 'maureen-mboshane', biography: biographyPending, portrait: maureen },
  { name: 'Marlene Le Roux', slug: 'marlene-le-roux', biography: biographyPending, portrait: marlene },
  { name: 'Mashudu Ndou', slug: 'mashudu-ndou', biography: biographyPending, portrait: mashudu },
  { name: 'Thando Hlophe', slug: 'thando-hlophe', biography: biographyPending, portrait: thando },
  { name: 'Emanuel Carvalho', slug: 'emanuel-carvalho', biography: biographyPending, portrait: emanuel },
  {
    name: 'Portia Gaone Diteko', slug: 'portia-gaone-diteko', portrait: portiaMentor,
    biography: 'Portia Gaone Diteko is a responsible gambling specialist with experience in regulatory compliance, player protection, addiction science and programme management. As Botswana’s first Responsible Gambling Manager, she has played a key role in developing responsible gambling frameworks, compliance systems and player-protection initiatives. Her expertise includes risk-based compliance, player monitoring, early intervention, case management, policy development and stakeholder engagement. Portia also contributes to training and capacity-building initiatives within the industry. With an MBA and additional expertise in psychology, addiction science and data analysis, she is passionate about advancing responsible gambling practices and developing her leadership and mentoring capabilities.',
  },
  {
    name: 'Ayofemi Panshack Akinlaja', slug: 'ayofemi-panshack-akinlaja', portrait: ayofemi,
    biography: 'Ayofemi Panshack Akinlaja is the Chief Executive Officer of Shacks Evolution Studios, an African iGaming studio based in Nigeria. He leads the development of multimedia projects, youth-focused digital platforms and technology-driven content solutions. His work supports emerging talent and encourages collaboration across gaming, media and technology. Through his leadership, Ayofemi aims to contribute to Africa’s growing digital innovation ecosystem and create opportunities for talent and businesses across the continent.',
  },
  {
    name: 'Jeremiah', slug: 'jeremiah', portrait: jeremiah,
    biography: 'Jeremiah is an iGaming executive and marketing and investment professional working across Africa’s B2B and B2C gaming ecosystem. He is the CEO of iGaming AFRIKA and co-founder of iGaming Consult Africa and the iGaming AFRIKA Summit. His experience spans advertising, marketing and startup consulting for African gaming businesses. He is passionate about investment, entrepreneurship and the role of digital innovation in creating economic opportunities across the continent, including the potential of fintech and cryptocurrency to support emerging African markets.',
  },
  {
    name: 'Sezanele Zondi', slug: 'sezanele-zondi', portrait: sezanele,
    biography: 'Sezanele Zondi is a business mentor, life coach, author, entrepreneur and inspirational speaker with over 20 years of experience in enterprise development, development finance, marketing, leadership and entrepreneurship. Her professional background includes work with Land Bank and Absa Enterprise Development Centre, as well as her current work with MEGA. She holds an MBA and several additional qualifications in marketing, executive leadership, management and project management. As Founder and CEO of SEZ Foundation NPO, she supports entrepreneurship and professional development. She is also the author of Mastering Your Business Pitch.',
  },
  { name: 'Simon Munsamy', slug: 'simon-munsamy', biography: biographyPending },
  {
    name: 'Michelle Michaels', slug: 'michelle-michaels', portrait: michelle,
    biography: 'Michelle Michaels is an iGaming executive with more than 24 years of industry experience spanning operational leadership, strategic business management, regulatory compliance, certification and project management. As Operations Director at Ready Play Gaming, she brings experience across programme management, compliance, certification, internal gaming operations and sales. She combines operational expertise with commercial insight to align business objectives, regulatory requirements and day-to-day delivery. Michelle is also passionate about team development and building efficient, sustainable operations that support long-term business growth.',
  },
  { name: 'Dr Carol Nkambule', slug: 'dr-carol-nkambule', biography: biographyPending },
  { name: 'David Moshi Inganga', slug: 'david-moshi-inganga', biography: biographyPending },
  { name: 'Dr Lindsay Peterson', slug: 'dr-lindsay-peterson', biography: biographyPending },
  { name: 'Dianese Chinappen', slug: 'dianese-chinappen', biography: biographyPending },
];

export const mentees: MenteeProfile[] = [
  {
    name: 'Portia Gaone Diteko', slug: 'portia-gaone-diteko-mentee', mentorSlug: 'portia-gaone-diteko', portrait: portiaMentee,
    biography: 'Portia Gaone Diteko is a responsible gambling specialist with experience in regulatory compliance, player protection, addiction science and programme management. As Botswana’s first Responsible Gambling Manager, she has played a key role in developing responsible gambling frameworks, compliance systems and player-protection initiatives. Her expertise includes risk-based compliance, player monitoring, early intervention, case management, policy development and stakeholder engagement. Portia also contributes to training and capacity-building initiatives within the industry. With an MBA and additional expertise in psychology, addiction science and data analysis, she is passionate about advancing responsible gambling practices and developing her leadership and mentoring capabilities.',
  },
  {
    name: 'Oluwabusayo Ayinde', slug: 'oluwabusayo-ayinde', mentorSlug: 'ayofemi-panshack-akinlaja', portrait: oluwabusayo,
    biography: 'Oluwabusayo Ayinde is a lawyer and compliance professional who helps businesses navigate regulatory requirements while supporting sustainable growth. As Head of Compliance and Business Development at Aropsaid Gaming Advisory, she provides regulatory, business and legal advisory services to gaming companies, fintech businesses and startups. A Certified Data Protection Officer, she brings expertise in data privacy, anti-money laundering and counter-terrorist financing frameworks, licensing and legal risk management. She focuses on developing practical compliance systems that protect businesses and build trust with stakeholders, regulators, customers and investors.',
  },
  {
    name: 'Stellamaris Thuku', slug: 'stellamaris-thuku', mentorSlug: 'ayofemi-panshack-akinlaja', portrait: stellamaris,
    biography: 'Stellamaris Thuku is a marketing, communications and digital strategy professional with over a decade of experience across agencies, technology and marketing consultancy. Her experience includes working with brands and organisations such as Safaricom, Unilever, Opera, Ad Dynamo, HAVAS Media and Lotto Kenya. She brings expertise in brand positioning, audience insights, content strategy, digital media and market launches, combining storytelling with commercial strategy to drive business growth. Stellamaris holds a master’s degree in Film and Television Production from Bournemouth University and a bachelor’s degree in Journalism and Mass Communication from the University of Nairobi.',
  },
  {
    name: 'Sheetal Ramnarain', slug: 'sheetal-ramnarain', mentorSlug: 'jeremiah', portrait: sheetal,
    biography: 'Sheetal Ramnarain is a digital marketing leader with more than 12 years of experience in the iGaming industry. As Head of Online Marketing at Bettabets, a position she has held since January 2023, she oversees customer relationship management, product marketing, website and customer experience, digital and social media, and aspects of VIP and affiliate marketing. She specialises in developing data-driven strategies that support customer acquisition, engagement, retention and commercial growth within South Africa’s competitive iGaming market.',
  },
  { name: 'Mercy Modest', slug: 'mercy-modest', mentorSlug: 'sezanele-zondi', biography: biographyPending },
  { name: 'Rebecca', slug: 'rebecca', mentorSlug: 'sezanele-zondi', biography: biographyPending },
  {
    name: 'Esther Pillay', slug: 'esther-pillay', mentorSlug: 'simon-munsamy', portrait: esther,
    biography: 'Esther Pillay is a finance professional with experience in South Africa’s gaming and betting industry, particularly in treasury management, auditing, financial controls and operations. She values accountability, teamwork, problem-solving and continuous improvement. Esther is passionate about lifelong learning, strengthening her leadership capabilities and helping create opportunities for women to thrive in the workplace. Through her participation in the Women in Gambling Mentorship Programme, she aims to build meaningful professional connections, exchange knowledge and contribute to the development of future women leaders.',
  },
  {
    name: 'Eve Mumbi Kiio', slug: 'eve-mumbi-kiio', mentorSlug: 'simon-munsamy', portrait: eve,
    biography: 'Eve Mumbi Kiio is a business development and strategic partnerships professional with over 15 years of experience in commercial growth, enterprise sales, relationship management and market expansion. Her background spans fintech, telecommunications, technology, crowdfunding and emerging digital markets. She specialises in B2B sales, go-to-market strategy, stakeholder engagement and cross-border partnerships across African markets. Passionate about technology and commercial innovation, Eve is interested in the growth of the iGaming industry and in building partnerships that expand opportunities for women across Africa’s digital economy.',
  },
  {
    name: 'Jasmine Ambiyo Ludwaro', slug: 'jasmine-ambiyo-ludwaro', mentorSlug: 'michelle-michaels', portrait: jasmine,
    biography: 'Jasmine Ambiyo Ludwaro is a payment operations and technical support specialist based in Nairobi, Kenya, with experience managing payment integrations and troubleshooting technical issues across African and international markets. At Centiwise, she supports integrations across 49 payment service providers in 22 markets, working on transaction monitoring, reconciliation, API troubleshooting, merchant onboarding and incident resolution. She has also supported ICT operations at RefuSHE Kenya. Alongside her professional work, Jasmine is pursuing a BSc in Applied Computing at KCA University and is interested in progressing into payment operations and technical leadership.',
  },
  { name: 'Melinne Nathram', slug: 'melinne-nathram', mentorSlug: 'michelle-michaels', biography: biographyPending },
  {
    name: 'Charlotte Mkinga', slug: 'charlotte-mkinga', mentorSlug: 'dr-carol-nkambule', portrait: charlotte,
    biography: 'Charlotte Mkinga is a customer support excellence professional in the iGaming industry, with over five years of experience in quality assurance, team development and operational improvement. She is interested in strengthening customer experience through innovation, including the use of artificial intelligence, and in promoting financial education to empower young women. Charlotte is committed to developing her professional capabilities and contributing to more effective, customer-focused operations.',
  },
  {
    name: 'Olawunmi Onabajo', slug: 'olawunmi-onabajo', mentorSlug: 'dr-carol-nkambule', portrait: olawunmi,
    biography: 'Olawunmi Onabajo is a business operations and market-entry leader based in Lagos, Nigeria, with over 15 years of experience across operations, business development and data protection. At BetConstruct, she leads operations and business development across Africa. Previously, she served as Chief Operating Officer at WhoGoHost, helping scale the company from two to more than 70 employees, and as Head of Business Operations in Nigeria at Evolution. She holds a BEng in Information and Communication Technology from Covenant University and is focused on advancing regional executive leadership across Africa’s gaming and technology sectors.',
  },
  { name: 'Siba Nombewu', slug: 'siba-nombewu', mentorSlug: 'maureen-mboshane', biography: biographyPending },
  {
    name: 'Angelique Rodrigues', slug: 'angelique-rodrigues', mentorSlug: 'david-moshi-inganga', portrait: angelique,
    biography: 'Angelique Rodrigues is a marketing professional with over a decade of experience across brand, media, digital and social marketing. Since entering the iGaming industry in 2022, she has focused on integrated marketing strategies that strengthen brand awareness, customer acquisition and engagement. As Brand Manager: Media at Virgin Bet South Africa, she leads media strategy across paid, owned and earned channels and provides strategic oversight of social media. Her approach combines creativity, consumer insight and data-driven decision-making to deliver measurable business results.',
  },
  { name: 'Tebogo Manaka', slug: 'tebogo-manaka', mentorSlug: 'david-moshi-inganga', biography: biographyPending },
  { name: 'Nicole De Reuck', slug: 'nicole-de-reuck', mentorSlug: 'dr-lindsay-peterson', biography: biographyPending },
  { name: 'Alexander Charissa', slug: 'alexander-charissa', mentorSlug: 'dianese-chinappen', biography: biographyPending },
];

export { academyIcon };

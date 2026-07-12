-- Seed the CMS with the current site content. Run once in the SQL Editor.
insert into hero_content (id, eyebrow, headline, subheadline, primary_cta_label, primary_cta_href, secondary_cta_label, secondary_cta_href)
values (1, 'Human Centric Strategist',
  'Humanising Digital Interactions Through Real-World Insight.',
  'I believe that the best digital marketing is rooted in a deep understanding of the customer, a skill I honed during my years in fast-paced hospitality. I create campaigns that don''t just reach audiences; they resonate with them.',
  'View My Work', '#work', 'Download CV', '/cv.pdf')
on conflict (id) do update set eyebrow = excluded.eyebrow, headline = excluded.headline, subheadline = excluded.subheadline;

insert into timeline_entries (year, title, description, display_order) values
('2014', 'Hospitality Foundations', 'I started in guest-facing roles and mastered the art of clear communication and rapid adaptability. I learned how to anticipate needs and deliver exceptional experiences.', 1),
('2018', 'Operations & Team Leadership', 'I moved into CRM, supply chain coordination and team leadership, turning guest feedback into real operational improvements.', 2),
('2023', 'The Digital Pivot', 'I started asking why customers behaved the way they did, not just how to serve them. That question led me straight to marketing and analytics.', 3),
('2024', 'Google Certified', 'I dived deep into the digital landscape through the Google Digital Marketing & E-Commerce Certification, covering SEO, analytics, email and social media.', 4),
('Now', 'Ready for the Next Chapter', 'I''m currently seeking an entry-level role where I can apply my background in customer insights to create high-impact, scalable marketing campaigns.', 5);

insert into experience_entries (company, role, start_date, end_date, description, transferable_skills, display_order) values
('Luxury Hospitality Group', 'Guest Experience Manager', '2020', 'Present', 'I owned the end-to-end guest journey for a premium property, using feedback data to drive service and operational improvements.', array['Customer Insight','CRM','Performance Improvement','Stakeholder Management'], 1),
('Luxury Hospitality Group', 'Front of House Supervisor', '2017', '2020', 'I trained and led a service team, standardised communication and turned recurring issues into fixed processes, while managing supply chain coordination.', array['Team Leadership','Supply Chain Coordination','Communication','Problem Solving'], 2),
('Boutique Hotel', 'Guest Relations Associate', '2014', '2017', 'As first-line guest contact, I built the instinct for reading needs quickly and resolving issues before they escalated. Success lies in the details.', array['Operational Excellence','Adaptability'], 3);

insert into education_entries (institution, qualification, dates, description, display_order) values
('Google', 'Digital Marketing & E-Commerce Professional Certificate', '2024', 'SEO, SEM, analytics, email marketing, social media and e-commerce fundamentals.', 1),
('University', 'BA (Hons) Global Business, 2.1', '2014', 'Core business strategy, marketing principles and international commerce.', 2),
('College', 'HND International Travel & Tourism Management', '2012', 'Foundations in service operations, customer psychology and hospitality management.', 3);

insert into certifications (name, provider, issue_date, credential_url, display_order) values
('Digital Marketing & E-Commerce Professional Certificate', 'Google', '2024', '#', 1),
('Google Analytics Certification', 'Google', '2024', '#', 2),
('Fundamentals of Digital Marketing', 'Google', '2023', '#', 3);

import React from 'react';
import classNames from 'classnames';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Background from './BackgroundSection';
import TeamMembersBackground from './TeamMembersImage';
import styles from './index.module.scss';
import TeamMemberDetail from './TeamMemberDetail';

const About = () => {
  const data = useStaticQuery(graphql`
    query TeamMembersData {
      allContentfulTeamMembers {
        totalCount
        nodes {
          id
          name
          designation
          selfDescription {
            id
            selfDescription
          }
          heroImage {
            id
            fluid(quality: 80, maxWidth: 400) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  `);
  const { allContentfulTeamMembers } = data;
  const { nodes: teamMembers } = allContentfulTeamMembers;
  return (
    <div className={styles.aboutContainer}>
      <Background className={styles.aboutPageBackground} content="ABOUT" />
      <section className={classNames(styles.description)}>
        <p className={styles.mainDescription}>
          Televenture is an Oslo based Nordic Venture Capital firm and was established in 1993 by Rune Rinnan. During
          the period from 1993-2010, Televenture managed 8 Telenor Venture funds. In 2010, Televenture and our
          Technology Transfer Office (TTO) partners in Oslo, Bergen, and Trondheim, established Norsk
          Innovasjonskapital.
        </p>
        <p>
          Today, Televenture manages 4 Norsk Innovasjonskapital funds&nbsp;
          <Link to="/Funds">(NIK I-IV)</Link>&nbsp; with a primary investment focus within Industrials, Software, Oil &
          Gas, Marine, and Consumer sectors. Televenture’s management team have both long venture capital and general
          industry experience both domestically and internationally, including a number of financial transactions such
          as stock exchange listings and M&As.
        </p>
        <p>
          The team members hold diversified competence and experience from a broad range of business areas. Special
          competence areas include oil and gas, energy, IT and telecom. The team includes both entrepreneurs with proven
          success, previous senior business leaders and persons with significant international operational experience,
          including work in the US, and Asia the Middle-East.
        </p>
      </section>
      <section className={styles.teamWrapper}>
        {teamMembers.map((teamData, index) => (
          <TeamMemberDetail key={`team-member-${teamData.id}`} index={index} {...teamData} />
        ))}
      </section>
      <TeamMembersBackground className={styles.teamMembersBackground}>
        <div className="imageOverlay" />
      </TeamMembersBackground>
    </div>
  );
};

About.displayName = 'AboutSection';
export default About;

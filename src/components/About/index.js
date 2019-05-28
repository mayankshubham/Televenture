import React from 'react';
import classNames from 'classnames';
import Plx from 'react-plx';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { Parallax } from 'react-scroll-parallax';
import Background from './BackgroundSection';
import TeamMembersBackground from './TeamMembersImage';
import styles from './index.module.scss';
import TeamMemberDetail from './TeamMemberDetail';

// const parallaxData = [
//   {
//     start: 0,
//     end: 500,
//     properties: [
//       {
//         startValue: 0,
//         endValue: -200,
//         unit: '%',
//         property: 'translateY',
//       },
//     ],
//   },
// ];

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: #d5dee3;
`;

const Description = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 18px;
  line-height: 32px;
  .mainDescription {
    font-weight: bold;
    padding-top: 50px;
  }
  p {
    margin-top: 40px;
    max-width: 840px;
  }

  @media (max-width: 612px) {
    text-align: center;
    margin: 4vw;
  }
`;

const TeamWrapper = styled.section`
  position: relative;
  width: 100%;
  background-color: #010025;
  display: flex;
  flex-direction: column;
  margin-top: 80px;
`;

const About = () => {
  const data = useStaticQuery(graphql`
    query TeamMembersData {
      allContentfulTeamMembers(sort: { fields: [order], order: ASC }) {
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
    <Wrapper>
      <Background content="ABOUT" />
      <Description>
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
      </Description>
      <TeamWrapper>
        {teamMembers.map((teamData, index) => (
          <TeamMemberDetail key={`team-member-${teamData.id}`} index={index} {...teamData} />
        ))}
      </TeamWrapper>
      <div className={styles.teamMembersParallaxBg}>
        <Parallax y={[-60, 50]} tagOuter="figure">
          <TeamMembersBackground className={styles.teamMembersBackground}>
            <div className="imageOverlay" />
          </TeamMembersBackground>
        </Parallax>
      </div>
    </Wrapper>
  );
};

About.displayName = 'AboutSection';
export default About;

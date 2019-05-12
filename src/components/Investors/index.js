import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Background from './BackgroundSection'
import classNames from 'classnames'
import moment from 'moment'
import styles from './index.module.scss'
import InvestorImage from './InvestorImage'

const Investors = () => {
  const [selectedRow, setSelectedRow] = useState('')

  const data = useStaticQuery(graphql`
    query InvestorPageDetails {
      contentfulInvestorsDescription {
        description {
          description
        }
      }
      allContentfulInvestorEvents {
        totalCount
        nodes {
          id
          eventName
          venue
          date
          startTime
          endTime
        }
      }
      contentfulInvestorInquiries {
        name
        designation
        email
      }
    }
  `)
  const {
    contentfulInvestorsDescription,
    allContentfulInvestorEvents,
    contentfulInvestorInquiries,
  } = data
  const { description } = contentfulInvestorsDescription
  const { nodes: tableData } = allContentfulInvestorEvents
  return (
    <div className={styles.investorsContainer}>
      <Background content="INVESTORS" />
      <div className={styles.description}>{description.description}</div>
      <div className={styles.tableInfo}>
        WE LOOK FORWARD TO MEETING INVESTORS AT THE FOLLOWING EVENTS:
      </div>
      <table className={styles.eventsInfoTable}>
        <thead>
          <tr>
            <th>INVESTOR EVENT</th>
            <th>DATE</th>
            <th>VENUE</th>
            <th>TIME</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map(obj => {
            const { eventName, venue, date, startTime, endTime, id } = obj
            return (
              <tr
                className={classNames({
                  [styles.selected]: selectedRow === id,
                })}
                onClick={() => setSelectedRow(id)}
                key={`eventData-${id}`}
              >
                <td>{eventName}</td>
                <td>{moment(date).format('MMMM D, YYYY')}</td>
                <td>{venue}</td>
                <td>{`${startTime} - ${endTime}`}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className={styles.investorQueriesContainer}>
        <div className={styles.box}>
          <InvestorImage className={styles.investorImage} />
          <div className={styles.detailsSection}>
            <div className={styles.header}>INVESTOR INQUIRIES</div>
            <div className={styles.details}>
              Outside the scheduled events, shareholders and other stakeholders
              are welcome to contact&nbsp;
              <a href={`mailto:${contentfulInvestorInquiries.email}`}>
                {contentfulInvestorInquiries.name}
              </a>
              {`, ${
                contentfulInvestorInquiries.designation
              } for any inquiries.`}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Investors.displayName = 'InvestorsSection'
export default Investors

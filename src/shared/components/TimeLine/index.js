import * as React from "react";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  timelineItemClasses,
  TimelineSeparator,
} from "@mui/lab";
import styles from "./TimeLine.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faBuildingColumns,
} from "@fortawesome/free-solid-svg-icons";

export default function TimeLine() {
  return (
    <div className={styles.TimeLine}>
      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
        position="right"
      >
        <TimelineItem>
          <TimelineSeparator>
            <FontAwesomeIcon icon={faBuildingColumns} />
          </TimelineSeparator>
          <TimelineContent>
            <h6> Work Experience</h6>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="grey" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <h1>Crocusoft</h1>
            <h2>Frontend Developer (React js, Javascript,Redux Toolkit)</h2>
            <p>2022 June - Present</p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="grey" />
          </TimelineSeparator>
          <TimelineContent>
            <h1>Freelancer (Upwork)</h1>
            <h2>Frontend Developer</h2>
            <p>2022 Mart - 2022 August</p>
          </TimelineContent>
        </TimelineItem>
      </Timeline>

      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
        position="right"
      >
        <TimelineItem>
          <TimelineSeparator>
            <FontAwesomeIcon icon={faBriefcase} />
          </TimelineSeparator>
          <TimelineContent>
            <h6> Education</h6>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="grey" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <h1>Code Academy</h1>
            <h2>Software Development</h2>
            <p>2021-2022</p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="grey" />
          </TimelineSeparator>
          <TimelineContent>
            <h1>Azerbaijan Technical University</h1>
            <h2>Bachelor Management </h2>
            <p>2016-2020</p>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}

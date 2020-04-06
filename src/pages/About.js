import React, { useState, useEffect } from "react";
import ReactHtmlParser from "react-html-parser";
import { API } from "aws-amplify";
import { listAboutPages } from "../graphql/queries";
import GraceLogo from "../images/luther_rose.png";
import PastorDave from "../images/pastordave.jpg";
import GraceFrontCross from "../images/grace_front_cross_square.jpg";

const initialState = {
  aboutTitle: "About Grace Lutheran Church",
  about:
    "Grace Lutheran Church, located in Long Beach, MS, is a congregation of the Southeastern Synod of the Evangelical Lutheran Church in America, and also a Stephen Ministry church. We invite you to learn more about our congregation, and to join us for worship on Sunday morning. Find out more about the congregation, and feel free to get in touch or join us on Sunday morning!",
  missionTitle: "Mission Statement",
  mission:
    "Christians welcoming and serving The marks of discipleship are to: Pray Daily Worship Weekly Serve your church and community Relate to others in a small group Read the Bible Give a tithe and beyond",
  messageTitle: "A Word From Pastor Dave",
  message: "Coming soon!",
  believeTitle: "What We Believe",
  believe: "Coming soon!",
};

function About() {
  const [aboutData, setAboutData] = useState(initialState);

  useEffect(() => {
    API.graphql({ query: listAboutPages, authMode: "AWS_IAM" }).then(
      (response) => {
        setAboutData(response.data.listAboutPages.items[0]);
      }
    );
  }, []);

  return (
    <>
      <div className="content about-content flip-layout">
        <div className="info-block">
          <div>
            <h2>{aboutData.aboutTitle}</h2>
            {ReactHtmlParser(aboutData.about)}
          </div>
        </div>
        <div className="info-block">
          <div>
            <h2>{aboutData.missionTitle}</h2>
            {ReactHtmlParser(aboutData.mission)}
          </div>
          <img
            className="img-circle img-responsive"
            src={GraceLogo}
            alt="Grace Logo"
          />
        </div>
        <div className="info-block">
          <div>
            <h2>{aboutData.messageTitle}</h2>
            {ReactHtmlParser(aboutData.message)}
          </div>
          <img
            className="img-circle img-responsive"
            src={PastorDave}
            alt="Pastor Dave Parr"
          />
        </div>
        <div className="info-block">
          <div>
            <h2>{aboutData.believeTitle}</h2>
            {ReactHtmlParser(aboutData.believe)}
          </div>
          <img
            className="img-circle img-responsive"
            src={GraceFrontCross}
            alt="Grace Church Cross"
          />
        </div>
      </div>
    </>
  );
}

export default About;

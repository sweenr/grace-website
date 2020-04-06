import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";
import ReactHtmlParser from "react-html-parser";
import { listHomePages } from "../graphql/queries";
import ChurchFront from "../images/grace_wide.jpg";
import ELCALogo from "../images/ELCA_Logo.gif";
import StephenMinistry from "../images/Stephen_Ministry_Logo_Blue.png";

const initialState = {
  worshipTimes: null,
  about:
    "Grace Lutheran Church, located in Long Beach, MS, is a congregation of the Southeastern Synod of the Evangelical Lutheran Church in America, and also a Stephen Ministry church. We invite you to learn more about our congregation, and to join us for worship on Sunday morning. Find out more about the congregation, and feel free to get in touch or join us on Sunday morning!",
  newsHeadline: "Latest News",
  newsBody: "Here's what's happening in the congregation!",
};

function Home() {
  const [homeData, setHomeData] = useState(initialState);

  useEffect(() => {
    API.graphql({ query: listHomePages, authMode: "AWS_IAM" }).then(
      (response) => {
        setHomeData(response.data.listHomePages.items[0]);
      }
    );
  }, []);

  return (
    <>
      <img src={ChurchFront} alt="Front of Grace Lutheran Church" />

      <div className="content home-content">
        <div className="home-info">
          <div className="info-block">
            <h2>About Grace Lutheran Church</h2>
            {ReactHtmlParser(homeData.about)}
          </div>

          <div className="info-block images">
            <a href="http://elca.org" target="_blank" rel="noopener noreferrer">
              <img src={ELCALogo} alt="ELCA Logo" />
            </a>
            <a
              href="http://stevenministry.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={StephenMinistry} alt="Stepen Ministry Logo" />
            </a>
          </div>

          <div className="info-block">
            <h2>{homeData.newsHeadline}</h2>
            {ReactHtmlParser(homeData.newsBody)}
          </div>
        </div>

        <div className="info-block">
          <h2>Worship Times</h2>
          <table className="table-striped">
            <tbody>
              <tr>
                <td>Sunday School (All Ages)</td>
                <td>8:45 AM</td>
              </tr>
              <tr>
                <td>Sunday Worship</td>
                <td>10:00 AM</td>
              </tr>
              <tr>
                <td>Wednesday Holy Communion</td>
                <td>Noon</td>
              </tr>
              <tr>
                <td>Wednesday Evening Service</td>
                <td>7:00 PM</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Home;

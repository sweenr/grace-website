import React from "react";
import StephenMinistryLogo from "../images/Stephen_Ministry_Logo_Black.png";

function StephenMinistry() {
  return (
    <>
      <div className="content about-content flip-layout">
        <div className="info-block">
          <div>
            <h2>What is Stephen Ministry?</h2>
            <p>
              Stephen Ministry provides one-on-one counseling and caring
              ministry to members of the community who are struggling with a
              difficult time in their lives, such as grief, divorce, job loss or
              illness. Stephen Ministers are members of the congregation that
              have been trained to provide high qulity Christian care to people
              goung through tough times. As a Stephen Ministry congregation, we
              are blessed to have a group of people to assist the Pastor in
              helping others in the congregation or community.
            </p>
            <p>
              To learn more about the Stephen Ministry program{" "}
              <a href="http://www.stephenministries.org/stephenministry/default.cfm/917?mnbsm=1">
                visit their website
              </a>
            </p>
          </div>
          <img src={StephenMinistryLogo} alt="Stephen Ministry Logo" />
        </div>

        <div className="info-block">
          <div>
            <h2 className="section-title">Contact a Stephen Minister</h2>
            <p>
              If you want to learn more about Grace's Stephen Ministry program,
              or request a visit from a Stephen Minister, contact one of Grace's
              Stephen Ministers:
            </p>
            <ul>
              <li>
                Pastor Dave Parr: <a href="tel:423-620-1284">423.620.1284</a>
              </li>
              <li>
                JoAnn LaLone: <a href="tel:248-933-1832">248.933.1832</a>
              </li>
              <li>
                Linda Johnson: <a href="tel:504-433-4868">504.433.4768</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default StephenMinistry;

import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import RichTextEditor from "react-rte";
import * as mutations from "../../graphql/mutations";
import * as queries from "../../graphql/queries";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

function HomeEditables() {
  const [homeData, setHomeData] = useState({});
  const [aboutText, setAboutText] = useState(RichTextEditor.createEmptyValue());
  const [newsText, setNewsText] = useState(RichTextEditor.createEmptyValue());

  const { register: registerHome, handleSubmit: handleSubmitHome } = useForm();
  useEffect(() => {
    API.graphql(graphqlOperation(queries.listHomePages)).then((data) => {
      console.log(data);
      if (data.data.listHomePages.items.length > 0) {
        setHomeData(data.data.listHomePages.items[0]);
        setAboutText(
          RichTextEditor.createValueFromString(
            data.data.listHomePages.items[0].about,
            "html"
          )
        );
        setNewsText(
          RichTextEditor.createValueFromString(
            data.data.listHomePages.items[0].newsBody,
            "html"
          )
        );
      }
    });
  }, []);

  const addWorshipTime = () => {
    let { worshipTimes } = homeData;
    const emptyRow = { name: "", startTime: "12:00AM" };
    if (worshipTimes) {
      worshipTimes.push(emptyRow);
    } else {
      worshipTimes = [emptyRow];
    }
    setHomeData({ ...homeData, worshipTimes: worshipTimes });
  };
  const onSubmitHome = (data) => {
    const worshipTimes = serializeWorshipTimesTable();
    data = {
      ...data,
      worshipTimes: worshipTimes,
      about: aboutText.toString("html"),
      newsBody: newsText.toString("html"),
    };
    if (homeData.id) {
      data = { id: homeData.id, ...data };
      API.graphql(graphqlOperation(mutations.updateHomePage, { input: data }))
        .then((response) => {
          toast.success("Changes successfully saved!");
        })
        .catch((error) => {
          toast.error("There was a problem saving changes, check the logs");
          console.error(error);
        });
    } else {
      API.graphql(graphqlOperation(mutations.createHomePage, { input: data }))
        .then((response) => {
          toast.success("Changes successfully saved!");
        })
        .catch((error) => {
          toast.error("There was a problem saving changes, check the logs");
          console.error(error);
        });
    }
  };

  const serializeWorshipTimesTable = () => {
    const table = document.getElementById("worshipTimesRows");
    let worshipTimes = [];
    for (let i = 0; i < table.children.length; i++) {
      const row = table.children[i];
      const rowObj = {
        id: Date.now().toString(),
        name: row.children[0].innerHTML,
        startTime: row.children[1].innerHTML,
      };
      worshipTimes.push(rowObj);
    }
    return worshipTimes;
  };

  return (
    <>
      <h3>Home Page</h3>
      <form onSubmit={handleSubmitHome(onSubmitHome)}>
        <label htmlFor="about">About Text</label>
        <RichTextEditor
          value={aboutText}
          onChange={(value) => setAboutText(value)}
        />
        <label htmlFor="newsHeadline">News Headline</label>
        <input
          id="newsHeadline"
          name="newsHeadline"
          defaultValue={homeData.newsHeadline || ""}
          ref={registerHome}
        />
        <label htmlFor="newsBody">News Text</label>
        <RichTextEditor
          value={newsText}
          onChange={(value) => setNewsText(value)}
        />
        <h4>Worship Times</h4>
        <button onClick={() => addWorshipTime()}>Add worship time row</button>
        <table className="worshipTimes">
          <thead>
            <tr>
              <th>Service Name</th>
              <th>Service Time</th>
            </tr>
          </thead>
          <tbody id="worshipTimesRows">
            {homeData.worshipTimes?.map((time) => {
              return (
                <tr>
                  <td contentEditable>{time.name}</td>
                  <td contentEditable>{time.startTime}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <input type="submit" />
      </form>
    </>
  );
}

export default HomeEditables;

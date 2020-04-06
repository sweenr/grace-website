import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import RichTextEditor from "react-rte";
import * as mutations from "../../graphql/mutations";
import * as queries from "../../graphql/queries";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

function AboutEditables() {
  const [aboutData, setAboutData] = useState({});
  const [aboutText, setAboutText] = useState(RichTextEditor.createEmptyValue());
  const [missionText, setMissionText] = useState(
    RichTextEditor.createEmptyValue()
  );
  const [messageText, setMessageText] = useState(
    RichTextEditor.createEmptyValue()
  );
  const [believeText, setBelieveText] = useState(
    RichTextEditor.createEmptyValue()
  );
  const {
    register: registerAbout,
    handleSubmit: handleSubmitAbout,
  } = useForm();
  useEffect(() => {
    API.graphql(graphqlOperation(queries.listAboutPages)).then((data) => {
      if (data.data.listAboutPages.items.length > 0) {
        setAboutData(data.data.listAboutPages.items[0]);
        setAboutText(
          RichTextEditor.createValueFromString(
            data.data.listAboutPages.items[0].about,
            "html"
          )
        );
        setMissionText(
          RichTextEditor.createValueFromString(
            data.data.listAboutPages.items[0].mission,
            "html"
          )
        );
        setMessageText(
          RichTextEditor.createValueFromString(
            data.data.listAboutPages.items[0].message,
            "html"
          )
        );
        setBelieveText(
          RichTextEditor.createValueFromString(
            data.data.listAboutPages.items[0].believe,
            "html"
          )
        );
      }
    });
  }, []);
  const onSubmitAbout = (data) => {
    data = {
      ...data,
      about: aboutText.toString("html"),
      mission: missionText.toString("html"),
      message: messageText.toString("html"),
      believe: believeText.toString("html"),
    };
    if (aboutData.id) {
      data = { id: aboutData.id, ...data };
      API.graphql(graphqlOperation(mutations.updateAboutPage, { input: data }))
        .then((response) => {
          toast.success("Changes successfully saved!");
        })
        .catch((error) => {
          toast.error("There was a problem saving changes, check the logs");
          console.error(error);
        });
    } else {
      API.graphql(graphqlOperation(mutations.createAboutPage, { input: data }))
        .then((response) => {
          toast.success("Changes successfully saved!");
        })
        .catch((error) => {
          toast.error("There was a problem saving changes, check the logs");
          console.error(error);
        });
    }
  };

  return (
    <>
      <h3 id="aboutEdit">About Page</h3>
      <form onSubmit={handleSubmitAbout(onSubmitAbout)}>
        <label htmlFor="aboutTitle">About Title</label>
        <input
          id="aboutTitle"
          name="aboutTitle"
          defaultValue={aboutData.aboutTitle || ""}
          ref={registerAbout}
        />
        <label htmlFor="about">About Text</label>
        <RichTextEditor
          value={aboutText}
          onChange={(value) => setAboutText(value)}
        />
        <label htmlFor="missionTitle">Mission Statement Title</label>
        <input
          id="missionTitle"
          name="missionTitle"
          defaultValue={aboutData.missionTitle || ""}
          ref={registerAbout}
        />
        <label htmlFor="mission">Mission Statement Text</label>
        <RichTextEditor
          value={missionText}
          onChange={(value) => setMissionText(value)}
        />
        <label htmlFor="messageTitle">Message from Pastor Title</label>
        <input
          id="messageTitle"
          name="messageTitle"
          defaultValue={aboutData.messageTitle || ""}
          ref={registerAbout}
        />
        <label htmlFor="message">Message from Pastor Text</label>
        <RichTextEditor
          value={messageText}
          onChange={(value) => setMessageText(value)}
        />
        <label htmlFor="believeTitle">We Believe Title</label>
        <input
          id="believeTitle"
          name="believeTitle"
          defaultValue={aboutData.believeTitle || ""}
          ref={registerAbout}
        />
        <label htmlFor="believe">We Believe Text</label>
        <RichTextEditor
          value={believeText}
          onChange={(value) => setBelieveText(value)}
        />
        <input type="submit" />
      </form>
    </>
  );
}

export default AboutEditables;

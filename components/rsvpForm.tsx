import React, { FC, useState, useEffect } from "react";

import { makeString } from "../lib/styling";
import { buttonStyles } from "../components/button";

const inputStyles = makeString(["p-2", "my-1", "bg-paper"]);

interface FormProps {
  submissionMessage: string;
}

const RsvpForm: FC<FormProps> = ({ submissionMessage }) => {
  const maxGuests = 6;
  const [message, setMessage] = useState("");
  const [attending, setAttending] = useState(true);
  const [notAttending, setNotAttending] = useState(true);
  const [nGuests, setNGuests] = useState(maxGuests);
  useEffect(() => {
    setAttending(false);
    setNotAttending(false);
    setNGuests(1);
  }, []);

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!attending && !notAttending) {
      setMessage("Please select an option.");
      return;
    }
    setMessage(submissionMessage);
    /*
    let formData = new FormData(e.target);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => setMessage(submissionMessage))
      .catch((error) => alert(error));
    */
  };

  return (
    <form
      id="rsvp-form"
      name="rsvp"
      method="POST"
      className="flex flex-col font-avenir text-ash mx-auto p-3 w-2/3"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="rsvp" />
      <input type="hidden" name="bot-field" />
      <div className="flex flex-row items-center">
        <input
          type="checkbox"
          name="attending"
          id="attending"
          className="my-3 mr-3"
          checked={attending}
          onChange={() => {
            setAttending(!attending);
            setNotAttending(false);
          }}
        />
        <label htmlFor="attending">Attending</label>
      </div>
      <div className="flex flex-row items-center">
        <input
          type="checkbox"
          name="not-attending"
          id="not-attending"
          className="my-3 mr-3"
          checked={notAttending}
          onChange={() => {
            setNotAttending(!notAttending);
            setAttending(false);
          }}
        />
        <label htmlFor="not-attending">Not Attending</label>
      </div>
      {notAttending && (
        <input
          type="text"
          name="guest-name-not-attending"
          placeholder="name(s)"
          className={inputStyles}
          required
        />
      )}
      {attending && (
        <>
          <div className="flex flex-row justify-start items-center">
            <select
              id="numberOfGuests"
              name="number-of-guests"
              className="my-3 mr-3 align-middle"
              value={nGuests}
              onChange={(e) => setNGuests(parseInt(e.target.value))}
            >
              {[...Array(maxGuests)].map((_, index) => {
                return (
                  <option value={index + 1} key={index}>
                    {index + 1}
                  </option>
                );
              })}
            </select>
            <label>Number of guests</label>
          </div>
          <div className="flex flex-col">
            {[...Array(maxGuests)].map((_, index) => {
              return (
                index < nGuests && (
                  <div className="flex flex-col my-1" key={`guest_${index}`}>
                    <input
                      type="text"
                      name={`guest-${index + 1}-name`}
                      placeholder={`guest ${index + 1} name`}
                      className={inputStyles}
                      key={"guestName" + index.toString()}
                      required
                    />
                    <input
                      type="email"
                      name={`guest-${index + 1}-email`}
                      placeholder={`guest ${index + 1} email`}
                      className={inputStyles}
                      key={"guestEmail" + index.toString()}
                      required
                    />
                    <input
                      type="text"
                      name={`guest-${index + 1}-diet`}
                      placeholder={`guest ${index + 1} dietary requirements`}
                      className={inputStyles}
                      key={"guestFood" + index.toString()}
                      required
                    />
                  </div>
                )
              );
            })}
          </div>
        </>
      )}
      <button type="submit" className={buttonStyles}>
        rsvp
      </button>
      <h1 className="text-bold max-w-sm">{message}</h1>
    </form>
  );
};

export default RsvpForm;

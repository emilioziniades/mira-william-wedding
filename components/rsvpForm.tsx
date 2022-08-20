import React, { FC, useState, useEffect } from "react";

const buttonStyles = [
  "hover:bg-gray-900",
  "hover:text-white",
  "font-bold",
  "p-2",
  "my-1",
  "uppercase",
  "transition-all",
  "mx-auto",
  "text-wblue",
  "border",
  "border-2",
  "border-wblue",
].join(" ");

const inputStyles = ["focus:ring-transparent", "p-2", "my-2", "mx-1"].join(" ");

const RsvpForm: FC = () => {
  const maxGuests = 5;
  const [attending, setAttending] = useState(true);
  const [notAttending, setNotAttending] = useState(false);
  const [nGuests, setNGuests] = useState(5);
  // TODO CHANGE THIS BACK to false, 1
  useEffect(() => {
    setAttending(true);
    setNGuests(5);
  }, []);

  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
    let formData = new FormData(e.target);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => setSubmitted(true))
      .catch((error) => alert(error));
  };

  return (
    <form
      id="rsvp-form"
      name="rsvp"
      method="POST"
      className="flex flex-col content-center text-ash italic"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="rsvp" />
      <input type="hidden" name="bot-field" />
      <div className="flex flex-row mx-auto items-center">
        <label>Attending</label>
        <input
          type="checkbox"
          name="attending"
          id="attending"
          className="m-3"
          checked={attending}
          onChange={() => {
            setAttending(!attending);
            setNotAttending(false);
          }}
        />
      </div>
      <div className="flex flex-row mx-auto items-center">
        <label>Not Attending</label>
        <input
          type="checkbox"
          name="not-attending"
          id="not-attending"
          className="m-3"
          checked={notAttending}
          onChange={() => {
            setNotAttending(!notAttending);
            setAttending(false);
          }}
        />
      </div>
      {attending && (
        <>
          <div className="flex flex-row mx-auto items-center">
            <label>Number of guests</label>
            <select
              id="numberOfGuests"
              name="numberOfGuests"
              className="m-4"
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
          </div>
          <div className="flex flex-col mx-auto">
            {[...Array(maxGuests)].map((_, index) => {
              return (
                index < nGuests && (
                  <div className="flex flex-row items-center">
                    <input
                      type="text"
                      name={`guest_${index + 1}_name`}
                      placeholder={`guest ${index + 1} name`}
                      className={inputStyles}
                      key={"guestName" + index.toString()}
                    />
                    <input
                      type="text"
                      name={`guest_${index + 1}_diet`}
                      placeholder={`guest ${index + 1} dietary requirements`}
                      className={inputStyles}
                      key={"guestFood" + index.toString()}
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
      {submitted && <h1 className="text-bold">Submission received! Thanks</h1>}
      <div className="my-8" />
    </form>
  );
};

export default RsvpForm;

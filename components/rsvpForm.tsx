import React, { FC, useState } from "react";

const buttonStyles = [
  "hover:bg-gray-900",
  "hover:text-white",
  "font-bold",
  "py-2",
  "my-1",
  "rounded",
  "uppercase",
  "transition-all",
  "border-2",
  "rounded-lg",
].join(" ");

const inputStyles = [
  "w-full",
  "border-2",
  "rounded-md",
  "focus:ring-transparent",
  "p-2",
  "my-1",
].join(" ");

const RsvpForm: FC = () => {
  const maxGuests = 5;
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
      className="flex flex-col content-center"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="rsvp" />
      <input type="hidden" name="bot-field" />
      <div className="flex flex-row">
        <input type="checkbox" name="attending" id="attending" />
        <label>attending</label>
      </div>
      <div className="flex flex-row">
        <input type="checkbox" name="not-attending" id="not-attending" />
        <label>not attending</label>
      </div>
      <label>Number of guests</label>
      <select id="numberOfGuests" name="numberOfGuests">
        {[...Array(maxGuests)].map((_, index) => {
          return <option value={index + 1}>{index + 1}</option>;
        })}
      </select>
      {[...Array(maxGuests)].map((_, index) => {
        return (
          <>
            <input
              type="text"
              name={`guest_${index + 1}_name`}
              placeholder={`guest ${index + 1} name`}
              className={inputStyles}
            />
            <input
              type="text"
              name={`guest_${index + 1}_diet`}
              placeholder={`guest ${index + 1} dietary requirements`}
              className={inputStyles}
            />
          </>
        );
      })}
      <button type="submit" className={buttonStyles}>
        rsvp
      </button>
      {submitted && <h1 className="text-bold">Submission received! Thanks</h1>}
    </form>
  );
};

export default RsvpForm;

import React, { FC, useState } from "react";

const buttonClasses = [
  "hover:bg-gray-900",
  "hover:text-white",
  "font-bold",
  "py-2",
  "mx-4",
  "my-2",
  "rounded",
  "uppercase",
  "transition-all",
  "border-2",
  "rounded-lg",
].join(" ");

const pStyles = "p-1";

const inputStyles = [
  "w-full",
  "border-2",
  "rounded-lg",
  "focus:ring-transparent",
  "p-3",
].join(" ");

const RsvpForm: FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
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
      <input
        type="text"
        name="name"
        placeholder="name"
        className={inputStyles}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="email"
        className={inputStyles}
        required
      />
      <input
        type="text"
        name="subject"
        placeholder="subject"
        className={inputStyles}
        required
      />
      <button type="submit" className={buttonClasses}>
        send
      </button>
      {submitted && <h1 className="text-bold">Submission received! Thanks</h1>}
    </form>
  );
};

export default RsvpForm;

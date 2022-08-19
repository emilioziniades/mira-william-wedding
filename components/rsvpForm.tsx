import { FC } from "react";
import FormInput from "./formInput";

const buttonClasses = [
  "hover:bg-gray-900",
  "hover:text-white",
  "font-bold",
  "py-2",
  "px-6",
  "mx-4",
  "rounded",
  "uppercase",
  "transition-all",
  "border-2",
  "rounded-lg",
].join(" ");

const RsvpForm: FC = () => {
  return (
    <form
      name="contact"
      method="POST"
      className="flex flex-col content-center"
      data-netlify="true"
      netlify-honeypot="bot-field"
      action="/"
    >
      <input type="hidden" name="form-name" value="rsvp" />
      <input type="hidden" name="bot-field" />
      <FormInput type="text" name="name" placeholder="Name" required />
      <FormInput type="email" name="email" placeholder="Email" required />
      <FormInput type="text" name="subject" placeholder="Subject" />
      <button type="submit" className={buttonClasses}>
        Send
      </button>
    </form>
  );
};

export default RsvpForm;

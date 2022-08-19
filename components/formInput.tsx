import { FC } from "react";

interface InputProps {
  name: string;
  placeholder: string;
  type?: string;
  textArea?: boolean;
  required?: boolean;
}

const FormInput: FC<InputProps> = ({
  type,
  name,
  placeholder,
  textArea,
  required,
}) => {
  const pStyles = "p-1";
  const inputStyles = [
    "w-full",
    "border-2",
    "rounded-lg",
    "focus:ring-transparent",
    "p-3",
  ].join(" ");

  return (
    <p className={pStyles}>
      {textArea ? (
        <textarea
          name={name}
          placeholder={placeholder}
          className={inputStyles + " resize-none"}
          rows="5"
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={required ? placeholder + " *" : placeholder}
          className={inputStyles}
          required={required}
        />
      )}
    </p>
  );
};

export default FormInput;

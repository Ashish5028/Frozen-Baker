import { ExclamationCircleIcon } from "@heroicons/react/20/solid";
import FieldError from "./fieldError";

export default function Input({
  label,
  name,
  type,
  helperText,
  errors,
  className,
  placeholder,
  ...rest
}) {
  let hasError = false;
  if (errors && errors[name]) {
    hasError = true;
  }

  const cls = ` w-full px-4 bg-white text-sm py-2 border-0  mb-1 !ring-2 ring-transparent rounded-lg outline-none ${
    hasError
      ? "  ring-red-500 border-none focus:ring-rose-500 focus:border-transparent"
      : " ring-2 ring-inset ring-zinc-300  border bow-full py-3 rounded-md pl-2"
  } ${className}`;

  return (
    <div className="flex flex-col">
      {label && <label className=" font-text mb-1">{label}</label>}
      <div className="flex relative">
        <input
          className={cls}
          name={name}
          type={type}
          placeholder={placeholder}
          autoComplete="off"
          {...rest}
        ></input>

        {hasError && (
          <ExclamationCircleIcon className="w-4 absolute right-2 top-2  text-rose-600"></ExclamationCircleIcon>
        )}
      </div>
      {helperText && <div className="text-xs text-gray-600 ">{helperText}</div>}
      <FieldError errors={errors} name={name} />
    </div>
  );
}

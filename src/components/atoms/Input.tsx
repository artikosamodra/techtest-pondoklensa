import React from "react";
import {
  UseFormRegister,
  FieldErrors,
  FieldValues,
  Path,
} from "react-hook-form";

type InputProps<T extends FieldValues> = {
  id: Path<T>;
  label: string;
  type?: string;
  register?: UseFormRegister<T>;
  errors?: FieldErrors<T>;
  placeholder?: string;
  maxLength?: number;
  className?: string;
  readOnly?: boolean;
  iClass?: string;
};

const Input = <T extends FieldValues>({
  id,
  label,
  type = "text",
  register,
  errors,
  placeholder,
  maxLength,
  className = "",
  readOnly = false,
  iClass,
}: InputProps<T>) => {
  const fieldError = errors?.[id];
  const hasError = Boolean(fieldError);

  return (
    <div className={`mb-4 ${iClass}`}>
      <label htmlFor={id} className="font-medium block mb-1">
        {label} {hasError && <span className="text-red-500">*</span>}
      </label>

      <input
        id={id}
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        readOnly={readOnly}
        {...register?.(id)}
        className={`
          w-full px-2 py-2 border rounded-md
          ${
            hasError
              ? "border-red-500 focus-visible:ring-red-500"
              : "border-gray-300"
          }
          ${readOnly ? "bg-gray-300 cursor-default" : "bg-white"}
          ${className}
        `}
      />

      {hasError && (
        <p className="text-red-500 text-sm mt-1">
          {String(fieldError?.message)}
        </p>
      )}
    </div>
  );
};

export default Input;

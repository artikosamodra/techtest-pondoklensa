import React from "react";
import {
  UseFormRegister,
  FieldErrors,
  FieldValues,
  Path,
} from "react-hook-form";

type Option = {
  value: string | number;
  label: string;
};

type SelectProps<T extends FieldValues> = {
  id: Path<T>;
  label?: string;
  options: Option[];
  register?: UseFormRegister<T>;
  errors?: FieldErrors<T>;
  disable?: boolean;
  className?: string;
  classLabel?: string;
};

const Select = <T extends FieldValues>({
  id,
  label,
  options,
  register,
  errors,
  disable = false,
  className = "",
  classLabel = " ",
}: SelectProps<T>) => {
  const fieldError = errors?.[id];

  return (
    <div className="mb-4 w-full">
      <label htmlFor={id} className={`${classLabel} font-medium block mb-1`}>
        {label}
      </label>
      <select
        id={id}
        {...register?.(id)}
        className={` bg-white
              border w-full px-2 py-2 rounded-md transition duration-150 ease-in-out ${
                fieldError
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-300 focus:border-blue-500"
              }
          ${className}`}
        disabled={disable}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {fieldError && (
        <p className="text-red-500 text-sm mt-1">
          {fieldError.message as string}
        </p>
      )}
    </div>
  );
};

export default Select;

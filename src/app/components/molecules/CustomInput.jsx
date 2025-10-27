import React from 'react'
const ChevronDown = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);
const Calendar = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);


const CustomInput = ({
  label,
  type = "text",
  placeholder,
  options = [],
  value,
  onChange,
}) => {
  
  const inputContainerClasses =
    "relative w-full bg-white border border-gray-200 rounded-xl shadow-sm focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all duration-200";

  // Render the specific input/select/textarea element
  const renderInput = () => {
    switch (type) {
      case "select":
        return (
          <>
            <select
              value={value}
              onChange={onChange}
              className="appearance-none w-full h-full p-3 pr-10 text-gray-800 text-base bg-transparent focus:outline-none focus:ring-0 cursor-pointer"
            >
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </>
        );

      case "date":
        return (
          <>
            <input
              type="text"
              placeholder="DD/MM/YYYY"
              value={value}
              onChange={onChange}
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
              className="w-full h-full p-3 pr-10 text-gray-800 text-base bg-transparent focus:outline-none focus:ring-0"
            />
            <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </>
        );

      case "textarea":
        return (
          <textarea
            rows="4"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="w-full h-full p-3 text-gray-800 text-base bg-transparent focus:outline-none focus:ring-0 resize-none rounded-xl"
          />
        );

      case "text":
      default:
        return (
          <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="w-full h-full p-3 text-gray-800 text-base bg-transparent focus:outline-none focus:ring-0"
          />
        );
    }
  };

  const containerHeightClass = type === "textarea" ? "h-auto" : "h-[56px]";

  return (
    <div className="flex flex-col gap-1">
      <label className="text-gray-600 text-sm font-semibold tracking-wide">
        {label}
      </label>

      <div className={`${inputContainerClasses} ${containerHeightClass}`}>
        {renderInput()}
      </div>
    </div>
  );
};

export default CustomInput






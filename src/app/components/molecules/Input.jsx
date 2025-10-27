const CustomInput = ({ label, type = 'text', placeholder, options = [], value, onChange }) => {
  // Base styling for the rounded container
  const inputContainerClasses = 'relative w-full h-[56px] bg-white border border-gray-200 rounded-xl shadow-sm focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all duration-200';
  
  // Render the input element based on the 'type' prop
  const renderInput = () => {
    switch (type) {
      case 'select':
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

      case 'date':
        // For a clean visual, we'll use a text input that leverages the native date picker behavior
        // We'll also add a Calendar icon and the DD/MM/YYYY placeholder
        return (
          <>
            <input
              type="text" // Use text to display placeholder/format, but handle date logic.
              placeholder="DD/MM/YYYY"
              value={value}
              onChange={onChange}
              onFocus={(e) => e.target.type = 'date'} // Switch to date picker when focused
              onBlur={(e) => e.target.type = 'text'} // Switch back to text when blurred
              className="w-full h-full p-3 pr-10 text-gray-800 text-base bg-transparent focus:outline-none focus:ring-0"
            />
            <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </>
        );

      case 'text':
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

  return (
    <div className="flex flex-col gap-1">
      {/* Label Styling based on the screenshot */}
      <label className="text-gray-600 text-sm font-semibold tracking-wide">
        {label}
      </label>
      
      {/* Input/Select/Date Container */}
      <div className={inputContainerClasses}>
        {renderInput()}
      </div>
    </div>
  );
};


export default CustomInput
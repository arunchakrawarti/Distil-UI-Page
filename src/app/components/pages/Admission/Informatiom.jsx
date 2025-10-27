"use client";
import React, { useState } from "react";
import forminput from "../../../../../public/db/forminput.json";
import CustomInput from "../../molecules/CustomInput";


const Information = () => {
  const initialFormState = forminput.forminput
    .flatMap((section) => section.fields)
    .reduce((acc, field) => {
      acc[field.label] = field.value;
      return acc;
    }, {});

  const [formData, setFormData] = useState(initialFormState);

  const handleFieldChange = (key) => (e) => {
    setFormData((prev) => ({
      ...prev,
      [key]: e.target.value,
    }));
  };

  const renderSection = (sectionData) => {
    const isParentSection =
      sectionData.section === "Parent/Guardian Information";

    const gridFields = sectionData.fields.filter((f) => f.type !== "textarea");
    const addressField = sectionData.fields.find((f) => f.type === "textarea");

    return (
      <div key={sectionData.section}>
        {isParentSection && (
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            *Parent/Guardian
          </h2>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {gridFields.map((field) => (
            <CustomInput
              key={field.label}
              label={field.label}
              type={field.type}
              placeholder={field.placeholder}
              options={field.options}
              value={formData[field.label]}
              onChange={handleFieldChange(field.label)}
            />
          ))}
        </div>

        {addressField && (
          <div className="mb-8">
            <CustomInput
              key={addressField.label}
              label={addressField.label}
              type={addressField.type}
              placeholder={addressField.placeholder}
              value={formData[addressField.label]}
              onChange={handleFieldChange(addressField.label)}
            />
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="p-4 sm:p-8 max-w-[1100px] mx-auto bg-gray-50 min-h-screen">
      <div className="p-6 md:p-10 bg-[#FFF1F1] rounded-xl shadow-md border border-gray-100">
        {forminput.forminput.map(renderSection)}
      </div>
      <div className="mt-10">
        <button className=" bg-[linear-gradient(126.5deg,#EC131D_0%,#2F3192_100%)] px-6 py-2 rounded-md text-white">Apply Now →</button>
      </div>
    </div>
  );
};

export default Information;

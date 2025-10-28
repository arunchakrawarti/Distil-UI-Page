"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import forminput from "../../../../../public/db/forminput.json";
import CustomInput from "../../molecules/CustomInput";

const Information = () => {
  // 🧩 Initialize form data
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

  // 🪄 Section render with motion
  const renderSection = (sectionData, index) => {
    const isParentSection =
      sectionData.section === "Parent/Guardian Information";

    const gridFields = sectionData.fields.filter((f) => f.type !== "textarea");
    const addressField = sectionData.fields.find((f) => f.type === "textarea");

    return (
      <motion.div
        key={sectionData.section}
        className="mb-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: index * 0.1 }}
        viewport={{ once: true }}
      >
        {isParentSection && (
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            *Parent/Guardian
          </h2>
        )}

        {/* Grid Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {gridFields.map((field, i) => (
            <motion.div
              key={field.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.1 * i,
              }}
              viewport={{ once: true }}
            >
              <CustomInput
                label={field.label}
                type={field.type}
                placeholder={field.placeholder}
                options={field.options}
                value={formData[field.label]}
                onChange={handleFieldChange(field.label)}
              />
            </motion.div>
          ))}
        </div>

        {/* Textarea Field */}
        {addressField && (
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <CustomInput
              label={addressField.label}
              type={addressField.type}
              placeholder={addressField.placeholder}
              value={formData[addressField.label]}
              onChange={handleFieldChange(addressField.label)}
            />
          </motion.div>
        )}
      </motion.div>
    );
  };

  return (
    <div className="p-4 sm:p-8 max-w-[1100px] mx-auto bg-gray-50 min-h-screen overflow-hidden">
      {/* Form Container */}
      <motion.div
        className="p-6 md:p-10 bg-[#FFF1F1] rounded-xl shadow-md border border-gray-100"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        {forminput.forminput.map((section, index) =>
          renderSection(section, index)
        )}
      </motion.div>

      {/* Apply Button */}
      <motion.div
        className="mt-10 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <motion.button
          className="bg-gradient-to-r from-[#EC131D] to-[#2F3192] px-8 py-3 rounded-md text-white font-semibold shadow-md hover:shadow-lg transition"
          whileHover={{ scale: 1.05, boxShadow: "0 8px 18px rgba(0,0,0,0.2)" }}
          whileTap={{ scale: 0.95 }}
        >
          Apply Now →
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Information;

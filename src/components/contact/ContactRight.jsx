import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { MdError, MdEmail } from "react-icons/md";
import { FaUser, FaPhoneAlt, FaClipboardList } from "react-icons/fa";
import Swal from "sweetalert2";

function ContactRight() {
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required!"),
    phoneNumber: Yup.string()
      .matches(/^\d{10}$/, "Phone number must be 10 digits!")
      .required("Phone number is required!"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required!"),
    subject: Yup.string().required("Subject is required!"),
    message: Yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      phoneNumber: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm, setSubmitting }) => {
      const accessKey = "b0d0de09-b041-4751-83f8-0b27b7850265";
      const formData = {
        ...values,
        access_key: accessKey,
      };

      axios
        .post("https://api.web3forms.com/submit", formData)
        .then((response) => {
          if (response.data.success) {
            resetForm();
            Swal.fire({
              title: "Success!",
              text: "Your message has been successfully sent. We'll get back to you soon.",
              icon: "success",
              confirmButtonText: "Great!",
              background: "#1f2937",
              color: "white",
              confirmButtonColor: "#4CAF50",
            });
          } else {
            Swal.fire({
              title: "Oops!",
              text: "There was an issue sending your message. Please try again later.",
              icon: "error",
              confirmButtonText: "Got it",
              background: "#1f2937",
              color: "white",
              confirmButtonColor: "#e74c3c",
            });
          }
          setSubmitting(false);
        })
        .catch((error) => {
          Swal.fire({
            title: "Error!",
            text: "Unable to send your message. Please check your connection or try again later.",
            icon: "error",
            confirmButtonText: "Okay",
            background: "#1f2937",
            color: "white",
            confirmButtonColor: "#e74c3c",
          });
          setSubmitting(false);
        });
    },
    validateOnBlur: true,
    validateOnChange: true,
  });

  return (
    <div
      data-aos="zoom-in"
      className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne"
    >
      <form
        onSubmit={formik.handleSubmit}
        className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5"
      >
        {/* Username Input */}
        <div className="w-full flex flex-col lgl:flex-row gap-10">
          <div className="w-full lgl:w-1/2 flex flex-col gap-4 relative">
            <p className="text-sm text-gray-400 uppercase tracking-wide">
              Your name <sup className="text-red-500">*</sup>
            </p>
            <div className="flex items-center relative">
              <input
                type="text"
                name="username"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
                className={`${
                  formik.errors.username && formik.touched.username
                    ? "outline-red-500"
                    : ""
                } contactInput pl-10`}
              />
              <FaUser
                className="text-white absolute left-3 top-1/2 transform -translate-y-1/2"
                aria-hidden="true"
              />
              {formik.errors.username && formik.touched.username && (
                <MdError className="text-red-500 absolute right-3 top-1/2 transform -translate-y-1/2" />
              )}
            </div>
            {formik.errors.username && formik.touched.username && (
              <p className="text-red-500 text-sm">{formik.errors.username}</p>
            )}
          </div>

          {/* Phone Number Input */}
          <div className="w-full lgl:w-1/2 flex flex-col gap-4 relative">
            <p className="text-sm text-gray-400 uppercase tracking-wide">
              Phone Number <sup className="text-red-500">*</sup>
            </p>
            <div className="flex items-center relative">
              <input
                type="text"
                name="phoneNumber"
                // onChange={formik.handleChange}
                onChange={(e) => {
                  const numericValue = e.target.value.replace(/[^0-9]/g, "");
                  formik.setFieldValue("phoneNumber", numericValue);
                }}
                onBlur={formik.handleBlur}
                value={formik.values.phoneNumber}
                className={`${
                  formik.errors.phoneNumber && formik.touched.phoneNumber
                    ? "outline-red-500"
                    : ""
                } contactInput pl-10`}
              />
              <FaPhoneAlt
                className="text-white absolute left-3 top-1/2 transform -translate-y-1/2"
                aria-hidden="true"
              />
              {formik.errors.phoneNumber && formik.touched.phoneNumber && (
                <MdError className="text-red-500 absolute right-3 top-1/2 transform -translate-y-1/2" />
              )}
            </div>
            {formik.errors.phoneNumber && formik.touched.phoneNumber && (
              <p className="text-red-500 text-sm">
                {formik.errors.phoneNumber}
              </p>
            )}
          </div>
        </div>

        {/* Email Input */}
        <div className="flex flex-col gap-4 relative">
          <p className="text-sm text-gray-400 uppercase tracking-wide">
            Email <sup className="text-red-500">*</sup>
          </p>
          <div className="flex items-center relative">
            <input
              type="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={`${
                formik.errors.email && formik.touched.email
                  ? "outline-red-500"
                  : ""
              } contactInput pl-10`}
            />
            <MdEmail
              className="text-white absolute left-3 top-1/2 transform -translate-y-1/2"
              aria-hidden="true"
            />
            {formik.errors.email && formik.touched.email && (
              <MdError className="text-red-500 absolute right-3 top-1/2 transform -translate-y-1/2" />
            )}
          </div>
          {formik.errors.email && formik.touched.email && (
            <p className="text-red-500 text-sm">{formik.errors.email}</p>
          )}
        </div>

        {/* Subject Input */}
        <div className="flex flex-col gap-4 relative">
          <p className="text-sm text-gray-400 uppercase tracking-wide">
            Subject <sup className="text-red-500">*</sup>
          </p>
          <div className="flex items-center relative">
            <input
              type="text"
              name="subject"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.subject}
              className={`${
                formik.errors.subject && formik.touched.subject
                  ? "outline-red-500"
                  : ""
              } contactInput pl-10`}
            />
            <FaClipboardList
              className="text-white absolute left-3 top-1/2 transform -translate-y-1/2"
              aria-hidden="true"
            />
            {formik.errors.subject && formik.touched.subject && (
              <MdError className="text-red-500 absolute right-3 top-1/2 transform -translate-y-1/2" />
            )}
          </div>
          {formik.errors.subject && formik.touched.subject && (
            <p className="text-red-500 text-sm">{formik.errors.subject}</p>
          )}
        </div>

        {/* Message Input */}
        <div className="flex flex-col gap-4 relative">
          <p className="text-sm text-gray-400 uppercase tracking-wide">
            Message
          </p>
          <div className="flex items-start relative">
            <textarea
              name="message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              className={`${
                formik.errors.message && formik.touched.message
                  ? "outline-red-500"
                  : ""
              } contactTextArea pl-10`}
              cols="30"
              rows="8"
            ></textarea>
          </div>
        </div>

        {/* Submit Button */}
        <div className="w-full">
          <button
            type="submit"
            disabled={!formik.isValid || formik.isSubmitting || !formik.dirty}
            className={`
      w-full h-12 rounded-lg text-base text-gray-400 tracking-wider uppercase
      duration-300
      ${
        !formik.isValid || formik.isSubmitting || !formik.dirty
          ? "bg-gray-600 cursor-not-allowed" // Disabled button background and cursor
          : "bg-[#141518] hover:text-white hover:border-2 hover:border-designColor cursor-pointer"
      } // Enabled button styles
    `}
          >
            {formik.isSubmitting ? (
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              "Send Message"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactRight;

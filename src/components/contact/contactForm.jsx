import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import Toast from "react-bootstrap/Toast";
import { useState } from "react";

// Define the validation schema
const ContactSchema = yup.object().shape({
  name: yup.string().required("Please input your name"),
  phone: yup
    .string()
    .required("Please input your phone number")
    .matches(/^[6789]\d{9}$/, "Please enter a valid Indian phone number"),
  message: yup
    .string()
    .required("Please write your message")
    .min(20, "Message must be at least 20 characters long"),
});

const ContactForm = () => {
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);

  // Initialize useForm with yupResolver
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ContactSchema),
  });

  // Handle form submission
  const onSubmit = async (data) => {
    setLoading(true); // Set loading to true when submission starts
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("phone", data.phone);
    formData.append("message", data.message);
    formData.append("_captcha", data._captcha || "");

    try {
      const res = await axios.post(
        "https://formsubmit.co/abraamgazi@gmail.com",
        formData
      );
      if (res?.status === 200) {
        setShowToast(true);
        reset();
      }
    } catch (error) {
      console.error("An error occurred while submitting the form:", error);
    } finally {
      setLoading(false); // Set loading to false when submission ends
    }
  };

  return (
    <>
      <form
        className="grid grid-cols-12 gap-4 font-medium sm:gap-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="col-span-12 rounded-xl border border-n30 p-3 lg:col-span-6 relative">
          <input
            type="text"
            className="outline-none"
            placeholder="Name"
            {...register("name")}
            disabled={loading}
          />
          {errors.name && (
            <span className="absolute left-2 -bottom-6 text-sm text-red-600">
              {errors.name.message}
            </span>
          )}
        </div>

        <div className="col-span-12 rounded-xl border border-n30 p-3 lg:col-span-6 relative">
          <input
            type="tel"
            className="outline-none"
            placeholder="Phone Number"
            {...register("phone")}
            disabled={loading}
          />
          {errors.phone && (
            <span className="absolute left-2 -bottom-6 text-sm text-red-600">
              {errors.phone.message}
            </span>
          )}
        </div>

        <div className="col-span-12 rounded-xl border border-n30 p-3 relative">
          <textarea
            className="min-h-[100px] w-full outline-none"
            placeholder="Message"
            {...register("message")}
            disabled={loading}
          ></textarea>
          {errors.message && (
            <span className="absolute left-2 -bottom-6 text-sm text-red-600">
              {errors.message.message}
            </span>
          )}
        </div>

        <div className="col-span-12 text-center">
          <button
            type="submit"
            className={`cta-button mt-0 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>

      <Toast
        onClose={() => setShowToast(false)}
        show={showToast}
        delay={3000}
        autohide
        bg="success"
        className="fixed top-16 left-auto right-4"
      >
        <Toast.Body className="text-white text-center">
          Thank you for writing to us. We will contact you soon!
        </Toast.Body>
      </Toast>
    </>
  );
};

export default ContactForm;

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

const ContactSchema = yup.object().shape({
  name: yup.string().required("Please input your name"),
  phoneNumber: yup.string().required("Please input your phone number"),
  message: yup.string().required("Please write your message"),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ContactSchema),
  });

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("message", data.message);
    formData.append("_captcha", data._captcha);

    try {
      const res = await axios.post(
        "https://formsubmit.co/khanzafer448@gmail.com",
        formData
      );

      if (res?.status === 200) {
        // setShowModal(true);
        // setTimeout(() => {
        //   setShowModal(false);
        //   setAccept(false);
        // }, 5000);
      }
    } catch (error) {
      console.error("An error occurred while submitting the form:", error);
    }

    reset();
  };

  console.log("errors>>", errors);

  return (
    <form
      className="grid grid-cols-12 gap-4 font-medium sm:gap-6"
      id="appointment-form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="col-span-12 rounded-xl border border-n30 p-3 lg:col-span-6">
        <input
          type="text"
          className={`outline-none ${
            errors?.name?.message
              ? "placeholder:text-red-500"
              : "placeholder:text-n100"
          }`}
          placeholder={errors?.name?.message ? errors?.name?.message : "Name"}
          name="name"
          {...register("name")}
        />
      </div>

      <div className="col-span-12 rounded-xl border border-n30 p-3 lg:col-span-6">
        <input
          type="text"
          className={`outline-none ${
            errors?.phoneNumber?.message
              ? "placeholder:text-red-500"
              : "placeholder:text-n100"
          }`}
          placeholder={
            errors?.phoneNumber?.message
              ? errors?.phoneNumber?.message
              : "Phone Number"
          }
          name="phoneNumber"
          {...register("phoneNumber")}
        />
      </div>
      <div className="col-span-12 rounded-xl border border-n30 p-3">
        <textarea
          className={`min-h-[100px] w-full outline-none ${
            errors?.message?.message
              ? "placeholder:text-red-500"
              : "placeholder:text-n100"
          }`}
          placeholder={
            errors?.message?.message ? errors?.message?.message : "Message"
          }
          name="message"
          {...register("message")}
        ></textarea>
      </div>
      <p className="col-span-12 hidden"></p>
      <div className="col-span-4">
        <button type="submit" className="cta-button">
          <span className="relative z-10">Submit</span>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;

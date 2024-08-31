import ContactForm from "./contactForm";

const Contact = () => {
  return (
    <div className="home-content">
      <div className="gallery-section">
        <div className="container">
          <div className="container rounded-xl bg-white p-2 sm:p-4 md:rounded-3xl xl:rounded-[60px] xl:p-15">
            <div className="grid grid-cols-12 gap-6 mb-6">
              <div className="col-span-12 flex flex-col items-center justify-center rounded-3xl border border-n30 p-6 md:col-span-4 lg:p-10">
                <div className="flex items-center justify-center rounded-full bg-b300/5 p-5 text-4xl !leading-none text-b300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    width="1em"
                    height="1em"
                    fill="#3d68fe"
                  >
                    <g>
                      <path d="M232,64V192a16,16,0,0,1-16,16H83l-32.6,28.16-.09.07A15.89,15.89,0,0,1,40,240a16.05,16.05,0,0,1-6.79-1.52A15.84,15.84,0,0,1,24,224V64A16,16,0,0,1,40,48H216A16,16,0,0,1,232,64Z"></path>
                    </g>
                  </svg>
                </div>
                <h4 className="heading-4 py-4">Chat to support</h4>
                <p className="pb-6 text-sm font-medium text-n300">
                  Speak to our friendly team.
                </p>
                <a
                  href="mailto:abraamgazi@gmail.com"
                  className="font-medium hover:text-[#3d68fe]"
                >
                  abraamgazi@gmail.com
                </a>
              </div>
              <div className="col-span-12 flex flex-col items-center justify-center rounded-3xl border border-n30 p-6 md:col-span-4 lg:p-10">
                <div className="flex items-center justify-center rounded-full bg-b300/5 p-5 text-4xl !leading-none text-b300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    width="1em"
                    height="1em"
                    fill="#3d68fe"
                  >
                    <g>
                      <path d="M128,16a88.1,88.1,0,0,0-88,88c0,75.3,80,132.17,83.41,134.55a8,8,0,0,0,9.18,0C136,236.17,216,179.3,216,104A88.1,88.1,0,0,0,128,16Zm0,56a32,32,0,1,1-32,32A32,32,0,0,1,128,72Z"></path>
                    </g>
                  </svg>
                </div>
                <h4 className="heading-4 py-4">Visit us</h4>
                <p className="pb-6 text-sm font-medium text-n300 text-center">
                  Behind Bank of Baroda, Kursi Rd, Tedhi Pulia, Adil Nagar,
                  Lucknow, Uttar Pradesh 226021.
                </p>
                <a href="#" className="font-medium hover:text-[#3d68fe]">
                  View on Google Maps
                </a>
              </div>
              <div className="col-span-12 flex flex-col items-center justify-center rounded-3xl border border-n30 p-6 md:col-span-4 lg:p-10">
                <div className="flex items-center justify-center rounded-full bg-b300/5 p-5 text-4xl !leading-none text-b300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    width="1em"
                    height="1em"
                    fill="#3d68fe"
                  >
                    <g>
                      <path d="M144.27,45.93a8,8,0,0,1,9.8-5.66,86.22,86.22,0,0,1,61.66,61.66,8,8,0,0,1-5.66,9.8A8.23,8.23,0,0,1,208,112a8,8,0,0,1-7.73-5.93,70.35,70.35,0,0,0-50.33-50.34A8,8,0,0,1,144.27,45.93Zm-2.33,41.8c13.79,3.68,22.65,12.55,26.33,26.34A8,8,0,0,0,176,120a8.23,8.23,0,0,0,2.07-.27,8,8,0,0,0,5.66-9.8c-5.12-19.16-18.5-32.54-37.66-37.66a8,8,0,1,0-4.13,15.46Zm72.43,78.73-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L126.87,168c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L89.54,41.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,24,88c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,214.37,166.46Z"></path>
                    </g>
                  </svg>
                </div>
                <h4 className="heading-4 py-4">Contact Us</h4>
                <p className="pb-6 text-sm font-medium text-n300">
                  Mon-Fri from 8am to 5pm.
                </p>
                <a
                  href="tel:+917524891063"
                  className="font-medium hover:text-[#3d68fe]"
                >
                  +91 7524891063
                </a>
              </div>
            </div>
            <div className="stp-15 grid grid-cols-12 gap-6">
              <div className="col-span-12 flex items-center justify-center self-stretch overflow-hidden rounded-3xl md:col-span-4">
                <img
                  src="images/gallery/ledMirror.png"
                  alt="ayan glass"
                  className="h-full rounded-3xl object-cover"
                />
              </div>
              <div className="col-span-12 rounded-3xl border border-n30 p-4 md:col-span-8 lg:p-15">
                <h3 className="heading-3 sbp-15 text-center font-semibold text-xl mb-6">
                  Get in touch
                </h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

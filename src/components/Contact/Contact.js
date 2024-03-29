import React from "react";
import ContactIcon from "../ContactIcon/ContactIcon";
import Dog from "../Dog/Dog";
const Contact = () => {
  return (
    <div>
      <div className="grid grid-rows-1 grid-cols-2 text-gray-300 w-7/12 gap-4 m-auto py-24 sm:grid-cols-1 sm:gap-8 md:grid-cols-1 md:gap-4">
        <p className="bg-blob2 bg-contain bg-center bg-no-repeat flex items-center py-20 justify-center text-gray-300 font-bold text-3xl z-20 sm:bg-secondary sm:rounded-2xl sm:p-2 sm:text-sm sm:bg-none sm:shadow-2xl md:shadow-2xl md:bg-secondary md:rounded-2xl md:p-2 md:text-xl md:bg-none lg:text-xl">
          Contact Me
        </p>
        <p className="flex flex-col justify-center items-left text-left py-4 z-20 ">
          For questions relating/regarding Frontend Development,UI/UX Design ,
          cooperation and general issues please reach out me via
          <strong className="text-greeny hover:text-lightGreeny transform hover:scale-100 hover:transition duration-500 ease-in-out">fojanbabaali@gmail.com</strong>
        </p>
        <div className="m-auto">
          <ContactIcon />
        </div>
        <div className="m-auto md:hidden">
          <Dog />
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React, { useState, useEffect } from "react";
import { motion} from "framer-motion"
import Sidebar from "./Sidebar";

const Books = () => {
  return (

    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1 }}
    className="flex">

      <div className="w-1/4">
        <Sidebar />
      </div>
      <div className="grid grid-cols-3 gap-4 w-3/4 translate-y-10">

        <div className="col-span-1">
          <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <img
              className="object-cover w-full h-56"
              src="https://online.fliphtml5.com/gryph/cecv/files/large/1.webp?1592678564&1592678564"
              alt="avatar"
            />
            <div className="py-5 text-center">
              <a
                href="#"
                className="block text-xl font-bold text-gray-800 dark:text-white"
                tabIndex="0"
                role="link"
              >
                The Little Prince
              </a>

              <span className="text-sm text-gray-700 dark:text-gray-200">
                Antoine de Saint-Exupery
              </span> <br />
              <a href="../books/Fiction/TheLittlePrince.pdf" download={"TheLittlePrince.pdf"} target="_blank" className="text-sm text-blue-500 hover:text-blue-700 underline">Download</a>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <img
              className="w-full h-56"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBZvmByDPaEGBQOOaJ52urZ6szJsAWMfK_sg&s"
              alt="avatar"
            />
            <div className="py-5 text-center">
              <a
                href="#"
                className="block text-xl font-bold text-gray-800 dark:text-white"
                tabIndex="0"
                role="link"
              >
                1984
              </a>
              <span className="text-sm text-gray-700 dark:text-gray-200">
                George Orwell
              </span> <br />
              <a href="../books/Fiction/Orwell-1949 1984.pdf" download className="text-sm text-blue-500 hover:text-blue-700 underline">Download</a>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <img
              className="w-full h-56"
              src="https://readings.com.pk/images/books/9789696401438.jpg"
              alt="avatar"
            />
            <div className="py-5 text-center">
              <a
                href="#"
                className="block text-xl font-bold text-gray-800 dark:text-white"
                tabIndex="0"
                role="link"
              >
                The Stranger
              </a>
              <span className="text-sm text-gray-700 dark:text-gray-200">
                Albert Camus
              </span> <br />
              <a href="../books/Fiction/TheLittlePrince.pdf" download className="text-sm text-blue-500 hover:text-blue-700 underline">Download</a>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <img
              className="w-full h-56"
              src="https://www.theindianbookstore.in/cdn/shop/files/WhatsAppImage2023-09-11at2.58.22PM_02220ad9-2b54-4c91-abbe-477d57996d62.jpg?v=1694527531"
              alt="avatar"
            />
            <div className="py-5 text-center">
              <a
                href="#"
                className="block text-xl font-bold text-gray-800 dark:text-white"
                tabIndex="0"
                role="link"
              >
                The Plague
              </a>
              <span className="text-sm text-gray-700 dark:text-gray-200">
               Albert Camus
              </span> <br />
              <a href="../books/Fiction/TheLittlePrince.pdf" download className="text-sm text-blue-500 hover:text-blue-700 underline">Download</a>
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <img
              className="w-full h-56"
              src="https://m.media-amazon.com/images/I/816HrAJ1eyL._AC_UF1000,1000_QL80_.jpg"
              alt="avatar"
            />
            <div className="py-5 text-center">
              <a
                href="#"
                className="block text-xl font-bold text-gray-800 dark:text-white"
                tabIndex="0"
                role="link"
              >
                The Night Of Time
              </a>
              <span className="text-sm text-gray-700 dark:text-gray-200">
                Edith Grossman
              </span>  <br />
              <a href="../books/Fiction/TheLittlePrince.pdf" download className="text-sm text-blue-500 hover:text-blue-700 underline">Download</a>
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <img
              className="w-full h-56"
              src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1612238791i/56916837.jpg"
              alt="avatar"
            />
            <div className="py-5 text-center">
              <a
                href="#"
                className="block text-xl font-bold text-gray-800 dark:text-white"
                tabIndex="0"
                role="link"
              >
                To Kill A Mockingbird
              </a>
              <span className="text-sm text-gray-700 dark:text-gray-200">
               Harper Lee
              </span>  <br />
              <a href="../books/Fiction/TheLittlePrince.pdf" download className="text-sm text-blue-500 hover:text-blue-700 underline">Download</a>
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <img
              className="w-full h-56"
              src="https://booksondemand.ma/cdn/shop/products/PrideandPrejudicebyJaneAusten.jpg?v=1609440724"
              alt="avatar"
            />
            <div className="py-5 text-center">
              <a
                href="#"
                className="block text-xl font-bold text-gray-800 dark:text-white"
                tabIndex="0"
                role="link"
              >
                Pride and Prejudice
              </a>
              <span className="text-sm text-gray-700 dark:text-gray-200">
                Jane Austen
              </span>  <br />
              <a href="../books/Fiction/TheLittlePrince.pdf" download className="text-sm text-blue-500 hover:text-blue-700 underline">Download</a>
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <img
              className="w-full h-56"
              src="https://images.penguinrandomhouse.com/cover/9780593311844"
              alt="avatar"
            />
            <div className="py-5 text-center">
              <a
                href="#"
                className="block text-xl font-bold text-gray-800 dark:text-white"
                tabIndex="0"
                role="link"
              >
                The Great Gatsby
              </a>
              <span className="text-sm text-gray-700 dark:text-gray-200">
                F. Scott Fitzgerald
              </span>  <br />
              <a href="../books/Fiction/TheLittlePrince.pdf" download className="text-sm text-blue-500 hover:text-blue-700 underline">Download</a>
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <img
              className="w-full h-56"
              src="https://covers.storytel.com/jpg-640/9789354866609.69d09c02-11bd-4720-8c33-9b4396a96b8b?optimize=high&quality=70&width=600"
              alt="avatar"
            />
            <div className="py-5 text-center">
              <a
                href="#"
                className="block text-xl font-bold text-gray-800 dark:text-white"
                tabIndex="0"
                role="link"
              >
                Moby Dick
              </a>
              <span className="text-sm text-gray-700 dark:text-gray-200">
                Herman Melville
              </span>  <br />
              <a href="../books/Fiction/TheLittlePrince.pdf" download className="text-sm text-blue-500 hover:text-blue-700 underline">Download</a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Books;

import React from "react";

const Contact = () => {
  return (
    <section className="my-28 px-5" id="contact">
      <div className="md:mx-6 flex flex-col flex-wrap md:flex-row justify-between">
        <div className="md:w-6/12 md:px-0 p-5 my-5">
          <div className="text-4xl pb-4 ">Contact Me</div>
          <div>
            <p className="font-bold text-base">Naman Sharma</p>
            <p className="font-thin text-base">Bengaluru ,India</p>
            <a
              href="mailto: pekkacodes@gmail.com"
              className=" mt-3 inline-block border-gray-500 text-sm"
            >
              pekkacodes@gmail.com
            </a>
          </div>

          <div className="flex flex-row flex-wrap mt-7">
            <div className="mr-4">
              <a
                href="https://www.linkedin.com/in/naman-sharma-dev98"
                target="_blank"
                rel="noreferrer"
              >
                <span className="mb-2 flex flex-row items-end border border-gray-500 p-2 rounded-lg text-sm">
                  LinkedIn
                </span>
              </a>
            </div>
            <div className="mr-4">
              <a
                href="https://github.com/Naman-l"
                target="_blank"
                rel="noreferrer"
              >
                <span className="mb-2 flex flex-row items-end border border-gray-500 p-2 rounded-lg text-sm">
                  Twitter
                </span>
              </a>
            </div>

            <div className="mr-4">
              <a
                href="https://github.com/Naman-l"
                target="_blank"
                rel="noreferrer"
              >
                <span className="mb-2 flex flex-row items-end border border-gray-500 p-2 rounded-lg text-sm">
                  GitHub
                </span>
              </a>
            </div>
          </div>

          <a href="./Resume-Naman.pdf" download>
            <button
              type="submit"
              className="border border-gray-500 p-1 rounded-lg w-auto mr-auto shadow-md"
            >
              <span className="mt-3  flex flex-row  justify-center  text-base pr-3 ">
                <img
                  src="./images/iconfinder_multimedia-21_2849815.svg"
                  alt=""
                  className="object-scale-down w-10 h-10 pr-3 pb-3"
                />
                Download my Resume
              </span>
            </button>
          </a>
          <div
            className="  mr-auto ml-auto md:mr-auto md:ml-0 max-w-xs md:max-w-sm flex justify-content"
            onClick={() => window.scroll(0, 0)}
          >
            <picture>
              <source
                srcSet="./images/rocket-320.webp 320w, ./images/rocket.webp 768w"
                type="image/webp"
              />
              <source
                srcSet="./images/rocket.png"
                sizes="(min-width: 768px) 30vw, 60vw"
                type="image/png"
              />
              <img
                width="300px"
                height="300px"
                loading="lazy"
                alt="red rocket flying"
                className="w-40 h-40"
              />
            </picture>
          </div>
        </div>

        <div className="bg-gray px-5 md:py-8 sm:p-8 my-2 md:rounded-lg shadow-lg  justify-between w-full h-content  md:w-6/12 ">
          <form
            className="flex flex-col space-y-3 m-auto w-full "
            name="contact"
            method="post"
            action="mailto:pekkacodes@gmail.com"
            encType="multipart/form-data"
          >
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="gradient"
              required
            ></input>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="gradient"
              required
            ></input>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols="25"
              rows="5"
              className="gradient"
              required
            ></textarea>
            <button
              type="submit"
              className="border border-gray-500 p-2 rounded-lg w-auto mr-auto shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import Layout from "../components/layout";
import Header from "../components/header";
import { useState } from "react";

import data from "../data/accro";

import { MdRemoveCircleOutline, MdControlPoint } from "react-icons/md";
import { AiFillTwitterSquare, AiFillLinkedin } from "react-icons/ai";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaGoogleDrive,
} from "react-icons/fa";

export default function Home() {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };


  return (
    <div className="bg-[#1b2136] sm:w-full">
      <Header />

      {/* Hero section-1-Desktop */}
      <div className="flex flex-col md:flex-row w-full px-4 md:px-8 text-gray-50">
        {/* Left side */}
        <div className="flex flex-col md:w-[50%] p-6 md:p-8 justify-center items-start bg-gray-800">
          <h1 className="text-4xl md:text-6xl md:pt-0 pt-16 font-extrabold">
            Data to enrich your <br />
            <span className="text-blue-600">online business</span>
          </h1>
          <p className="text-base md:text-xl mt-4 md:mt-8 text-gray-50">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
            <br />
            qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
            <br />
            occaecat fugiat aliqua.
          </p>
          <div className="flex gap-4 justify-center mt-8 md:mt-12">
            <button className="bg-blue-900 hover:bg-blue-700 py-4 px-8 rounded focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-blue-900 focus:ring-blue-900">
              Get started
            </button>
            <button className="bg-gray-900 hover:bg-gray-700 py-4 px-8 rounded text-blue-300 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-gray-700 focus:ring-gray-700">
              Live demo
            </button>
          </div>
        </div>
        {/* Right side */}
        <div className="flex md:w-[50%] justify-center">
          <img
            className="md:h-[100vh] w-[100%] object-cover"
            src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
            alt=""
          />
        </div>
      </div>

      {/* Feature-section-2 */}
      <div className="mx-4 md:mx-8 h-[80%]">
        <div className="flex flex-col bg-gray-800 justify-between text-gray-50 p-8 md:p-16 mt-4 md:mt-8">
          <div className="items-center justify-center text-center">
            <h1 className="text-blue-600 font-bold capitalize tracking-wider">
              DEPLOY FASTER
            </h1>
            <h2 className="mt-2 text-[21px] md:text-4xl font-extrabold">
              Evrything you need to deploy your
            </h2>
            <p className="mt-2 md:mt-4 text-gray-400 text-base md:text-xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
              quis dolor et dolores, <br /> ipsam nulla, dolore repellat,
              incidunt nihil dicta corrupti illum?
            </p>
          </div>
          {/* SVG */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-4 md:mt-0 md:p-16 leading-8">
            <div className="flex flex-col justify-center items-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-md bg-blue-500 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-file-lock"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 5a1 1 0 0 1 1 1v1H7V6a1 1 0 0 1 1-1zm2 2.076V6a2 2 0 1 0-4 0v1.076c-.54.166-1 .597-1 1.224v2.4c0 .816.781 1.3 1.5 1.3h3c.719 0 1.5-.484 1.5-1.3V8.3c0-.627-.46-1.058-1-1.224zM6.105 8.125A.637.637 0 0 1 6.5 8h3a.64.64 0 0 1 .395.125c.085.068.105.133.105.175v2.4c0 .042-.02.107-.105.175A.637.637 0 0 1 9.5 11h-3a.637.637 0 0 1-.395-.125C6.02 10.807 6 10.742 6 10.7V8.3c0-.042.02-.107.105-.175z" />
                  <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
                </svg>
              </div>

              <h1 className="text-lg md:text-xl pt-2 md:pt-4">
                SSL Certificates
              </h1>
              <p className="text-center leading-5 md:leading-6 text-gray-400 text-[14px] md:text-base pt-1">
                Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit.
                Earum minima aperiam <br /> ibero quo?
              </p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-md bg-blue-500 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-cloud-arrow-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.646 10.854a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 9.293V5.5a.5.5 0 0 0-1 0v3.793L6.354 8.146a.5.5 0 1 0-.708.708l2 2z"
                  />
                  <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                </svg>
              </div>
              <h1 className="text-lg md:text-xl pt-2 md:pt-4">
                Push to deploy
              </h1>
              <p className="text-center leading-5 md:leading-6 text-gray-400 text-[14px] md:text-base pt-1">
                Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit.
                Earum minima aperiam <br /> ibero quo?
              </p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-md bg-blue-500 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-arrow-repeat"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
                  <path
                    fill-rule="evenodd"
                    d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
                  />
                </svg>
              </div>
              <h1 className="text-lg md:text-xl pt-2 md:pt-4">Simple Queues</h1>
              <p className="text-center leading-5 md:leading-6 text-gray-400 text-[14px] md:text-base pt-1">
                Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit.
                Earum minima aperiam <br /> ibero quo?
              </p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-md bg-blue-500 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-patch-check"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                  />
                  <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z" />
                </svg>
              </div>
              <h1 className="text-lg md:text-xl pt-2 md:pt-4">
                Advance Security
              </h1>
              <p className="text-center leading-5 md:leading-6 text-gray-400 text-[14px] md:text-base pt-1">
                Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit.
                Earum minima aperiam <br /> ibero quo?
              </p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-md bg-blue-500 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-gear"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                  <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                </svg>
              </div>
              <h1 className="text-lg md:text-xl pt-2 md:pt-4">Powerful Api</h1>
              <p className="text-center leading-5 md:leading-6 text-gray-400 text-[14px] md:text-base pt-1">
                Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit.
                Earum minima aperiam <br /> ibero quo?
              </p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-md bg-blue-500 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-credit-card-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1H0V4zm0 3v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7H0zm3 2h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1z" />
                </svg>
              </div>
              <h1 className="text-lg md:text-xl pt-2 md:pt-4">Database</h1>
              <p className="text-center leading-5 md:leading-6 text-gray-400 text-[14px] md:text-base pt-1">
                Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit.
                Earum minima aperiam <br /> ibero quo?
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section-3 */}
      <div className="relative px-4 md:px-8 m-4 md:m-8 p-5 md:p-28 bg-gray-800">
        <div className="flex md:flex-row flex-col h-[100%] md:h-[50%]">
          <div className="w-[100%] md:w-[50%] relative">
            <img
              className="rounded-t-2xl md:rounded-l-2xl md:rounded-r-none object-cover"
              src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
              alt="img"
            />
            <div className="mix-blend-multiply bg-blue-900 h-[100%] w-[100%] absolute top-[0] rounded-t-2xl md:rounded-r-none md:rounded-l-2xl"></div>
          </div>
          <div className="rounded-b-2xl md:rounded-br-2xl md:rounded-l-none md:rounded-tr-2xl flex flex-col p-5 md:p-10 justify-center w-[100%] md:w-[50%] bg-[#1b2136]">
            <h1 className="text-base capitalize text-gray-50">
              AWARD WINNING SUPPORT
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 md:mt-4 text-white ">
              We're here to help
            </h2>
            <p className="text-[15px] md:text-lg mt-3 md:mt-4 text-gray-50">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo id
              molestiae non sunt ipsum quos tenetur dolorum velit, officia
              perspiciatis in facilis pariatur ratione eveniet, architecto fugit
              ullam animi aliquam. Dignissimos, ut.
            </p>
            <div className="flex gap-4 items-center justify-start mt-6 md:mt-12">
              <button className="bg-white hover:text-white flex items-center gap-3 md:gap-4 hover:bg-blue-700 py-3 md:py-4 px-4 md:px-8 rounded focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-blue-900 focus:ring-blue-900">
                Visit the help center
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-box-arrow-up-right text-gray-600 hover:text-white"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section-4 */}
      <div className="flex flex-col h-screen mx-4 md:mx-8 text-gray-50 relative">
        <div className="bg-gray-800 h-[70%] flex flex-col items-center pt-5 md:pt-20 shadow-xl">
          <h1 className="text-3xl md:text-5xl font-extrabold mt-3 md:mt-4">
            Simple no-tricks pricing
          </h1>
          <p className="text-[16px] md:px-0 px-4 md:text-xl mt-2 md:mt-4">
            If you are not satisfied , contact us within the first 14 days and
            we'll send you a full fund
          </p>
        </div>
        <div className="bg-[#11182c] h-[40%]"></div>
        <div className="bg-[#11182c] rounded-t-2xl mx-[10px] md:mx-8 h-[50%] w-[95%] top-[28%] md:top-[40%] absolute shadow-2xl flex md:flex-row flex-col">
          <div className="w-[100%] md:w-[70%] flex flex-col justify-start p-4 md:p-14">
            <h1 className="text-xl md:text-4xl font-bold">
              Lifetime Membership
            </h1>
            <p className="text-gray-400 text-[14px] md:text-base mt-2 md:mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa,
              excepturi amet omnis maiores itaque quibusdam delectus et iusto.
            </p>
            <h4 className="text-[15px] md:text-base text-blue-700 tracking-widest mt-3 md:mt-4 cursor-pointer">
              WHAT'S INCLUDED
            </h4>
            <div className="grid grid-cols-2 leading-7 md:leading-10 gap-0 md:gap-2 mt-3 md:mt-4">
              <div className="gap-2 md:gap-3 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-check-circle-fill text-green-600"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                </svg>
                <span className="text-[12px] md:text-base text-gray-300">
                  Private forum access
                </span>
              </div>

              <div className="gap-2 md:gap-3 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-check-circle-fill text-green-600"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                </svg>
                <span className="text-[12px] md:text-base text-gray-300">
                  Member Resources
                </span>
              </div>

              <div className="gap-2 md:gap-3 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-check-circle-fill text-green-600"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                </svg>
                <span className="text-[12px] md:text-base text-gray-300">
                  Entry to annual conference
                </span>
              </div>

              <div className="gap-2 md:gap-3 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-check-circle-fill text-green-600"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                </svg>
                <span className="text-[12px] md:text-base text-gray-300">
                  official member t-shirt
                </span>
              </div>
            </div>
          </div>

          <div className="w-[100%] md:w-[30%] flex flex-col items-center bg-[#121a31] rounded-b-2xl p-4 md:p-14">
            <h1 className="text-white text-[18px] md:text-xl">
              Pay once, own it forever
            </h1>
            <div className="flex items-center gap-2 md:gap-4 mt-1 md:mt-4">
              <span className="text-2xl md:text-5xl font-bold text-gray-400">
                $349
              </span>
              <span className="text-gray-500 tracking-widest text-[17px] md:text-xl">
                USD
              </span>
            </div>
            <span className="text-[12px] md:text-sm mt-3 md:mt-4 tracking-wide border-b border-solid border-gray-500 cursor-pointer">
              Learn about our membership policy
            </span>
            <button className="bg-blue-700 hover:text-blue-700 flex items-center gap-4 hover:bg-white py-[6px] md:py-3 px-16 mt-4 md:mt-8 rounded focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-blue-900 text-sm md:text-base focus:ring-blue-900">
              Get Access
            </button>
            <div className="flex mt-2 md:mt-4 gap-1 text-gray-400 items-center">
              <p className="text-[13px] md:text-sm">Get a free sample</p>
              <small className="text-[14px] md:text-base text-gray-500">
                (20MB)
              </small>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ section-5 */}
      <div className="flex flex-col bg-gray-800 mx-4 md:mx-8 mt-4 md:mt-8 items-center p-10 md:p-16">
        <h1 className="text-2xl md:text-4xl py-5 md:py-10 text-center text-gray-300 font-bold">
          Frequently asked questions
        </h1>
        {data.map((d, i) => (
          <div
            keys={i}
            className="text-gray-200 justify-center  flex flex-col w-[420px] md:w-[900px] items-center p-2 md:p-6"
          >
            <div
              onClick={() => toggle(i)}
              className="bg-transparent border border-gray-500 cursor-pointer flex items-center md:text-base justify-between h-[50px] md:h-[80px] w-[335px] md:w-[800px] p-4 md:px-8"
            >
              <h3 className="text-base md:text-lg">{d.question}</h3>
              <div className="">
                {clicked === i ? <MdRemoveCircleOutline /> : <MdControlPoint />}
              </div>
            </div>
            {clicked === i ? (
              <p className="justify-start mx-16 md:text-base text-sm mt-4">
                {d.answer}
              </p>
            ) : null}
          </div>
        ))}
      </div>

      {/* Newsletter section-6 */}
      <div className="bg-gray-800 items-center flex flex-col justify-center mx-4 md:mx-8 mt-4 md:mt-8 p-4 md:p-16">
        <div className="w-full md:h-[500px] relative">
          <img
            className="rounded-2xl w-full h-[350px] md:h-[500px]"
            src="https://images.unsplash.com/photo-1545661791-a0d19b84e156?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt="imd"
          />

          <div className="items-center justify-center text-gray-50 flex flex-col mix-blend-multiply bg-blue-900 h-[100%] w-[100%] absolute top-[0] rounded-2xl">
            <h1 className=" text-xl md:text-4xl text-white font-bold">
              Get notified when we're launching.
            </h1>
            <p className="text-gray-300 text-sm md:text-lg pt-3 md:pt-6 text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
              ipsam ex aliquam <br /> placeat? Libero debitis quis est.
            </p>
            <div className="flex md:flex-row flex-col gap-3 md:gap-6 pt-5 md:pt-10">
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-white py-3 px-8 outline-[none] border-0 placeholder-black rounded-md focus:hover:bg-gray-600 focus:hover:placeholder-white"
              />
              <button className="text-black text-lg bg-blue-500 py-3 focus:hover:bg-gray-600 px-8 rounded-md focus:hover:text-white">
                Notify me
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats section-7 */}
      <div className="flex md:flex-row flex-col mx-4 md:mx-8 mt-4 md:mt-8">
        <div className="bg-gray-800 py-4 md:py-10 px-4 md:px-8 w-[100%] md:w-[50%] md:h-[90vh] flex flex-col justify-center text-white">
          <h1 className="text-blue-300 md:font-bold cursor-pointer tracking-widest">
            VALUABLE METRICS
          </h1>
          <h2 className="text-xl md:text-3xl font-bold text-white mt-1 md:mt-3">
            Get actionable data that will help grow your business
          </h2>
          <p className="text-base md:text-lg text-gray-200 mt-2 md:mt-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil iste
            ratione quam recusandae eaque aspernatur voluptatem. Aperiam earum
            optio dignissimos maxime minus et, facilis quos sapiente amet
            adipisci magni, quibusdam ducimus blanditiis incidunt?
          </p>

          <div className="grid grid-cols-2 mt-4 md:mt-6 gap-4 md:gap-8 text-white">
            <div className="flex flex-col">
              <h1 className="font-bold text-xl md:text-2xl">8K+</h1>
              <p className="text-sm md:text-base text-gray-50 mt-1">
                Companies use dolor sit, amet consectetur adipisicing elit.
              </p>
            </div>

            <div className="flex flex-col">
              <h1 className="font-bold text-xl md:text-2xl">25K+</h1>
              <p className="text-sm md:text-base text-gray-50 mt-1">
                Country around dolor sit, amet consectetur adipisicing elit.
              </p>
            </div>

            <div className="flex flex-col">
              <h1 className="font-bold text-xl md:text-2xl">98%</h1>
              <p className="text-sm md:text-base text-gray-50 mt-1">
                Customer satisfaction dolor sit, amet consectetur adipisicing
                elit.
              </p>
            </div>

            <div className="flex flex-col">
              <h1 className="font-bold text-xl md:text-2xl">12M+</h1>
              <p className="text-sm md:text-base text-gray-50 mt-1">
                issue resolved with sit, amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[50%] relative">
          <img
            className="w-full h[50vh] md:h-[90vh]"
            src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt=""
          />

          <div className="items-center justify-center flex flex-col mix-blend-multiply bg-gray-800 h-[100%] w-[100%] absolute top-[0]"></div>
        </div>
      </div>

      {/* Testimonials section-8 */}
      <div className="mx-4 md:mx-8 mt-4 md:mt-8 py-8 px-4 md:px-0 md:py-24 bg-gray-800 items-center flex flex-col">
        <div className="bg-[#476ce4] text-white rounded-[15px] m-[20px/auto] max-w-[768px] p-4 md:p-14 items-center">
          <div className="bg-white h-[2px] md:h-1 w-full animate-bounce origin-left"></div>

          <p className="md:leading-7 text-justify text-sm md:text-lg mt-4 md:mt-8">
            I've worked with literally hundreds of HTML/CSS developers and I
            have to say the top spot goes to this guy. This guy is an amazing
            developer. He stresses on good, clean code and pays heed to the
            details. I love developers who respect each and every aspect of a
            throughly thought out design and do their best to put it in code. He
            goes over and beyond and transforms ART into PIXELS - without a
            glitch, every time.
          </p>

          <div className="flex items-center justify-center mt-4">
            <img
              src="https://randomuser.me/api/portraits/women/46.jpg"
              alt="user"
              className="rounded-[50%] h-[60px] w-[60px] object-cover border-4 border-gray-100"
            />

            <div className="ml-4">
              <h4 className="m-0 font-bold">Judit black</h4>
              <p className="font-normal m-[10px/0] text-sm text-gray-300">
                CEO, Tuple
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team section-9 */}
      <div className="bg-gray-800 mt-4 md:mt-8 mx-4 md:mx-8 py-6 md:py-12 px-4 md:px-8 flex flex-col">
        <h1 className="font-bold text-4xl text-white">Meet our team</h1>
        <p className="text-gray-500 text-base md:text-lg mt-2 md:mt-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
          consequatur voluptate commodi tempora officiis tenetur harum!
        </p>

        <div className="grid md:grid-cols-3 p-4 md:mt-6 gap-4">
          <div className="flex flex-col items-start text-white">
            <img
              className="h-[250px] w-[350px] rounded-xl mt-4"
              src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              alt=""
            />
            <h1 className="text-gray-100 text-lg mt-4">Lindsay Walton</h1>
            <h2 className="text-blue-900 cursor-pointer">
              Front-end developer
            </h2>
            <div className="flex gap-4 text-2xl cursor-pointer text-gray-500 mt-2">
              <AiFillTwitterSquare />
              <AiFillLinkedin />
            </div>
          </div>

          <div className="flex flex-col items-start text-white">
            <img
              className="h-[250px] w-[350px] rounded-xl mt-4"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              alt=""
            />
            <h1 className="text-gray-100 text-lg mt-4">Lindsay Walton</h1>
            <h2 className="text-blue-900 cursor-pointer">
              Director, Product Development
            </h2>
            <div className="flex items-start cursor-pointer gap-4 text-2xl text-gray-500 mt-2">
              <AiFillTwitterSquare />
              <AiFillLinkedin />
            </div>
          </div>

          <div className="flex flex-col items-start text-white">
            <img
              className="h-[250px] w-[350px] rounded-xl mt-4"
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
              alt=""
            />
            <h1 className="text-gray-100 text-lg mt-4">Lindsay Walton</h1>
            <h2 className="cursor-pointer text-blue-900">Designer</h2>
            <div className="flex items-start cursor-pointer gap-4 text-2xl text-gray-500 mt-2">
              <AiFillTwitterSquare />
              <AiFillLinkedin />
            </div>
          </div>

          <div className="flex flex-col items-start text-white">
            <img
              className="h-[250px] w-[350px] rounded-xl mt-4"
              src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=641&q=80"
              alt=""
            />
            <h1 className="text-gray-100 text-lg mt-4">Lindsay Walton</h1>
            <h2 className="text-blue-900 cursor-pointer">Copywriter</h2>
            <div className="flex items-start cursor-pointer gap-4 text-2xl text-gray-500 mt-2">
              <AiFillTwitterSquare />
              <AiFillLinkedin />
            </div>
          </div>

          <div className="flex flex-col items-start text-white">
            <img
              className="h-[250px] w-[350px] rounded-xl mt-4"
              src="https://images.unsplash.com/photo-1511546395756-590dffdcdbd1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              alt=""
            />
            <h1 className="text-gray-100 text-lg mt-4">Lindsay Walton</h1>
            <h2 className="text-blue-900 cursor-pointer">Senior Designer</h2>
            <div className="flex items-start cursor-pointer gap-4 text-2xl text-gray-500 mt-2">
              <AiFillTwitterSquare />
              <AiFillLinkedin />
            </div>
          </div>

          <div className="flex flex-col items-start text-white">
            <img
              className="h-[250px] w-[350px] rounded-xl mt-4"
              src="https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=888&q=80"
              alt=""
            />
            <h1 className="text-gray-100 text-lg mt-4">Lindsay Walton</h1>
            <h2 className="text-blue-900 cursor-pointer">Principle Designer</h2>
            <div className="flex items-start cursor-pointer gap-4 text-2xl text-gray-500 mt-2">
              <AiFillTwitterSquare />
              <AiFillLinkedin />
            </div>
          </div>
        </div>
      </div>

      {/* Content Section-10 */}
      <div className="flex md:flex-row flex-col mt-4 md:mt-8 mx-4 md:mx-8 p-4 bg-gray-800 items-center">
        <div className="m-4 w-[96%] md:w-[50%] relative">
          <img
            className="w-full h-[40vh] md:h-[80vh] object-cover rounded-2xl opacity-50"
            src="https://images.unsplash.com/photo-1528656707959-c9dc050e4841?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
            alt=""
          />
          <div className="flex flex-col items-start justify-end text-white mix-blend-multiply bg-blue-900 to-blue-100 h-[100%] w-[100%] top-0 absolute rounded-2xl p-8">
            <div className="flex gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                class="bi bi-tv"
                viewBox="0 0 16 16"
              >
                <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM13.991 3l.024.001a1.46 1.46 0 0 1 .538.143.757.757 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.464 1.464 0 0 1-.143.538.758.758 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.464 1.464 0 0 1-.538-.143.758.758 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.46 1.46 0 0 1 .143-.538.758.758 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3h11.991zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z" />
              </svg>
              <h1 className="text-3xl font-bold">Workcation</h1>
            </div>
            <p className="mt-4 text-sm md:text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
              quaerat laborum distinctio voluptatibus maxime nulla cumque
              doloremque ea alias, nihil harum nam!
            </p>
            <small className="text-sm mt-4">
              Sarah Williams, CEO at Workcation
            </small>
          </div>
        </div>
        <div
          className="flex flex-col md:flex-col text-white md:p-6 md:justify-center md:items-start w-[96%] md:w-[50%] 
        h-[75vh] md:h-[80vh]"
        >
          <h1 className="font-bold md:text-3xl text-xl">
            On a mission to empower dreams
          </h1>
          <p className="md:mt-4 mt-2 text-sm md:text-base text-gray-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
            saepe, tempora, omnis doloribus dignissimos, esse iure porro
            pariatur inventore necessitatibus eligendi odit officia consectetur
            sint unde magnam expedita reiciendis est voluptate eum veniam labore
            rerum.
          </p>

          <p className="md:mt-4 mt-2 text-sm md:text-base text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
            tempore optio suscipit reprehenderit quo expedita ipsum illo a
            corporis ipsa, ea aperiam itaque, veniam enim, et hic quisquam
            praesentium architecto impedit eum magni. Temporibus asperiores
            fugit est cumque, quisquam dolorem delectus quod perferendis
            corrupti earum quo. Harum itaque et sit quaerat perferendis, error
            voluptatibus sequi!
          </p>

          <p className="md:mt-4 mt-2 text-sm md:text-base text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            voluptas repudiandae ipsam quis quos. Voluptas ab animi dolor ullam
            minima esse tempora voluptates non laboriosam architecto maiores
            quae dolores dolorem temporibus reprehenderit velit perspiciatis sed
            quas voluptatibus blanditiis, itaque numquam possimus! Laborum quia
            accusamus possimus nobis neque exercitationem minima voluptate?
          </p>
        </div>
      </div>

      {/* Footer Section-11 */}
      <div className="bg-gray-900 flex flex-col mt-4 md:mt-8 mx-4 md:mx-8 p-8 py-16">
        <div className="flex md:flex-row flex-col justify-center md:justify-between items-start grid-cols-2">
          <div className="flex flex-col text-white gap-1 md:gap-3">
            <h1 className="text-xl">SOLUTIONS</h1>
            <p className="text-gray-400 text-lg hover:text-red-700 cursor-pointer">
              Marketing
            </p>
            <p className="text-gray-400 text-lg hover:text-red-700 cursor-pointer">
              Analytic
            </p>
            <p className="text-gray-400 text-lg hover:text-red-700 cursor-pointer">
              Commerce
            </p>
            <p className="text-gray-400 text-lg hover:text-red-700 cursor-pointer">
              Insights
            </p>
          </div>

          <div className="flex flex-col text-white gap-1 md:gap-3">
            <h1 className="text-xl">SUPPORT</h1>
            <p className="text-gray-400 text-lg hover:text-red-700 cursor-pointer">
              Pricing
            </p>
            <p className="text-gray-400 text-lg hover:text-red-700 cursor-pointer">
              Documentation
            </p>
            <p className="text-gray-400 text-lg hover:text-red-700 cursor-pointer">
              Guides
            </p>
            <p className="text-gray-400 text-lg hover:text-red-700 cursor-pointer">
              API Status
            </p>
          </div>

          <div className="flex flex-col text-white gap-1 md:gap-3 mt-4 md:mt-0">
            <h1 className="text-xl">COMPANY</h1>
            <p className="text-gray-400 text-lg hover:text-red-700 cursor-pointer">
              About
            </p>
            <p className="text-gray-400 text-lg hover:text-red-700 cursor-pointer">
              Blog
            </p>
            <p className="text-gray-400 text-lg hover:text-red-700 cursor-pointer">
              Job
            </p>
            <p className="text-gray-400 text-lg hover:text-red-700 cursor-pointer">
              Partners
            </p>
          </div>

          <div className="flex flex-col text-white gap-1 md:gap-3 mt-4 md:mt-0">
            <h1 className="text-xl">LIGAL</h1>
            <p className="text-gray-400 text-lg hover:text-red-700 cursor-pointer">
              Claim
            </p>
            <p className="text-gray-400 text-lg hover:text-red-700 cursor-pointer">
              Privacy
            </p>
            <p className="text-gray-400 text-lg hover:text-red-700 cursor-pointer">
              Terms
            </p>
            <p className="text-gray-400 text-lg hover:text-red-700 cursor-pointer">
              Press
            </p>
          </div>

          <div className="flex flex-col gap-3 text-white items-start mt-4 md:mt-0">
            <h1 className="text-xl">SUBSCRIBE TO OUR NEWSLETTER</h1>
            <p className="text-gray-400 text-lg">
              The largest news, articles, and resources, sent to <br /> your
              inbox weekly...
            </p>
            <div className="flex flex-col md:flex-row gap-3 mt-4">
              <input
                type="text"
                placeholder="Enter your email"
                required
                className="bg-white py-2 md:px-6 px-4 outline-[none] border-0 placeholder-gray-500 rounded-md focus:hover:bg-gray-600 focus:hover:placeholder-white"
              />
              <button
                className="text-white text-base bg-blue-900 py-2 focus:hover:bg-gray-600 px-6
               rounded-md focus:hover:text-white"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between border-t-2 border-gray-800 mt-8 pt-8">
          <small className="text-sm text-gray-500">
            &copy; 2021 TSR-Inc. All rights reserved.
          </small>
          <div className="flex mt-8 md:mt-0 cursor-pointer justify-between md:gap-6 text-gray-500 text-lg">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaGithub />
            <FaGoogleDrive />
          </div>
        </div>
      </div>
    </div>
  );
}

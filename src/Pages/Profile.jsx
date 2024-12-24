// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import { CardData } from "../Data/CardData";
// import background from "../assets/profileBackground.png";
// import bluetick from "../assets/bluetick.png";
// import star from "../assets/star.svg";
// import Concerns from "../components/Concerns";
// import Specialize from "../components/Specialize";
// import AboutMe from "../components/AboutMe";
// import WorkExperience from "../components/WorkExperience";
// import Review from "../components/Review";
// import Appointment from "../components/Appointment";

// const Profile = () => {
//   const { id } = useParams(); // Get doctor ID from route params
//   const doctor = CardData.find((doc) => doc.id === id); // Find the matching doctor

//   if (!doctor) {
//     return <div>Doctor not found</div>;
//   }

//   return (
//     <div className="flex-1 ">
//       <main className="mb-20 mt-6 flex w-full items-center justify-center sm:mt-16">
//         <div className="flex w-[90%] flex-col items-center justify-center sm:w-[85%]">
//           <img
//             src={background}
//             alt="profile_bg"
//             className="h-40 w-full overflow-hidden rounded-2xl object-cover"
//           />
//           <div className="box-border flex min-h-[151px] w-full -translate-y-7 flex-col items-center border-[1.8px] border-solid border-slate-200 bg-[#fbfff2] max-sm:rounded-b-xl md:flex-row">
//             <div className="relative z-10 min-w-52">
//               <img
//                 src={doctor.image}
//                 alt="doctor_Image"
//                 className="h-[159px] w-[159px] -translate-y-8 translate-x-3 rounded-[50%] border-4 border-white bg-no-repeat object-cover object-center sm:translate-x-8"
//               />
//             </div>
//             <div className="mb-5 flex w-full justify-start  flex-wrap items-center gap-5 max-md:justify-center sm:px-2 max-xl:pt-2">
//               <div className="flex flex-col items-start gap-2">
//                 <div className="flex  items-center gap-2">
//                   <h3 className="whitespace-nowrap text-[20px] font-medium text-gray-800">
//                     {doctor.name}
//                   </h3>
//                   <div className="relative h-5 w-5">
//                     <img src={bluetick} alt="Blue_Tick" className="mt-[1px]" />
//                   </div>
//                 </div>
//                 <div className="flex items-center py-0 text-[15px] font-medium leading-[16.8px] text-[#3a643b] max-sm:mx-auto sm:justify-center">
//                   {doctor.type}
//                 </div>
//                 <div className="flex cursor-pointer items-center gap-1 max-sm:mx-auto">
//                   <span className="text-[#3a643b]">{doctor.rating}</span>
//                   <div className="flex items-center gap-0">
//                     <img src={star} alt="Rating_Star" />
//                   </div>
//                 </div>
//               </div>
//               <div className="flex items-center justify-start font-medium sm:gap-10 lg:mx-auto lg:w-auto xl:gap-[74px]">
//                 <div className="w-[80px] text-center">
//                   <p className="text-[14px] text-[#3a643b] sm:text-sm leading-[16.8px]">
//                     Followers
//                   </p>
//                   <p className="text-base leading-6 font-semibold text-[#212529] sm:text-[20px]">
//                     {doctor.followers}
//                   </p>
//                 </div>
//                 <div className="w-[80px] cursor-pointer text-center">
//                   <p className="text-[13px] text-[#3a643b] sm:text-sm">
//                     Following
//                   </p>
//                   <p className="text-base leading-6 font-semibold text-[#212529] sm:text-[20px]">
//                     {doctor.following}
//                   </p>
//                 </div>
//                 <div className="w-[80px] text-center">
//                   <p className="text-[13px] text-[#3a643b] sm:text-sm">Posts</p>
//                   <p className="text-base leading-6 font-semibold text-[#212529] sm:text-[20px]">
//                     {doctor.posts}
//                   </p>
//                 </div>
//               </div>
//               <div className="flex items-center rounded-lg gap-[10px] py-3 px-8 2xl:px-[125px] bg-[#3a643b] xl:mr-3">
//                 <p className="font-[Nunito] font-semibold text-[20px] text-white leading-[24.2px]">
//                   Book an Appointment
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="w-full grid-cols-1 gap-7 sm:grid lg:grid-cols-2">
//             <div className="w-full">
//               <div className="flex flex-col gap-7">
//                 <AboutMe />
//                 <Specialize />
//                 <Concerns />
//                 <WorkExperience />
//                 <Review />
//               </div>
//             </div>
//             <div className="no-scrollbar sticky top-[100px]  lg:h-[96vh] w-full overflow-scroll sm:block">
//               <Appointment />
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Profile;

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { CardData } from "../Data/CardData";
import background from "../assets/profileBackground.png";
import bluetick from "../assets/bluetick.png";
import star from "../assets/star.svg";
import Concerns from "../components/Concerns";
import Specialize from "../components/Specialize";
import AboutMe from "../components/AboutMe";
import WorkExperience from "../components/WorkExperience";
import Review from "../components/Review";
import Appointment from "../components/Appointment";

const Profile = () => {
  const { id } = useParams(); // Get doctor ID from route params
  const doctor = CardData.find((doc) => doc.id === id); // Find the matching doctor
  const [activeTab, setActiveTab] = useState("about"); // State to manage active tab

  if (!doctor) {
    return <div>Doctor not found</div>;
  }

  return (
    <div className="flex-1">
      <main className="mb-20 mt-6 flex w-full items-center justify-center sm:mt-16">
        <div className="flex w-[90%] flex-col items-center justify-center sm:w-[85%]">
          <img
            src={background}
            alt="profile_bg"
            className="h-40 w-full overflow-hidden rounded-2xl object-cover"
          />
          <div className="box-border flex min-h-[151px] w-full -translate-y-7 flex-col items-center border-[1.8px] border-solid border-slate-200 bg-[#fbfff2] max-sm:rounded-b-xl md:flex-row">
            <div className="relative z-10 min-w-52">
              <img
                src={doctor.image}
                alt="doctor_Image"
                className="h-[159px] w-[159px] -translate-y-8 translate-x-3 rounded-[50%] border-4 border-white bg-no-repeat object-cover object-center sm:translate-x-8"
              />
            </div>
            <div className="mb-5 flex w-full justify-start flex-wrap items-center gap-5 max-md:justify-center sm:px-2 max-xl:pt-2">
              <div className="flex flex-col items-start gap-2">
                <div className="flex items-center gap-2">
                  <h3 className="whitespace-nowrap text-[20px] font-medium text-gray-800">
                    {doctor.name}
                  </h3>
                  <div className="relative h-5 w-5">
                    <img src={bluetick} alt="Blue_Tick" className="mt-[1px]" />
                  </div>
                </div>
                <div className="flex items-center py-0 text-[15px] font-medium leading-[16.8px] text-[#3a643b] max-sm:mx-auto sm:justify-center">
                  {doctor.type}
                </div>
                <div className="flex cursor-pointer items-center gap-1 max-sm:mx-auto">
                  <span className="text-[#3a643b]">{doctor.rating}</span>
                  <div className="flex items-center gap-0">
                    <img src={star} alt="Rating_Star" />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-start font-medium sm:gap-10 lg:mx-auto lg:w-auto xl:gap-[74px]">
                <div className="w-[80px] text-center">
                  <p className="text-[14px] text-[#3a643b] sm:text-sm leading-[16.8px]">
                    Followers
                  </p>
                  <p className="text-base leading-6 font-semibold text-[#212529] sm:text-[20px]">
                    {doctor.followers}
                  </p>
                </div>
                <div className="w-[80px] cursor-pointer text-center">
                  <p className="text-[13px] text-[#3a643b] sm:text-sm">
                    Following
                  </p>
                  <p className="text-base leading-6 font-semibold text-[#212529] sm:text-[20px]">
                    {doctor.following}
                  </p>
                </div>
                <div className="w-[80px] text-center">
                  <p className="text-[13px] text-[#3a643b] sm:text-sm">Posts</p>
                  <p className="text-base leading-6 font-semibold text-[#212529] sm:text-[20px]">
                    {doctor.posts}
                  </p>
                </div>
              </div>
              <div className="flex items-center rounded-lg gap-[10px] py-3 px-8 2xl:px-[125px] bg-[#3a643b] xl:mr-3">
                <p className="font-[Nunito] font-semibold text-[20px] text-white leading-[24.2px]">
                  Book an Appointment
                </p>
              </div>
            </div>
          </div>
          <div className="w-full">
            {/* Tabs for small screens */}
            <div className="sticky top-[55px] bg-white z-[5] mb-3 flex items-center justify-between px-[2px] py-2 font-semibold text-[#595959] sm:hidden">
              <p
                className={`flex-1 cursor-pointer pb-1 text-center ${
                  activeTab === "about"
                    ? "border-b-2 border-[#3A643B] text-black"
                    : "false"
                }`}
                onClick={() => setActiveTab("about")}
              >
                About
              </p>
              <p
                className={`flex-1 cursor-pointer pb-1 text-center ${
                  activeTab === "appointment"
                    ? "border-b-2 border-[#3A643B] text-black"
                    : "false"
                }`}
                onClick={() => setActiveTab("appointment")}
              >
                Appointment
              </p>
            </div>
            {/* Content */}
            <div className="sm:hidden">
              {activeTab === "about" ? (
                <div className="flex flex-col gap-7">
                  <AboutMe />
                  <Specialize />
                  <Concerns />
                  <WorkExperience />
                  <Review />
                </div>
              ) : (
                <div>
                  <Appointment />
                </div>
              )}
            </div>
            {/* Default layout for larger screens */}
            <div className="hidden sm:grid w-full grid-cols-1 gap-7 lg:grid-cols-2">
              <div className="w-full">
                <div className="flex flex-col gap-7">
                  <AboutMe />
                  <Specialize />
                  <Concerns />
                  <WorkExperience />
                  <Review />
                </div>
              </div>
              <div className="no-scrollbar sticky top-[100px] lg:h-[96vh] w-full overflow-scroll">
                <Appointment />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;

import img1 from '../assets/image/img1.jpg'
import img2 from '../assets/image/img2.jpg'
import { AiFillPlayCircle } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
export default function About() {
  return (
    <div className='container grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 my-20' id='About'>
    <div className="flex md:w-[80%] relative items-start justify-between">
      <img src={img1} className="w-[49%] shadow-md rounded-sm" alt="" />
      <img src={img2} className="w-[47%] shadow-md rounded-sm" alt="" />
      <div className="absolute flex flex-col items-center gap-5 px-5 py-5 bg-white rounded-md shadow-md -bottom-32 -right-2 md:-right-3 md:-bottom-5 lg:-right-5">
        <p className="font-montserrat md:max-w-[300px]">
          Watch a video about how we work and try for our customers
        </p>
        <div className="flex items-center justify-between w-full">
          <p className="font-semibold text-gray-500 font-montserrat">
            Play video
          </p>
          <div className="flex items-center mr-5 text-3xl text-gray-200 gap-7">
            <div className="w-[100px] h-0.5 bg-gray-300"></div>
            <AiFillPlayCircle className="rounded-full cursor-pointer vid-anim" />
            
          </div>
        </div>
      </div>
    </div>
    <div className="card mt-[35%] lg:mt-2">
      <h3 className="flex items-center justify-start gap-5 mb-5 text-2xl font-bold md:text-4xl font-poppins">
        <div className="w-[50px] h-0.5 hidden md:block bg-gray-700"></div>
        History of our creation
      </h3>
      <p className="font-montserrat">
        Since our beginning in 2006, we have expanded the collection of exclusive lamps. Today we are proud to present you our best lighting design. Our collection is updated every day with beautiful solutions, and we are glad that you, our customers, support us on our way! Our collection is updated every day with beautiful solutions.
      </p>
      <button className="mt-5 flex items-center gap-2 text-md font-bold text-gray-800 duration-200 border-b border-gray-600 hover:text-blue-800 group font-montserrat">
        <BsArrowRight className="duration-500 text-md group-hover:translate-x-1" /> Read More
      </button>
    </div>
  </div>
    
  )
}

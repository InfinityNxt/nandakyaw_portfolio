import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import CV from "../assets/cv.pdf";

const Home = () => {
  return (
    <div name="home" className="bg-[#0a192f] h-screen w-full">
      {/* Container */}

      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-yellow-800 font-semibold">Hi, my name is </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Nanda Kyaw
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a full-stack developer specailizing in building (and occasionally
          designing) exceptional digital experiences. Currently, I'm focused on
          building responsive full-stack web application.
        </p>
        <div className="flex flex-row gap-5">
            <Link to="works" smooth={true} duration={500}>
              <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-800 hover:border-yellow-800">
                View Works
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-3" />
                </span>
              </button>
            </Link>
          <a href={CV}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-800 hover:border-yellow-800">
              Download CV
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;

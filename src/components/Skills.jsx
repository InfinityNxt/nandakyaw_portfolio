import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import Github from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";

const Skills = () => {
  return (
    <div name="skills" className="bg-[#0a192f] text-gray-300  w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-yellow-800">
            Skills
          </p>
          <p className="py-4">// These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-4 pb-2">
            <img src={HTML} alt="HTML icon" className="w-20 mx-auto pb-2" />
            <p>HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-4 pb-2">
            <img src={CSS} alt="CSS icon" className="w-20 mx-auto pb-2" />
            <p>CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-4 pb-2">
            <img src={JavaScript} alt="js icon" className="w-20 mx-auto pb-2" />
            <p>JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-4 pb-2">
            <img
              src={ReactImg}
              alt="react icon"
              className="w-20 mx-auto pb-2"
            />
            <p>REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-4 pb-2">
            <img src={Github} alt="github icon" className="w-20 mx-auto pb-2" />
            <p>GITHUB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-4 pb-2">
            <img src={Node} alt="node icon" className="w-20 mx-auto pb-2" />
            <p>NODEJS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-4 pb-2">
            <img src={Mongo} alt="mongo icon" className="w-20 mx-auto pb-2" />
            <p>MONGODB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-4 pb-2">
            <img
              src={Tailwind}
              alt="tailwind icon"
              className="w-20 mx-auto pb-2"
            />
            <p>TAILWIND</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

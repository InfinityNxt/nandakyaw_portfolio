import { data } from "../data/data";

const Work = () => {
  const projects = data;
  return (
    <div
      name="works"
      className="w-full h-full text-gray-300 bg-[#0a192f] pt-[70px]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline boder-b-4 text-gray-300 border-yellow-800">
            Works
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <>
              {/* Grid Item */}
              <div
                key={index}
                style={{ background: `url(${project.image})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
              >
                {/* Hover Effect */}
                <div className="opacity-0 group-hover:opacity-100">
                  <span className="text-2xl font-bold text-white tracking-wider">
                    {project.name}
                  </span>
                  <div className="pt-8 text-center">
                    <a href={project.live} target="_blank">
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                        Demo
                      </button>
                    </a>
                    <a href={project.github} target="_blank">
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;

import Work from "./work";
// import { projects } from "../../constants";
import { projectSelect } from "../../redux/actions";
import { useSelector } from "react-redux";

export default function Projects() {
  const projectData=useSelector(projectSelect);

  return (
    <div
      id="projects"
      className="min-h-screen flex flex-col justify-center text-center gap-10"
    >
      <div
        className="font-extrabold  py-5 mt-10 text-5xl"
        data-aos={"slide-up"}
        data-aos-duration={"700"}
      >
        Projects
      </div>
      <div className="flex flex-wrap flex-row justify-center w-full p-4 gap-12">
        {projectData.map((project, ind) => {
          return (
            <div
              key={ind}
              data-aos={"zoom-in-up"}
              data-aos-offset="-5"
              data-aos-delay={ind % 2 === 0 ? "0" : "700"}
              data-aos-duration="2000"
            >
              <Work
                title={project.name}
                desc={project.description}
                img={project.image}
                link={project.link}
                code={project.code}
                tags={project.tags}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

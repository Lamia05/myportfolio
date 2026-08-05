import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

const SelectedWorks = () => {
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-14">
          <h2 className="text-5xl justify-between text-center font-bold mb-4">
            Selected Works
          </h2>

          <p className="text-gray-400 max-w-2xl  mx-auto text-sm sm:text-base justify center text-center items-center">
            Crafting digital experiences that matter
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 6).map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default SelectedWorks;
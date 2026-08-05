import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

const RelatedProjects = ({ currentId }) => {
  const filteredProjects = projects
    .filter((project) => project.id !== currentId)
    .slice(0, 2);

  return (
    <section className="pb-24 px-6">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold mb-12">
          Related Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {filteredProjects.map((project) => (
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

export default RelatedProjects;
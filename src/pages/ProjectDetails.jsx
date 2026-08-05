import { useParams } from "react-router-dom";
import projects from "../data/projects";
import { Check } from "lucide-react";
import RelatedProjects from "../components/RelatedProjects";

const ProjectDetails = () => {
  const { slug } = useParams();

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <div className="text-white">Project not found</div>;
  }

  return (
    <div className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="relative h-[90vh]">

        <img
          src={project.banner}
          alt=""
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute bottom-16 left-10">

          <span className="border border-white px-5 py-2 rounded-full text-sm">
            {project.category}
          </span>

          <h1 className="text-6xl font-bold mt-6">
            {project.title}
          </h1>

        </div>

      </section>

      {/* TEXT */}
      <section className="py-20 px-6">

        <p className="max-w-3xl mx-auto text-center text-gray-300 text-lg leading-8">
          {project.shortText}
        </p>

        {/* TAGS */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">

          {project.tags.map((tag, index) => (
            <div
              key={index}
              className="px-5 py-3 border border-gray-700 rounded-xl text-sm"
            >
              {tag}
            </div>
          ))}

        </div>

      </section>

      {/* CHALLENGE SOLUTION */}
      <section className="bg-zinc-900 py-20 px-6">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

          <div>
            <h2 className="text-3xl font-bold mb-5">
              Challenge
            </h2>

            <p className="text-gray-400 leading-8">
              {project.challenge}
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-5">
              <Check />
              <h2 className="text-3xl font-bold">
                Solution
              </h2>
            </div>

            <p className="text-gray-400 leading-8">
              {project.solution}
            </p>
          </div>

        </div>

      </section>

      {/* GALLERY */}
      <section className="py-20 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold mb-12">
            Project Gallery
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {project.gallery.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-3xl"
              >
                <img
                  src={image}
                  alt=""
                  className="w-full h-[350px] object-cover hover:scale-110 transition duration-500"
                />
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* RELATED */}
      <RelatedProjects currentId={project.id} />

    </div>
  );
};

export default ProjectDetails;
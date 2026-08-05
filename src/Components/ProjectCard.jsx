import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <Link to={`/project/${project.slug}`}>

      <div className="group relative overflow-hidden rounded-3xl cursor-pointer">

        <img
          src={project.image}
          alt=""
          className="w-full h-[450px] object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition duration-500"></div>

        <div className="absolute top-6 left-6">
          <p className="text-sm uppercase tracking-[3px] text-white">
            {project.category}
          </p>
        </div>

        <div className="absolute bottom-6 left-6">

          <h3 className="text-2xl font-semibold mb-3">
            {project.title}
          </h3>

          <div className="flex items-center gap-2">
            <p className="text-sm">
              View Project
            </p>

            <ArrowUpRight size={18} />
          </div>

        </div>

      </div>

    </Link>
  );
};

export default ProjectCard;
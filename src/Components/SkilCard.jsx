import React, {useState} from 'react';

const technologies=[
  {"id": 1, "name": "HTML5", "category": "Frontend UI/Libraries", "img": "https://i.postimg.cc/xdkgpRc5/html-icon.jpg", "skill": 90},
  {"id": 2, "name": "CSS3", "category": "Frontend UI/Libraries", "img": "", "skill": 85},
  {"id": 3, "name": "Tailwind CSS", "category": "Frontend UI/Libraries", "img":"", "skill": 80},
  {"id": 4, "name": "React JS", "category": "Frontend UI/Libraries", "img": "", "skill": 85},
  {"id": 5, "name": "JavaScript", "category": "Programming Languages", "img": "", "skill": 90},
  {"id": 6, "name": "Node JS", "category": "Programming Languages", "img": "https://i.postimg.cc/PJZ5SBjT/pnl.png", "skill": 75},
  {"id": 7, "name": "Next.JS", "category": "Programming Languages", "img": "", "skill": 75},
  {"id": 8, "name": "Git", "category": "Tools & Others", "img": "", "skill": 80},
  {"id": 9, "name": "Github", "category": "Tools & Others", "img": "", "skill": 85},
  {"id": 10, "name": "Vs Code", "category": "Tools & Others", "img": "", "skill": 90},
  {"id": 11, "name": "Figma", "category": "Tools & Others", "img": "", "skill": 80},
]


const categories=["Frontend UI/Libraries", "Programming Languages", "Tools & Others"];
export default function SkillCard() {
    const[activeCategory, setActiveCategory] = useState("Frontend UI/Libraries");


    const filteredTech = technologies.filter(
        (tech) => tech.category=== activeCategory

    );


    return(
        <section className="bg-gray-50 px-10 py-2">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Technologies & Tools</h2>
                <p className="text-gray-500">Mastering modern technologies to craft exceptional digital experiences with precision & creativity</p>

            </div>

            <div className="flex justify-center gap-3 mb-10 flex-wrap">
                {categories.map((cat) => (
                    <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-md font-semibold transition-all ${
              activeCategory === cat
                ? "bg-blue-100 text-blue-600 border border-blue-500"
                : "bg-white text-gray-600 border border-gray-300 hover:bg-blue-50"
            }`}>
            {cat}
          </button>

                ))}
            </div>

             {/* Technology Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
        {filteredTech.map((tech) => (
          <div
            key={tech.id}
            className="relative bg-white border rounded-2xl shadow-sm hover:shadow-md overflow-hidden transition-all duration-300 w-full max-w-xs text-center p-6"
          >
            {/* Icon */}
            <div className="mb-4 text-blue-500 flex justify-center">
              {tech.icon}
            </div>

            {/* Name */}
            <div className="text-lg font-semibold text-gray-800 mb-2">{tech.name}</div>

            {/* Skill Progress */}
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-blue-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${tech.skill}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-500 mt-1">{tech.skill}%</p>
          </div>
        ))}
      </div>

        </section>
    );
};

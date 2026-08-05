import React, { useState } from 'react';
import { Layers, Code2, Wrench, Terminal } from 'lucide-react';


const skillsData = [
  {
    id: 1,
    name: "HTML5",
    category: "Frontend UI / Libraries",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    skill: 90
  },
  {
    id: 2,
    name: "CSS3",
    category: "Frontend UI / Libraries",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    skill: 85
  },
  {
    id: 3,
    name: "Tailwind CSS",
    category: "Frontend UI / Libraries",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    skill: 80
  },
  {
    id: 4,
    name: "React JS",
    category: "Frontend UI / Libraries",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    skill: 85
  },
  {
    id: 5,
    name: "JavaScript",
    category: "Programming Languages",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    skill: 90
  },
  {
    Category: "Programming Languages",
    id: 6,
    name: "Node JS",
    category: "Programming Languages",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    skill: 75
  },
  {
    id: 7,
    name: "Next.Js",
    category: "Programming Languages",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    skill: 80
  },
  {
    id: 8,
    name: "Git",
    category: "Tools & Others",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    skill: 80
  },
  {
    id: 9,
    name: "GitHub",
    category: "Tools & Others",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    skill: 85
  },
  {
    id: 10,
    name: "VS Code",
    category: "Tools & Others",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    skill: 90
  },
  {
    id: 11,
    name: "Figma",
    category: "Tools & Others",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    skill: 80
  }
];


const categories = [
  { id: "Frontend UI / Libraries", label: "Frontend", icon: Code2 },
  { id: "Programming Languages", label: "Languages", icon: Terminal },
  { id: "Tools & Others", label: "Tools & Build", icon: Wrench }
];


const SkilCard = ({ name, skill, img }) => {
  const radius = 32;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (skill / 100) * circumference;

  return (
    <div className="bg-white rounded-3xl p-6 flex flex-col items-center justify-between border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 min-h-[250px]">
      <div className="w-14 h-14 rounded-2xl bg-cyan-50/50 p-2.5 flex items-center justify-center mb-3">
        <img 
          src={img} 
          alt={name} 
          className="w-full h-full object-contain"
        />
      </div>

      <h3 className="text-gray-800 font-bold text-base mb-4 text-center">
        {name}
      </h3>

      <div className="relative w-20 h-20 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 80 80">
          <circle
            cx="40"
            cy="40"
            r={radius}
            stroke="#e5e7eb"
            strokeWidth="6"
            fill="transparent"
          />
          <circle
            cx="40"
            cy="40"
            r={radius}
            stroke="#06b6d4"
            strokeWidth="6"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <span className="absolute text-sm font-bold text-gray-800">
          {skill}%
        </span>
      </div>
    </div>
  );
};


const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend UI / Libraries");

  const filteredSkills = skillsData.filter(
    (item) => item.category === activeCategory
  );

  return (
    <section className="bg-emerald-50/20 py-16 px-4 min-h-screen flex flex-col items-center font-sans">
      {/* Top Badge */}
      <div className="mb-4 inline-flex items-center gap-2 bg-[#047857] text-white px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase shadow-sm">
        <Layers className="w-4 h-4" />
        <span>MY ARSENAL</span>
      </div>

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#065f46] text-center mb-3">
        Technologies & Tools
      </h2>
      <p className="text-gray-600 text-center max-w-xl text-sm md:text-base mb-10 leading-relaxed">
        Mastering modern technologies to craft exceptional digital experiences with precision and creativity
      </p>

      {/* Dynamic Tabs */}
      <div className="bg-gray-100/80 p-1.5 rounded-2xl flex flex-wrap justify-center items-center gap-1 mb-12 shadow-inner">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-[#047857] text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200/50'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl">
        {filteredSkills.map((item) => (
          <SkilCard
            key={item.id}
            name={item.name}
            skill={item.skill}
            img={item.img}
          />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
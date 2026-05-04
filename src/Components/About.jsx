import React from 'react'
const About= () => {

    return(
        <section className="px-4 bg-gray-50 min-h-screen py-16 sm:px-6 lg:px-10">
            <div className=" max-w-6xl mx-auto flex flex-col gap-10">
                
                <button className="px-5 py-2 text-sm font-semibold rounded-full bg-black text-white w-fit">About Me</button>

                <div className="flex flex-col lg:lex-row items-start lg:items-center justify-between gap-10 lg:gap-20">
         
                <h2 className="text-3xl sm:text-4xl font-bold leading-tight">Building <br classname="hidden sm:block"></br>The <br classname="hidden sm:block"></br>Future</h2>
            <p className="max-w-xl text-sm sm:text-base leading-relaxed text-gray-500">Hi! I am Lamia, a passionate and enthusiastic aspiring React developer. I am currently building my skills in frontend development, with a focus on React.js, JavaScript, and modern web technologies.<br></br>Though I am at the beginner level and do not have professional work experience yet, I have completed several personal projects to practice my coding skills, including responsive websites and interactive web applications. I enjoy learning by building real projects and continuously improving my understanding of frontend development.<br></br>
            
            I am eager to grow as a React developer, contribute to meaningful projects, and turn my ideas into functional, user-friendly web applications.</p>

            </div>

            </div>



        </section>
    );

};

export default  About;
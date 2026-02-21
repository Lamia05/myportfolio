import React from 'react'
const About= () => {

    return(
        <section className="px-10 bg-gray-50 min-h-screen py-20">
            <div className="flex gap-12">
                <div className="max-w-7xl mx-auto">
                <button className="px-5 py-2 text-sm font-semibold rounded-full bg-black text-white w-fit">About Me</button>

                <div className="flex justify-between items-center px-10 w-full gap-20">
         
                <h2 className="text-3xl font-bold">Building <br></br>The <br></br>Future</h2>
            <h3 className="max-w-xl ml-8 text-gray-500">Hi! I am Lamia, a passionate and enthusiastic aspiring React developer. I am currently building my skills in frontend development, with a focus on React.js, JavaScript, and modern web technologies.<br></br>Though I am at the beginner level and do not have professional work experience yet, I have completed several personal projects to practice my coding skills, including responsive websites and interactive web applications. I enjoy learning by building real projects and continuously improving my understanding of frontend development.<br></br>
            
            I am eager to grow as a React developer, contribute to meaningful projects, and turn my ideas into functional, user-friendly web applications.</h3>

            </div>

            </div>

            </div>

        </section>
    );

};

export default  About;
"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Project1 from "../../../public/assets/vidyaYantra.png"
import Project4 from "../../../public/assets/proj6.png"
import Project3 from "../../../public/assets/sharzeelSaleem.png"
import { animate, useMotionTemplate, useMotionValue, motion } from 'framer-motion'

const Portfolio = () => {

    const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"]

    const projects = [
        { id: 1, year: 2024, title: "SymphonyAi's Tenten", description: "We build an modern Ai based data summarization tool using Technologies like Angular , SCSS and Highcharts, and successfully dilivered it to clients like Dollar General and Family Dollar ", image: Project4, link: "" },

        { id: 2, year: 2023, title: "Vidyayantra", description: "We build a end-to-end e-booking application for physics genius ankit.The tech stack used was Nextjs, tailwind , node , express and MongoDb", image: Project1, link: "https://www.vidyayantra.com/" },
        { id: 3, year: 2023, title: "Sharzeel Saleem Portfolio Website", description: "I build the whole portfolio website for the Phd scholar and a very dear friend of mine Sharzeel Saleem. The Tech stack used was NextJs , Tailwind CSS and Framer Motion", image: Project3, link: "https://sharzeel-saleem-repo.vercel.app/" }
    ]
    const [selectedProject, setSelectedProject] = useState(projects[0])

    const color = useMotionValue(COLORS_TOP[0])
    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror"
        })
    }, [])

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50% , ${color})`

    return (
        <motion.section
            style={{
                backgroundImage
            }}

            id='portfolio' className='py-32 text-white'>
            <div className='max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 '>

                <div>
                    <h2 className='text-6xl font-bold mb-10'>Proud <span className='text-gray-400'>Projects</span></h2>
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            onClick={() => setSelectedProject(project)}
                            className='cursor-pointer mb-8 group'
                        >
                            <p className='text-gray-400 text-lg mb-2 '>{project.year}</p>
                            <h3 className={`text-3xl font-semibold group-hover:text-gray-400 transition-colors duration-300 ${selectedProject.id === project.id ? 'text-gray-200' : ""}`}>{project.title}</h3>
                            {selectedProject.id === project.id && (
                                <div className='border-b-2 border-gray-200 my-4 '>

                                </div>
                            )}
                            {selectedProject.id === project.id && (
                                <p className='text-gray-400 transition-all duration-500 ease-in-out  '>
                                    {project.description}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
                <Image
                    src={selectedProject.image.src}
                    alt="image"
                    className='rounded-xl shadow-lg transition-opacity duration-500 ease-in-out '
                    width={800}
                    height={800}
                />
            </div>

        </motion.section>
    )
}

export default Portfolio

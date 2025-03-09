import React from 'react'
import { FaReact } from 'react-icons/fa6'
import { FaAngular } from 'react-icons/fa6'
import { SiTypescript } from 'react-icons/si'
import { SiJavascript } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'

const stackItems = [
    { id: 1, name: "React", icon: FaReact, color: '#61DAFB' },
    { id: 2, name: "Angular", icon: FaAngular, color: '#c4002b' },
    { id: 3, name: "Next.js ", icon: TbBrandNextjs, color: '#000000' },
    { id: 4, name: "JavaScript ", icon: SiJavascript, color: 'yellow' },

    { id: 5, name: "TypeScript", icon: SiTypescript, color: '#3178c6' },
]


const Stack = () => {
    return (
        <section className='py-16 glass' id='stack'>
            <div className='max-w-[1200px] mx-auto px-4 text-center'>
                <h2 className='text-5xl text-gray-200 font-bold mb-4'>My Stack</h2>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2'>
                    {stackItems.map((item) => (
                        <div key={item.id}
                            className='flex items-center justify-center rounded-xl p-4'
                        >
                            <div className='mb-4 bg-white/10 p-6 rounded-xl '>
                                {React.createElement(item.icon, {
                                    className: "w-32 h-32",
                                    style: { color: item.color }
                                })}
                                <p className='text-gray-400 font-semibold'>{item.name}</p>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </section>
    )
}

export default Stack

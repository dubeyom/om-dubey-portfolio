"use client";

import React from 'react'
import { motion } from 'framer-motion';
const Contact = () => {
    return (
        <section id='contact' className='py-32 text-white max-w-[1200px] mx-auto px-4'>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className='grid lg:grid-cols-2 gap-16'
            >
                <div className='space-y-12'>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className='text-7xl font-bold text-gray-300'
                    >
                        Get in <span className='text-gray-500'>touch</span>

                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className='glass p-8 rounded-2xl space-y-8 '
                    >
                        <div className='space-y-2'>
                            <p className='text-lg text-gray-300'>Phone</p>
                            <a
                                href='tel:+9335616893'
                                className='text-2xl font-semibold hover:text-gray-400 transition duration-300 flex items-center gap-2'
                            >+91 93356 16893
                                <span className='text-gray-500 '>↗</span>
                            </a>
                        </div>

                        <div className='space-y-2'>
                            <p className='text-lg text-gray-300'>Email</p>
                            <a href="mailto:omdubey9977@gmail.com"
                                className='text-2xl font-semibold hover:text-gray-400 transition duration-300 flex items-center gap-2'
                            >omdubey9977@gmail.com
                                <span className='text-gray-500 '>↗</span>

                            </a>
                        </div>
                        <div className='space-y-2'>
                            <p className='text-lg text-gray-300'>Address</p>
                            <address className='text-xl non-italic leading-relaxed'>
                                Amara Khaira Chak <br />
                                Varanasi <br />
                                Uttar Pradesh <br />
                                India <br />
                            </address>

                        </div>



                    </motion.div>

                </div>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className='w-full h-full min-h-[400px] rounded-2xl overflow-hidden'
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!4v1741547128493!6m8!1m7!1sfAZIBdAUsGiiGnwmVFRQlg!2m2!1d25.25383508626842!2d82.95875838879428!3f202.12987690146394!4f-2.7328633339001414!5f0.7820865974627469"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading='lazy'
                    ></iframe>


                </motion.div>
            </motion.div>
        </section>
    )
}

export default Contact

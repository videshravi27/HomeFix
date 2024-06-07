import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className="bg-white text-gray-900">
            <section className="container mx-auto px-4 py-16">
                <div className="mb-12 text-center">
                    <Link to="/about">
                        <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
                    </Link>
                    <p className="mt-4 text-gray-600">Your trusted partner in healthcare management</p>
                </div>
                <div className="-mx-4 flex flex-wrap">
                    <div className="mb-8 w-full px-4 md:mb-0 md:w-1/2">
                        <h2 className="mb-4 text-2xl font-semibold text-gray-800">Our Mission</h2>
                        <p className="text-gray-600">At HomeFix, we strive to enhance the efficiency and quality of healthcare delivery through innovative technology. Our mission is to provide doctors with the tools they need to manage patient care more effectively, streamline communication, and simplify administrative tasks.</p>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                        <h2 className="mb-4 text-2xl font-semibold text-gray-800">Our Vision</h2>
                        <p className="text-gray-600">We envision a world where healthcare professionals can focus more on patient care and less on paperwork. By leveraging the latest advancements in technology, we aim to transform the healthcare industry and improve outcomes for both doctors and patients.</p>
                    </div>
                </div>
                <div className="mt-12 text-center">
                    <h2 className="mb-4 text-2xl font-semibold text-gray-800">Our Team</h2>
                    <p className="mb-8 text-gray-600">We are a team of dedicated professionals with a passion for Social Welfare and Technology.</p>
                    <div className="flex flex-wrap justify-center">
                        <div className="mb-8 w-full px-4 sm:w-1/2 md:w-1/4">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh5SmE9Q-Rxce-i7WgUKQ45a0J9wqReQiqoBZUL6gUI0wJf05Z0_pS1VRsvIPjc3vrygY&usqp=CAU" alt="Team Member" className="mx-auto mb-4 h-32 w-32 rounded-full" />
                            <h3 className="text-xl font-semibold text-gray-800">Pranav R</h3>
                            <p className="text-gray-600">Integration Developer</p>
                        </div>
                        <div className="mb-8 w-full px-4 sm:w-1/2 md:w-1/4">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv6rk0OYGoNRWNZEEGazuX4QHI9DLfy3chqckafXd3lO8fhWJ2WazGzwKy_e5SxJFHvO0&usqp=CAU" alt="Team Member" className="mx-auto mb-4 h-32 w-32 rounded-full" />
                            <h3 className="text-xl font-semibold text-gray-800">Suman T</h3>
                            <p className="text-gray-600">Designer</p>
                        </div>
                        <div className="mb-8 w-full px-4 sm:w-1/2 md:w-1/4">
                            <img src="https://static.vecteezy.com/system/resources/previews/035/914/355/original/ai-generated-3d-cartoon-man-in-white-suit-businessman-character-on-transparent-background-png.png" alt="Team Member" className="mx-auto mb-4 h-32 w-32 rounded-full" />
                            <h3 className="text-xl font-semibold text-gray-800">Videsh Rv</h3>
                            <p className="text-gray-600">Backend Developer</p>
                        </div>
                        <div className="mb-8 w-full px-4 sm:w-1/2 md:w-1/4">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRodNrae8IXtSESlaOhZwc1GALzLRogskNgJQ&s" alt="Team Member" className="mx-auto mb-4 h-32 w-32 rounded-full" />
                            <h3 className="text-xl font-semibold text-gray-800">Teja Sai T G</h3>
                            <p className="text-gray-600"></p>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="bg-white py-6">
                <div className="container mx-auto text-center">
                    <p className="text-gray-600">&copy; 2024 HomeFix. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default AboutUs;

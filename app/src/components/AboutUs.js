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
                    <p className="mt-4 text-gray-600">Your trusted partner in housekeeping management</p>
                </div>
                <div className="-mx-4 flex flex-wrap">
                    <div className="mb-8 w-full px-4 md:mb-0 md:w-1/2">
                        <h2 className="mb-4 text-2xl font-semibold text-gray-800">Our Mission</h2>
                        <p className="text-gray-600">At HomeFix, our mission is to provide efficient and reliable housekeeping management solutions tailored to the needs of our clients. We strive to simplify housekeeping tasks, enhance productivity, and exceed our clients' expectations through innovative technology and exceptional service.</p>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                        <h2 className="mb-4 text-2xl font-semibold text-gray-800">Our Vision</h2>
                        <p className="text-gray-600">We envision a world where housekeeping management is seamless, intuitive, and hassle-free. Our goal is to revolutionize the housekeeping industry by empowering homeowners and professionals with the tools they need to achieve cleanliness, organization, and peace of mind in their living and working spaces.</p>
                    </div>
                </div>
                <div className="mt-12 text-center">
                    <h2 className="mb-4 text-2xl font-semibold text-gray-800">Our Team</h2>
                    <p className="mb-8 text-gray-600">Team behind HomeFix</p>
                    <div className="flex flex-wrap justify-center">
                        <div className="mb-8 w-full px-4 sm:w-1/2 md:w-1/4">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh5SmE9Q-Rxce-i7WgUKQ45a0J9wqReQiqoBZUL6gUI0wJf05Z0_pS1VRsvIPjc3vrygY&usqp=CAU" alt="Team Member" className="mx-auto mb-4 h-32 w-32 rounded-full" />
                            <h3 className="text-xl font-semibold text-gray-800">Pranav R</h3>
                        </div>
                        <div className="mb-8 w-full px-4 sm:w-1/2 md:w-1/4">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv6rk0OYGoNRWNZEEGazuX4QHI9DLfy3chqckafXd3lO8fhWJ2WazGzwKy_e5SxJFHvO0&usqp=CAU" alt="Team Member" className="mx-auto mb-4 h-32 w-32 rounded-full" />
                            <h3 className="text-xl font-semibold text-gray-800">Suman T</h3>
                        </div>
                        <div className="mb-8 w-full px-4 sm:w-1/2 md:w-1/4">
                            <img src="https://static.vecteezy.com/system/resources/previews/035/914/355/original/ai-generated-3d-cartoon-man-in-white-suit-businessman-character-on-transparent-background-png.png" alt="Team Member" className="mx-auto mb-4 h-32 w-32 rounded-full" />
                            <h3 className="text-xl font-semibold text-gray-800">Videsh Rv</h3>
                        </div>
                        <div className="mb-8 w-full px-4 sm:w-1/2 md:w-1/4">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRodNrae8IXtSESlaOhZwc1GALzLRogskNgJQ&s" alt="Team Member" className="mx-auto mb-4 h-32 w-32 rounded-full" />
                            <h3 className="text-xl font-semibold text-gray-800">Teja Sai T G</h3>
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

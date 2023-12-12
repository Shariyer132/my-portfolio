import myImg from '../../assets/Untitled_design__1_-removebg-preview.png'

const About = () => {
    return (
        <div id='about' className='mt-20'>
            <h2 className="text-4xl font-bold text-center pb-20">About Me</h2>
            <div className='flex flex-col md:flex-row gap-7'>
                <div className='w-1/2'>
                    <p className='text-[#CF5366]'>--- About</p>
                    <h3 className='text-4xl font-semibold py-4'>Why You Hire Me?</h3>
                    <p>Hello! I'm a passionate and creative Front-End Web Developer with a keen focus on crafting responsive and user-friendly websites. With expertise in React, JavaScript, and Tailwind CSS, I bring a blend of aesthetic design and efficient functionality to every project. My journey in web development began with a fascination for how websites operate and a desire to create engaging digital experiences. I honed my skills in JavaScript and React, mastering the art of creating dynamic and interactive web applications.</p>
                </div>
                <div className='w-1/2'>
                    <img className='w-9/12 border-b-gray-700' src={myImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;
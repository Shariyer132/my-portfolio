import myImg from '../../assets/IMG20230714181220-removebg-preview-removebg-preview.png';
import pdf from 'https://drive.google.com/file/d/1TsKVGe7bKQESjmto4pxaWZ-KUl3SQQy_/view?usp=sharing';

const About = () => {
    return (
        <div className='mt-20'>
            <h2 className="text-6xl font-bold text-center pb-20">About Me</h2>
            <div className='flex flex-col md:flex-row justify-around'>
                <div className='w-1/2'>
                    <p className='text-[#CF5366]'>--- About</p>
                    <h3 className='text-4xl font-semibold py-4'>Why You Hire Me?</h3>
                    <p>Hello! I'm a passionate and creative Front-End Web Developer with a keen focus on crafting responsive and user-friendly websites. With expertise in React, JavaScript, and Tailwind CSS, I bring a blend of aesthetic design and efficient functionality to every project. My journey in web development began with a fascination for how websites operate and a desire to create engaging digital experiences. I honed my skills in JavaScript and React, mastering the art of creating dynamic and interactive web applications.</p>
                    <a href={pdf} className='btn btn-error btn-outline my-10' download >Download Resume</a>
                </div>
                <div className='w-1/2'>
                    <img className='w-9/12 border-b-gray-700' src={myImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;
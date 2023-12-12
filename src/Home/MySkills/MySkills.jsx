import { TbArrowBigRightFilled } from "react-icons/tb";

const MySkills = () => {
    return (
        <div id="skill" className="my-20">
            <h2 className="text-4xl font-bold text-center pb-20">My Skills</h2>
            <div className="flex gap-6">
                <div className="w-1/2">
                    <h4 className="text-2xl font-semibold">My skills & experiences.</h4>
                    <p className="pt-3">I am a passionate and experienced web developer with a strong foundation in front-end and I know the most basic of back-end technologies. My journey in web development has been marked by constant learning and application, allowing me to master a range of tools from HTML, CSS, and JavaScript to advanced frameworks like React and Node.js. I thrive in dynamic environments and am committed to building responsive, user-centric web applications. My skills are further enhanced by my experience with database management and server-side development using MongoDB and Express.js. This unique blend of skills enables me to contribute effectively to every phase of web development.</p>
                    <a href=""></a>
                    <a 
                        href="https://github.com/Shariyer132"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-outline px-7 mt-5 btn-error"
                    >
                        GitHub
                    </a>
                </div>
                <div className="w-1/2 flex flex-col gap-2">
                    <span className='text-[#CF5366]'>--- Technologies I Know</span>
                <p className="flex items-center gap-2"><TbArrowBigRightFilled/>HTML</p>
                <p className="flex items-center gap-2"><TbArrowBigRightFilled/>CSS</p>
                <p className="flex items-center gap-2"><TbArrowBigRightFilled/>Javascript</p>
                <p className="flex items-center gap-2"><TbArrowBigRightFilled/>React</p>
                <p className="flex items-center gap-2"><TbArrowBigRightFilled/>React Router</p>
                <p className="flex items-center gap-2"><TbArrowBigRightFilled/>Firebase</p>
                <p className="flex items-center gap-2"><TbArrowBigRightFilled/>Node JS</p>
                <p className="flex items-center gap-2"><TbArrowBigRightFilled/>Express JS</p>
                <p className="flex items-center gap-2"><TbArrowBigRightFilled/>MongoDB</p>
                </div>
            </div>
        </div>
    );
};

export default MySkills;
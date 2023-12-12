import pdf from '../../assets/Untitled document.pdf';

const Banner = () => {
    return (
        <div className="text-left lg:pt-40 pt-20 ">
            <p className="text-[#CF5366]">--- Intoducing</p>
            <h1 className="text-6xl py-3 font-bold">Hello
                <br /> I'm Shariyer</h1>
            <p className="max-w-2xl">Since beginning my journey as a web developer nearly 1 years ago, I’ve done full course of web development with Jhankar Mahbub. </p>
            <a href={pdf} className='btn btn-error btn-outline my-10' download >Download Resume</a>
        </div>

    );
};

export default Banner;
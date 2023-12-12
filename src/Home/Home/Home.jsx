import About from "../About/About";
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";
import bannerImage from '../../assets/circles-background-dark-tones_60389-166.avif';

const Home = () => {
    const backgroundStyle = {
        backgroundImage: `url(${bannerImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: '100vh',
    };

    return (
        <div>
                <div className="min-h-screen bg-fixed" style={backgroundStyle}>
                    <div className="max-w-6xl pt-4 mx-auto">
                    <Navbar />
                    <Banner />
                    </div>
                </div>
           <div className="max-w-6xl pt-4 mx-auto">
           <About />
           </div>
        </div>
    );
};

export default Home;

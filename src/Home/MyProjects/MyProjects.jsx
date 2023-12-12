import project1 from '../../assets/Screenshot 2023-12-12 185252.png';
import project2 from '../../assets/Screenshot 2023-12-12 185926.png';
import project3 from '../../assets/Screenshot2.png';

const MyProjects = () => {
    return (
        <div>
            <h2 className="text-3xl font-semibold text-center">My Projects</h2>
            <div className='my-10 flex flex-col gap-7'>
                {/* project1 */}
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure className='w-1/2'><img src={project1} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Digilab Job Seacrher</h2>
                        <div className="card-actions">
                            <a className='btn btn-link' href="https://assignment-eleven-9357a.firebaseapp.com/">live link</a>
                        </div>
                    </div>
                </div>
                {/* project 2 */}
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure className='w-1/2'><img src={project2} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">The Seven find the best product</h2>
                        <div className="card-actions">
                            <a className='btn btn-link' href="https://my-eleventh-assignment-a4058.web.app/">live link</a>
                        </div>
                    </div>
                </div>
                {/* project 3 */}
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure className='w-1/2'><img src={project3} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">SurveySuvvy express your opinion</h2>
                        <div className="card-actions">
                            <a className='btn btn-link' href="https://bistro-boss-restaurant-2b8a0.firebaseapp.com/">live link</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;
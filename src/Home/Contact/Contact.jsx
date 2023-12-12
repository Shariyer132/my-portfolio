
const Contact = () => {

        
    


    return (
        <div className="my-20" id="contact">
            <h2 className="text-3xl font-semibold text-center">Contact Me</h2>
            <p className="text-center">Feel free to ask me any questions.</p>
            <form action="https://formspree.io/f/mbjvnbgv" method="POST">
                <div>
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="name" className="input input-bordered w-full" required />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered w-full" required />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Message</span>
                    </label>
                    <input type="text" name="message" placeholder="message" className="input input-bordered w-full" required />
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-error text-xl" type="submit"   value="Send" />
                </div>
            </form>
        </div>
    );
};

export default Contact;

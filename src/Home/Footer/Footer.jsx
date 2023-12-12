
const Footer = () => {
    const socialLinks = [
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/sojol-shariyer-hossain-6222992a3/',
            badge: 'https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white'
        },
        {
            name: 'Twitter',
            url: 'https://twitter.com/Shariyer49957',
            badge: 'https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white'
        },
        {
            name: 'GitHub',
            url: 'https://github.com/Shariyer132',
            badge: 'https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white'
        }
    ];

    return (
        <footer className="flex justify-around items-center p-4 bg-stone-950 py-5 mt-10">
            <div className="logo"><a href="#" className="text-3xl font-semibold"><span className="text-[#FF2F00]">S</span>hariyer<span className="text-[#FF2F00]">.</span></a></div>
            <p className="text-sm">We all know that creative juices cannot flow endlessly</p>
            <div className="flex gap-2">
                {socialLinks.map(link => (
                    <a 
                        key={link.name}
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center"
                    >
                        <img src={link.badge} alt={`${link.name} Badge`} />
                    </a>
                ))}
            </div>
        </footer>
    );
};

export default Footer;

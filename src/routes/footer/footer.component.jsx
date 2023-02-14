const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className="w-full bg-black text-white p-6 text-center">&copy;{year} <a href='https://bryanparmelee.dev/' target='blank'>Bryan Parmelee</a></div>
    )
}

export default Footer;
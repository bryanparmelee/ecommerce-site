const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="w-full bg-black p-6 text-center text-sm text-white">
      &copy;{year}{" "}
      <a
        className="hover:text-red-500"
        href="https://bryanparmelee.dev/"
        target="blank"
      >
        Bryan Parmelee
      </a>
      <p className="text-red-500">
        This site is part of a developer portfolio and is not an actual store.
      </p>
      <p className="text-red-500">
        Product info and images courtesy of{" "}
        <a
          className="hover:text-white"
          href="https://fakestoreapi.com/"
          target="blank"
        >
          Fake Store API
        </a>
      </p>
    </div>
  );
};

export default Footer;

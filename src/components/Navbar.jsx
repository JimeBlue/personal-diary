import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar h-32 min-h-0 justify-center bg-pink">
      <img src={logo} alt="MyDiary logo" className="h-28 lg:h-32 w-auto" />
    </nav>
  );
};

export default Navbar;
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar justify-center bg-pink">
      <img src={logo} alt="MyDiary logo" className="w-48" />
    </nav>
  );
};

export default Navbar;
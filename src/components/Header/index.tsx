import NavBar from '../Navbar';
import Button from '../Button';

const Header = () => {
  return (
    <header className="grid grid-cols-6 items-center sticky">
      <h1 className="font-secondary text-4xl font-bold col-span-3 md:col-span-1 md:row-start-1">
        COLO's
      </h1>
      <NavBar />
      <Button
        text="HIRE ME"
        className="w-32 justify-self-end col-span-3 md:col-span-1 md:row-start-1"
      />
    </header>
  );
};

export default Header;

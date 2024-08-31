import ColoLink from '../Link';

const MENU_ITEMS = ['Home', 'About', 'Projects'];

const NavBar = () => {
  return (
    <nav className="bg-transparent px-8 py-4 row-start-2 col-span-6 mt-3 md:col-span-4 md:row-start-1 justify-self-center">
      <ul className="flex space-x-8 text-white font-semibold">
        {MENU_ITEMS.map((item) => (
          <li key={item} className="relative group">
            <ColoLink
              name={item.toUpperCase()}
              to={item === 'Home' ? '/' : item.toLowerCase()}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;

const NavItem = ({ href, children }) => {
    return (
      <li className="mx-5 my-4 md:my-0">
        <a
          href={href}
          className="relative block text-lg font-medium text-white md:text-black md:py-1 before:hov hover:before:hov2"
        >
          {children}
        </a>
      </li>
    );
  };
  
  export default NavItem;
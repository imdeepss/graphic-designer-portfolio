const Header = () => {
  return (
    <header className="sticky top-0 py-5">
      <div className="flex items-center justify-between gap-10 text-xl font-medium text-primary">
        <h1 className="">LOGO</h1>
        <ul className="flex items-center justify-center gap-5">
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

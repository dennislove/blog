import logo from '../../assets/avatar.jpg';

export const Header = () => {
  return (
    <header className="h-[160px] w-full bg-gradient-to-r from-light-primary to-[#050C9C] relative">
      <div className=" absolute left-1/2 -translate-x-1/2 top-2/3 -translate-y-1/2">
        <img
          src={logo}
          alt="logo"
          className=" rounded-full w-48 h-48 bg-contain"
        />
      </div>
    </header>
  );
};

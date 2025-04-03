interface LogoProps {
  theme: 'light' | 'dark';
}

const Logo = ({ theme }: LogoProps) => {
  const textColor = theme === 'light' ? 'text-[#1A2B3C]' : 'text-white';
  const diamondFill = theme === 'light' ? '#1A2B3C' : '#FFFFFF';
  
  return (
    <div className="flex items-center">
      <div className="mr-2">
        <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 0L40 20L20 40L0 20L20 0Z" fill="#FF7A00"/>
          <path d="M20 10L30 20L20 30L10 20L20 10Z" fill={diamondFill}/>
        </svg>
      </div>
      <div>
        <h1 className="text-xl md:text-2xl font-[Montserrat] font-bold tracking-tight">
          <span className="text-[#FF7A00]">Vikram</span> 
          <span className={textColor}>Engineering</span>
        </h1>
        <p className="text-xs text-[#546E7A] hidden md:block font-[Roboto_Mono] tracking-wide">PRECISION • INNOVATION • QUALITY</p>
      </div>
    </div>
  );
};

export default Logo;

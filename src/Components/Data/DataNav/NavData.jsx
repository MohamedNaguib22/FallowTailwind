const NavData = (props) => {
  return (
    <li className="group hover:bg-blue-100  transition-colors py-[10px] px-[8px] w-full duration-[0.3s] rounded-[5px]">
      <a href="/#" className={` w-full ${props.className}`}>
        {props.link}
      </a>
    </li>
  );
}

export default NavData
export const NavDataImgJsx = (props) => {
  return (
    <li className="w-[260px] h-auto">
      <img src={props.img} alt="imgNav" className="max-w-full h-auto" />
    </li>
  );
}
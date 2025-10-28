import { RouterLinks } from "../../../constants/links";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="text-[20px] text-white h-[40px] px-[10px] py-[5px] bg-neutral-600 flex items-center sm:h-[50px] sm:px-[20px] sm:py-[10px] text-[16px]">
      Header Title
      <Link
        className={"pl-[20px] text-[16px] duration-300 hover:opacity-70"}
        to={RouterLinks.Home}
      >
        Home
      </Link>
    </div>
  );
}

export default Header;

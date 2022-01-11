import logo from "../../assets/img/mobile/logo.png";
import logocolor from "../../assets/img/mobile/logocolor.png";
export default function Header({ color }) {
  if (color === 2) return <></>;
  else
    return (
      <div>
        <img
          className="fixed z-10   w-[25vw] ml-[5vw] mt-[3vh]   "
          src={color === 0 ? logocolor : logo}
          alt=""
        />
      </div>
    );
}

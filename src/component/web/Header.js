import logo from "../../assets/img/header/logo.png";
export default function Header() {
  return (
    <div className="absolute z-10 flex justify-center w-screen ">
      <div className="flex w-[80vw] items-center justify-between  mt-[2.8vw]">
        <img className="w-[10vw]" src={logo} alt="" />
      </div>
    </div>
  );
}

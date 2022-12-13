import Image from "next/image"
import Logo from "@assets/Logo.png"


function Navbar() {
  return (
    <nav className=" bg-white w-full justify-center flex border-b fixed z-10">
      <div className=" w-[85rem] flex items-center justify-between p-2">
        <Image
          src={Logo}
          alt="Kulola Logo"
          width={86}
          height={23}
        />
        <div className=" flex space-x-16">
          <div className=" cursor-pointer hover:underline">Kampanye</div>
          <div className=" cursor-pointer hover:underline">Tentang kami</div>
          <div className=" cursor-pointer hover:underline">Mari berperan</div>
        </div>
        <div className=" flex space-x-8 items-center">
          <div className=" cursor-pointer hover:underline ">Login</div>
          <button className=" p-2 px-4 bg-green-600 text-white rounded-lg border border-green-600 hover:bg-transparent hover:text-green-600 duration-300">Donasi</button>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
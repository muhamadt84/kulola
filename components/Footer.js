import IcFb from "@assets/Fb.svg"
import IcIg from "@assets/Ig.svg"
import IcTw from "@assets/Tw.svg"

function Footer() {
  return (
    <div className=" flex justify-center w-full p-4">
      <div className=" w-[85rem] flex justify-between items-center space-y-3">
        <div className=" flex space-x-3">
          <IcFb />
          <IcIg />
          <IcTw />
        </div>
        <p className=" italic text-sm">© Copyright by <b>Kulola.</b></p>
      </div>
    </div>
  )
}
export default Footer
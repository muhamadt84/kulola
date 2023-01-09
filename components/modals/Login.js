import ICGoogle from "@assets/Google.svg"

function Login(props) {
  return (
    <div
      onClick={props.onClick}
      className={` top-0 fixed bg-black/50 backdrop-opacity-95 w-full h-full z-10 transition-all flex justify-center items-center`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className=" bg-white rounded-lg relative w-1/4"
      >
        <div className=" flex flex-col p-8 px-20 text-center space-y-4">
          <div>
            <div className=" font-medium text-3xl">Selamat datang</div>
            <div className=" text-gray-500 font-light mt-1" >Selamat datang!, mohon isi detail login</div>
          </div>
          <button className=" w-full py-3 flex space-x-2 justify-center bg-white text-sm font-medium border border-gray-300 rounded-md">
            <ICGoogle />
            <span> Login dengan Google </span></button>
          <p className=" text-sm text-gray-500 font-light my-4">atau</p>
          <input className=" py-2  border-b border-gray-300 text-sm focus:outline-none placeholder:font-light" placeholder="Email" />
          <input className=" py-2  border-b border-gray-300 text-sm focus:outline-none placeholder:font-light" placeholder="Kata sandi" />
          <div className=" text-blue-500 underline text-right font-light">Lupa password</div>
          <button className=" w-full py-2 bg-blue-500 text-white text-sm font-medium border border-blue-500 rounded-md">Login</button>
          <div>
            <span className=" text-gray-500 font-light">Belum memiliki akun?</span>
            <span className=" underline font-medium"> Registrasi gratis</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Login
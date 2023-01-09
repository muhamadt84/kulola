function Host(props) {
  return (
    <div
      onClick={props.onClick}
      className={` top-0 fixed bg-black/50 backdrop-opacity-95 w-full h-full z-10 transition-all flex justify-center items-center`}
    >

      <div
        onClick={(e) => e.stopPropagation()}
        className=" bg-white rounded-lg relative w-[26%]"
      >
        <div className=" flex flex-col p-8 px-20 text-center">
          <div>
            <div className=" font-medium text-3xl mt-4">Selamat datang di Kulola</div>
            <div className=" text-gray-500 font-light mt-1" >Petunjuk pendaftaran host Kulola!</div>
          </div>
          <div className=" flex flex-row space-x-4 mt-4">
            <div>
              <div className=" rounded-full border border-black w-8 h-8 items-center justify-center flex">1</div>
            </div>
            <div className=" text-left">Daftarkan diri agar tetanggamu dapat menghubungi</div>
          </div>
          <div className=" flex flex-row space-x-4 mt-4">
            <div>
              <div className=" rounded-full border border-black w-8 h-8 items-center justify-center flex">2</div>
            </div>
            <div className=" text-left">Tambahkan detail kebutuhanmu. Kita akan menandai alamatmu di peta agar pendonor dapat melihat dan mengontakmu</div>
          </div>
          <button className=" w-full py-2 bg-yellow-400 text-white text-sm font-medium border border-yellow-400 rounded-md my-16">Registrasi Gratis</button>
        </div>
      </div>
    </div>
  )
}
export default Host
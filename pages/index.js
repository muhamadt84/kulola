import Image from "next/image"



import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Layout from "@components/Layout"
import CursiveArrow from "@assets/CursiveArrow.png"
import Avatar from "@assets/Avatar.png"

import Farmer1 from "@assets/Farmer1.svg"
import Farmer2 from "@assets/Farmer2.svg"
import Pendonor from "@assets/Pendonor.svg"
import Host from "@assets/Host.svg"

import Seed from "@assets/Seed.svg"
import Worm from "@assets/Worm.svg"
import Animal from "@assets/Animal.svg"

import PrevArrow from "@assets/PrevArrow.svg"
import NextArrow from "@assets/NextArrow.svg"

export default function Home() {
  const review = [1, 2, 3, 4, 5, 6]
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    variableWidth: true,
    arrows: true,
    prevArrow: <ArrowSlider variant="prev" />,
    nextArrow: <ArrowSlider variant="next" />,
    // centerMode: true,
  };

  function ArrowSlider(props) {
    const { className, onClick, variant } = props;
    return (
      <div className={className} onClick={onClick}>
        {variant === "prev" ? <PrevArrow /> : <NextArrow />}
      </div>
    );
  }
  return (
    <Layout>
      <section className=" bg-no-repeat bg-cover bg-center w-full" style={{ backgroundImage: `url('../assets/Banner.png')` }}>
        <div className=" h-[80rem]">
          <div className=" w-full min-h-screen flex justify-center items-center">
            <div className="flex w-[85rem] justify-between">
              <div className="flex flex-col rounded-xl backdrop-blur-md p-8 px-12">
                <div className=" text-2xl text-yellow-300 mt-2">Bertemu <span className=" text-white font-light">pengolah</span></div>
                <div className=" text-2xl text-yellow-300 mt-2">Daur ulang <span className=" text-white font-light">sampah</span></div>
                <div className=" text-2xl text-yellow-300 mt-2">Membangun <span className=" text-white font-light">penghijauan</span></div>
                <div className=" flex flex-row items-center  mt-6 space-x-4">
                  <div className=" text-xl text-yellow-300 font-light">Bergabung</div>
                  <div className=" border-l-2 border-white">&nbsp;</div>
                  <button className=" p-1 px-3 bg-green-600 text-white rounded-lg border border-green-600 hover:bg-transparent hover:text-green-600 duration-300">Buka Peta</button>
                </div>
              </div>
              <Image
                src={CursiveArrow}
                alt="Arrow dont waste"
                width={519}
                height={245}
              />
            </div>
          </div>
        </div>
      </section>

      <section className=" bg-[#F1F8F2] flex flex-col justify-center items-center min-h-screen">
        <p className=" text-4xl text-center text-[#00680B]">
          Kami mengubah bagaimana dunia<br /> memandang sampah menjadi sebuah<br /> komoditas, dengan kekuatan gotong-royong<br /> dan teknologi.
        </p>
        <button className=" mt-12 p-2 w-60 rounded-2xl border border-yellow-400 hover:bg-yellow-400 hover:text-white duration-300 focus:outline-none">Pelajari lebih lanjut</button>
      </section>

      <section className=" bg-white flex justify-center py-12">
        <div className=" w-[48rem]">
          <div className=" text-4xl text-center">Apa itu Kulola?</div>
          <div className=" flex flex-col justify-center items-center space-y-8 pt-12">
            <div className="  text-xl">
              Kulola menghubungkan orang-orang yang ingin mendaur ulang sampah makanan dan sampah organik lainnya dengan partner Kulola yang sudah terjun dalam pengolahan sampah, komposting, budidaya ulat, ataupun mengolah makanan ternak.
            </div>
            <div className=" text-xl">
              Sekarang kamu dapat memilah sampah organik di lingkungan kamu juga mengetahui partner Kulola terdekat!
            </div>
            <button className=" p-2 w-60 bg-yellow-400 text-white rounded-2xl border border-yellow-400 hover:bg-white hover:text-yellow-400 duration-300 focus:outline-none">Lihat bagaimana caranya!</button>
            <div className=" grid grid-cols-2 gap-16">
              <div className=" flex flex-col items-center space-y-8">
                <Farmer1 />
                <p className=" italic text-justify font-light">
                  <b>Rudi</b> adalah seorang pensiunan pegawai negeri. Dia sangat suka makanan sehat, dan sayur-sayuran. Dia tidak punya komposter sampah organik, dia mendonorkan sampah organiknya pada <b>Pak William,</b> dengan Kulola mereka bersama-sama menghasilkan pupuk kompos.
                </p>
              </div>
              <div className=" flex flex-col items-center space-y-8">
                <Farmer2 />
                <p className=" italic text-justify font-light">
                  <b>Pak William</b> adalah seorang petani kangkung, <b>Rudi</b> sering mendonorkan sampah sisa makanan dan sayuran organik lainnya. Tanaman kangkung Pak William sekarang tumbuh subur dengan nutrisi pupuk organik.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" bg-[#F1F8F2] flex justify-center py-12">
        <div className=" w-[48rem]">
          <div className=" text-4xl text-center">Bagaimana cara memulai?</div>
          <div className=" flex flex-col justify-center items-center space-y-8 pt-12">
            <div className="  text-xl">
              Klik opsi dibawah untuk bergabung dan terkoneksi dengan partner Kulola. Tentukan bagaimana kamu berkontribusi dengan memilih sebagai pendonor, maupun pengolah sampah organik.
            </div>
            <div className=" grid grid-cols-2 gap-16">
              <div className=" flex flex-col items-center space-y-8 p-8 px-12 border border-gray-500 rounded-xl">
                <div>Pendonor</div>
                <Pendonor />
                <p className=" text-justify ">
                  Temukan host terdekatmu, dengan mesin kompos, budidaya cacing, kebun, maupun pakan ternak. Kirim pesan dan tentukan donor yang akan kamu kirim.
                </p>
              </div>
              <div className=" flex flex-col items-center space-y-8 p-8 px-12 border border-gray-500 rounded-xl">
                <div>Host</div>
                <Host />
                <p className=" text-justify ">
                  Beritahu kami lokasi mesin kompos, budidaya cacing, kebun, maupun ternak yang kamu miliki. Tambahkan lokasi di peta, kami akan bantu baik perorangan maupun komunitas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" flex flex-col justify-center items-center py-12">
        <div className=" text-4xl text-center">Lebih dari 28 host siap donor</div>
        <div className=" py-12 flex justify-center">
          <Slider
            {...settings}
            className=" w-[85rem] pb-12"
          >
            {review?.map(row => (
              <div className=" px-2">
                <div key={row} className=" bg-[#F1F8F2] p-8 py-12 border border-gray-500 rounded-xl w-[27rem]">
                  <div className=" flex space-x-4">
                    <Image
                      src={Avatar}
                      alt="Avatar"
                      width={100}
                      height={100}
                      className=" rounded-xl"
                    />
                    <div>
                      <div className=" grid grid-cols-2 gap-4  ">
                        <div className=" bg-white p-2 px-3 w-32 flex items-center space-x-2 border rounded-full">
                          <Seed />
                          <span className=" text-xs italic font-light">Komposter</span>
                        </div>
                        <div className=" bg-white p-2 px-3 w-32 flex items-center space-x-2 border rounded-full">
                          <Worm />
                          <span className=" text-xs italic font-light">Cacing magot</span>
                        </div>
                        <div className=" bg-white p-2 px-3 w-32 flex items-center space-x-2 border rounded-full">
                          <Animal />
                          <span className=" text-xs italic font-light">Ternak</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" mt-4">
                    <span className=" font-medium text-xl">John Lafrey</span>
                    <span className=" italic font-light"> (372 Transaksi)</span>
                  </div>
                  <div className=" italic font-light mt-2">Bandung, Jawa Barat</div>
                  <p className=" font-light mt-8">
                    “Sampah organik sangat membantu saya dalam kehidupan berladang, kebun dan ternak penuh nutrisi dengan bantuan sisa makanan dari Kulola”
                  </p>
                  <div className=" flex justify-between mt-12">
                    <button className=" p-3 w-40 bg-white rounded-lg shadow hover:bg-green-600 hover:text-white focus:outline-none duration-300">Lihat detail</button>
                    <button className=" p-3 w-40 bg-green-600 text-white rounded-lg shadow border border-green-600 hover:bg-white hover:text-green-600 focus:outline-none duration-300">Donor sekarang</button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <button className=" mt-12 p-2 w-60 rounded-2xl border border-yellow-400 hover:bg-yellow-400 hover:text-white duration-300 focus:outline-none">Lihat lebih banyak</button>
      </section>

      <section className=" bg-[#F1F8F2] flex justify-center py-12">
        <div className=" w-[48rem]">

          <div className=" text-4xl text-center">Bagaimana Kulola di mata mereka?</div>
          <div className=" grid grid-cols-3 gap-4 gap-y-8 pt-12">
            {review?.map(row => (
              <div key={row} className="bg-white p-4 py-6 rounded-xl border border-gray-500">
                <div className=" flex flex-col justify-center items-center">
                  <div className=" w-16 h-16 rounded-full bg-[#D1B476]" />
                  <div className=" italic font-bold pt-2">Najwa Rangkit</div>
                  <div className=" italic text-sm text-[#D1B476]">Ibu Rumah Tangga</div>
                </div>
                <p className=" italic pt-4 font-light">
                  “<b>Kulola</b> menjawab kebutuhan akan permasalahan sampah di rumah saya.  Sebelumnya, sisa makanan di rumah selalu menumpuk ditempat sampah”
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>
    </Layout>
  )
}

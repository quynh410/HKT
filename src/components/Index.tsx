import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

export default function Index() {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  //   const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState([false, false, false, false, false]);

  const toggleDashboardMenu = () => {
    setIsDashboardOpen(!isDashboardOpen);
  };
  const toggleLike = (index: any) => {
    const newLikes = [...likes];
    newLikes[index] = !newLikes[index];
    setLikes(newLikes);
  };
  return (
    <div>
      <header className="bg-red-500 py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-white font-bold text-xl">
              Rikkei_Shop
            </a>
          </div>
          <div className="flex items-center">
            <input
              type="text"
              className="bg-white rounded-full py-2 px-4 mr-10 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Search..."
            />
            <a href="#" className="text-white mr-4 hover:text-black ">
              <i className="fa-solid fa-cart-shopping text-white mr-2 hover:text-black"></i>
              Giỏ hàng
            </a>
            <a href="#" className="text-white hover:text-black">
              Đăng nhập
            </a>
          </div>
        </div>
      </header>
      <nav className="mt-[50px]">
        <Carousel>
          <Carousel.Item interval={2000}>
            <img
              src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/banner/banner-1.jpg?raw=true"
              alt=""
              className="ml-[490px]"
            />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/banner/banner-2.jpg?raw=true"
              alt=""
              className="ml-[490px]"
            />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/banner/banner-3.jpg?raw=true"
              alt=""
              className="ml-[490px]"
            />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/banner/banner-4.jpg?raw=true"
              alt=""
              className="ml-[490px]"
            />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/banner/banner-5.jpg?raw=true"
              alt=""
              className="ml-[490px]"
            />
          </Carousel.Item>
        </Carousel>
      </nav>
      <br /> <br />
      <body className="flex">
        <div className="w-[290px] h-[390px] bg-gray-100 rounded p-4">
          <nav className="space-y-2">
            <a
              href="#"
              className="hover:bg-gray-50 rounded py-2 px-4 flex"
              onClick={toggleDashboardMenu}
            >
              <i className="fa-solid fa-bars mr-2"></i>
              Danh Mục Sản Phẩm
              <span className="material-symbols-outlined">
                {isDashboardOpen ? "arrow_drop_up" : "arrow_drop_down"}
              </span>
            </a>

            {isDashboardOpen && (
              <div className="ml-6 space-y-2">
                <a
                  href="#"
                  className="hover:bg-gray-50 hover:text-orange-500 rounded py-2 px-4 block"
                >
                  Tất cả Sản Phẩm
                </a>
                <a
                  href="#"
                  className="hover:bg-gray-50 hover:text-orange-500 rounded py-2 px-4 block"
                >
                  Thiết Bị Điện Tử
                </a>
                <a
                  href="#"
                  className="hover:bg-gray-50 hover:text-orange-500 rounded py-2 px-4 block"
                >
                  Sách
                </a>
                <a
                  href="#"
                  className="hover:bg-gray-50 hover:text-orange-500 rounded py-2 px-4 block"
                >
                  Đồ Tiêu Dùng
                </a>
                <a
                  href="#"
                  className="hover:bg-gray-50 hover:text-orange-500 rounded py-2 px-4 block"
                >
                  Thời Trang
                </a>
              </div>
            )}
          </nav>
        </div>

        <div className="flex-1 p-2 bg-gray-50 shadow-md">
          <div className="container mx-auto my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThietBiDienTu/iphone11.jpg?raw=true"
                alt="iPhone 11"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">iPhone 11</h3>
                <p className="text-orange-700 text-center">29,000,000₫</p>
                <button
                  className={`text-xl mr-2 ${
                    likes[0] ? "text-red-500" : "text-gray-500"
                  }`}
                  onClick={() => toggleLike(0)}
                >
                  <i className="fa-solid fa-heart"></i>
                </button>
                <span className="ml-[135px]">30 đã bán</span>
                <br /> <br />
                <div className="flex gap-[142px]">
                  <span className="text-gray-400">Apple</span>
                  <span className="text-gray-400">Hà Nội</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThietBiDienTu/iphone11pro.jpg?raw=true"
                alt="iPhone 11 pro"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">iPhone 11 Pro</h3>
                <p className="text-orange-700 text-center">30,000,000₫</p>
                <button
                  className={`text-xl mr-2 ${
                    likes[1] ? "text-red-500" : "text-gray-500"
                  }`}
                  onClick={() => toggleLike(0)}
                >
                  <i className="fa-solid fa-heart"></i>
                </button>
                <span className="ml-[135px]">50 đã bán</span>
                <br /> <br />
                <div className="flex gap-[142px]">
                  <span className="text-gray-400">Apple</span>
                  <span className="text-gray-400">Hà Nội</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThietBiDienTu/iphone11promax.jpg?raw=true"
                alt="iphone 11 promax"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">iPhone 11 ProMax</h3>
                <p className="text-orange-700 text-center">35,000,000₫</p>
                <button
                  className={`text-xl mr-2 ${
                    likes[2] ? "text-red-500" : "text-gray-500"
                  }`}
                  onClick={() => toggleLike(0)}
                >
                  <i className="fa-solid fa-heart"></i>
                </button>
                <span className="ml-[135px]">30 đã bán</span>
                <br /> <br />
                <div className="flex gap-[142px]">
                  <span className="text-gray-400">Apple</span>
                  <span className="text-gray-400">Hà Nội</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThietBiDienTu/iphone12.jpg?raw=true"
                alt="iphone 12"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">iPhone 12</h3>
                <p className="text-orange-700 text-center">40,000,000₫</p>
                <button
                  className={`text-xl mr-2 ${
                    likes[3] ? "text-red-500" : "text-gray-500"
                  }`}
                  onClick={() => toggleLike(0)}
                >
                  <i className="fa-solid fa-heart"></i>
                </button>
                <span className="ml-[135px]">30 đã bán</span>
                <br /> <br />
                <div className="flex gap-[142px]">
                  <span className="text-gray-400">Apple</span>
                  <span className="text-gray-400">Hà Nội</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThietBiDienTu/iphone12mini.jpg?raw=true"
                alt="iphone 12 mini"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">iPhone 12 Mini</h3>
                <p className="text-orange-700 text-center">31,000,000₫</p>
                <button
                  className={`text-xl mr-2 ${
                    likes[4] ? "text-red-500" : "text-gray-500"
                  }`}
                  onClick={() => toggleLike(0)}
                >
                  <i className="fa-solid fa-heart"></i>
                </button>
                <span className="ml-[135px]">10 đã bán</span>
                <br /> <br />
                <div className="flex gap-[142px]">
                  <span className="text-gray-400">Apple</span>
                  <span className="text-gray-400">Hà Nội</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThietBiDienTu/iphone12pro.jpg?raw=true"
                alt="iphone 12 pro"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">iPhone 12 Pro</h3>
                <p className="text-orange-700 text-center">20,000,000₫</p>
                <button
                  className={`text-xl mr-2 ${
                    likes[5] ? "text-red-500" : "text-gray-500"
                  }`}
                  onClick={() => toggleLike(0)}
                >
                  <i className="fa-solid fa-heart"></i>
                </button>
                <span className="ml-[135px]">33 đã bán</span>
                <br /> <br />
                <div className="flex gap-[142px]">
                  <span className="text-gray-400">Apple</span>
                  <span className="text-gray-400">Hà Nội</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThietBiDienTu/iphone12promax.jpg?raw=true"
                alt="iphone 12 promax"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">iPhone 12 ProMax</h3>
                <p className="text-orange-700 text-center">40,000,000₫</p>
                <button
                  className={`text-xl mr-2 ${
                    likes[6] ? "text-red-500" : "text-gray-500"
                  }`}
                  onClick={() => toggleLike(0)}
                >
                  <i className="fa-solid fa-heart"></i>
                </button>
                <span className="ml-[135px]">12 đã bán</span>
                <br /> <br />
                <div className="flex gap-[142px]">
                  <span className="text-gray-400">Apple</span>
                  <span className="text-gray-400">Hà Nội</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThietBiDienTu/iphone6.jpg?raw=true"
                alt="iphone 6"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">iPhone 6</h3>
                <p className="text-orange-700 text-center">7,000,000₫</p>
                <button
                  className={`text-xl mr-2 ${
                    likes[7] ? "text-red-500" : "text-gray-500"
                  }`}
                  onClick={() => toggleLike(0)}
                >
                  <i className="fa-solid fa-heart"></i>
                </button>
                <span className="ml-[135px]">89 đã bán</span>
                <br /> <br />
                <div className="flex gap-[142px]">
                  <span className="text-gray-400">Apple</span>
                  <span className="text-gray-400">Hà Nội</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThietBiDienTu/iphone7plus.jpg?raw=true"
                alt="iphone 7 plus"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">iPhone 7 Plus</h3>
                <p className="text-orange-700 text-center">14,000,000₫</p>
                <button
                  className={`text-xl mr-2 ${
                    likes[8] ? "text-red-500" : "text-gray-500"
                  }`}
                  onClick={() => toggleLike(0)}
                >
                  <i className="fa-solid fa-heart"></i>
                </button>
                <span className="ml-[135px]">80 đã bán</span>
                <br /> <br />
                <div className="flex gap-[142px]">
                  <span className="text-gray-400">Apple</span>
                  <span className="text-gray-400">Hà Nội</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThietBiDienTu/iphone7.jpg?raw=true"
                alt="iPhone 7"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">iPhone 7</h3>
                <p className="text-orange-700 text-center">17,000,000₫</p>
                <button
                  className={`text-xl mr-2 ${
                    likes[9] ? "text-red-500" : "text-gray-500"
                  }`}
                  onClick={() => toggleLike(0)}
                >
                  <i className="fa-solid fa-heart"></i>
                </button>
                <span className="ml-[135px]">50 đã bán</span>
                <br /> <br />
                <div className="flex gap-[142px]">
                  <span className="text-gray-400">Apple</span>
                  <span className="text-gray-400">Hà Nội</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThietBiDienTu/iphone8.jpg?raw=true"
                alt="iPhone 8"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">iPhone 8</h3>
                <p className="text-orange-700 text-center">17,500,000₫</p>
                <button
                  className={`text-xl mr-2 ${
                    likes[10] ? "text-red-500" : "text-gray-500"
                  }`}
                  onClick={() => toggleLike(0)}
                >
                  <i className="fa-solid fa-heart"></i>
                </button>
                <span className="ml-[135px]">39 đã bán</span>
                <br /> <br />
                <div className="flex gap-[142px]">
                  <span className="text-gray-400">Apple</span>
                  <span className="text-gray-400">Hà Nội</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThietBiDienTu/iphone8plus.jpg?raw=true"
                alt="iPhone 8 plus"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">iPhone 8 Plus</h3>
                <p className="text-orange-700 text-center">18,750,000₫</p>
                <button
                  className={`text-xl mr-2 ${
                    likes[11] ? "text-red-500" : "text-gray-500"
                  }`}
                  onClick={() => toggleLike(0)}
                >
                  <i className="fa-solid fa-heart"></i>
                </button>
                <span className="ml-[135px]">45 đã bán</span>
                <br /> <br />
                <div className="flex gap-[142px]">
                  <span className="text-gray-400">Apple</span>
                  <span className="text-gray-400">Hà Nội</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThietBiDienTu/iphonex.jpg?raw=true"
                alt="iPhone x"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">iPhone X</h3>
                <p className="text-orange-700 text-center">20,000,000₫</p>
                <button
                  className={`text-xl mr-2 ${
                    likes[12] ? "text-red-500" : "text-gray-500"
                  }`}
                  onClick={() => toggleLike(0)}
                >
                  <i className="fa-solid fa-heart"></i>
                </button>
                <span className="ml-[135px]">60 đã bán</span>
                <br /> <br />
                <div className="flex gap-[142px]">
                  <span className="text-gray-400">Apple</span>
                  <span className="text-gray-400">Hà Nội</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThietBiDienTu/iphonexr.jpg?raw=true"
                alt="iPhone Xr"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">iPhone Xr</h3>
                <p className="text-orange-700 text-center">27,000,000₫</p>
                <button
                  className={`text-xl mr-2 ${
                    likes[13] ? "text-red-500" : "text-gray-500"
                  }`}
                  onClick={() => toggleLike(0)}
                >
                  <i className="fa-solid fa-heart"></i>
                </button>
                <span className="ml-[135px]">50 đã bán</span>
                <br /> <br />
                <div className="flex gap-[142px]">
                  <span className="text-gray-400">Apple</span>
                  <span className="text-gray-400">Hà Nội</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThietBiDienTu/iphonexs.jpg?raw=true"
                alt="iPhone Xs"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">iPhone Xs</h3>
                <p className="text-orange-700 text-center">80,000,000₫</p>
                <button
                  className={`text-xl mr-2 ${
                    likes[14] ? "text-red-500" : "text-gray-500"
                  }`}
                  onClick={() => toggleLike(0)}
                >
                  <i className="fa-solid fa-heart"></i>
                </button>
                <span className="ml-[135px]">90 đã bán</span>
                <br /> <br />
                <div className="flex gap-[142px]">
                  <span className="text-gray-400">Apple</span>
                  <span className="text-gray-400">Hà Nội</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThietBiDienTu/iphonexsmax.jpg?raw=true"
                alt="iPhone Xs Max"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">iPhone Xs Max</h3>
                <p className="text-orange-700 text-center">35,000,000₫</p>
                <button
                  className={`text-xl mr-2 ${
                    likes[15] ? "text-red-500" : "text-gray-500"
                  }`}
                  onClick={() => toggleLike(0)}
                >
                  <i className="fa-solid fa-heart"></i>
                </button>
                <span className="ml-[135px]">35 đã bán</span>
                <br /> <br />
                <div className="flex gap-[142px]">
                  <span className="text-gray-400">Apple</span>
                  <span className="text-gray-400">Hà Nội</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThoiTrang/ao1.jpg?raw=true"
                alt="Áo 1"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">Áo Phông Đen</h3>
                <p className="text-orange-700 text-center">1,000,000₫</p>
                <button
                  className={`text-xl mr-2 ${
                    likes[16] ? "text-red-500" : "text-gray-500"
                  }`}
                  onClick={() => toggleLike(0)}
                >
                  <i className="fa-solid fa-heart"></i>
                </button>
                <span className="ml-[135px]">78 đã bán</span>
                <br /> <br />
                <div className="flex gap-[142px]">
                  <span className="text-gray-400">Nike</span>
                  <span className="text-gray-400">Hà Nội</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThoiTrang/ao2.jpg?raw=true"
                alt="áo 2"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">Áo Phông Trắng</h3>
                <p className="text-orange-700 text-center">2,000,000₫</p>
                <button
                  className={`text-xl mr-2 ${
                    likes[17] ? "text-red-500" : "text-gray-500"
                  }`}
                  onClick={() => toggleLike(0)}
                >
                  <i className="fa-solid fa-heart"></i>
                </button>
                <span className="ml-[120px]">230 đã bán</span>
                <br /> <br />
                <div className="flex gap-[142px]">
                  <span className="text-gray-400">Nike</span>
                  <span className="text-gray-400">Hà Nội</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThoiTrang/ao3.jpg?raw=true"
                alt="áo 3"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">Áo Khoác Gió</h3>
                <p className="text-orange-700 text-center">1,900,000₫</p>
                <button
                  className={`text-xl mr-2 ${
                    likes[18] ? "text-red-500" : "text-gray-500"
                  }`}
                  onClick={() => toggleLike(0)}
                >
                  <i className="fa-solid fa-heart"></i>
                </button>
                <span className="ml-[120px]">300 đã bán</span>
                <br /> <br />
                <div className="flex gap-[142px]">
                  <span className="text-gray-400">Nike</span>
                  <span className="text-gray-400">Hà Nội</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThoiTrang/ao6.jpg?raw=true"
                alt="áo 6"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2"> Áo Thể Thao</h3>
                <p className="text-orange-700 text-center">1,200,000₫</p>
                <button
                  className={`text-xl mr-2 ${
                    likes[19] ? "text-red-500" : "text-gray-500"
                  }`}
                  onClick={() => toggleLike(0)}
                >
                  <i className="fa-solid fa-heart"></i>
                </button>
                <span className="ml-[120px]">798 đã bán</span>
                <br /> <br />
                <div className="flex gap-[150px]">
                  <span className="text-gray-400">Air</span>
                  <span className="text-gray-400">Hà Nội</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThoiTrang/ao4.jpg?raw=true"
                alt="áo 4"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">Áo Đen Cách Tân</h3>
                <p className="text-orange-700 text-center">900,000₫</p>
                <button
                  className={`text-xl mr-2 ${
                    likes[20] ? "text-red-500" : "text-gray-500"
                  }`}
                  onClick={() => toggleLike(0)}
                >
                  <i className="fa-solid fa-heart"></i>
                </button>
                <span className="ml-[135px]">80 đã bán</span>
                <br /> <br />
                <div className="flex gap-[142px]">
                  <span className="text-gray-400">Nike</span>
                  <span className="text-gray-400">Hà Nội</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThoiTrang/ao5.jpg?raw=true"
                alt="áo 5"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">Áo Freak</h3>
                <p className="text-orange-700 text-center">890,000₫</p>
                <button
                  className={`text-xl mr-2 ${
                    likes[21] ? "text-red-500" : "text-gray-500"
                  }`}
                  onClick={() => toggleLike(0)}
                >
                  <i className="fa-solid fa-heart"></i>
                </button>
                <span className="ml-[115px]">1209 đã bán</span>
                <br /> <br />
                <div className="flex gap-[142px]">
                  <span className="text-gray-400">Nike</span>
                  <span className="text-gray-400">Hà Nội</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThoiTrang/quan1.jpg?raw=true"
                alt="quần 1"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">Quần Màu Mè</h3>
                <p className="text-orange-700 text-center">3,000,000₫</p>
                <button
                  className={`text-xl mr-2 ${
                    likes[22] ? "text-red-500" : "text-gray-500"
                  }`}
                  onClick={() => toggleLike(0)}
                >
                  <i className="fa-solid fa-heart"></i>
                </button>
                <span className="ml-[135px]">12 đã bán</span>
                <br /> <br />
                <div className="flex gap-[142px]">
                  <span className="text-gray-400">Gucci</span>
                  <span className="text-gray-400">Hà Nội</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThoiTrang/quan2.jpg?raw=true"
                alt="quần 2"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">Quần Thể Thao Air</h3>
                <p className="text-orange-700 text-center">5,000,000₫</p>
                <button
                  className={`text-xl mr-2 ${
                    likes[23] ? "text-red-500" : "text-gray-500"
                  }`}
                  onClick={() => toggleLike(0)}
                >
                  <i className="fa-solid fa-heart"></i>
                </button>
                <span className="ml-[135px]">79 đã bán</span>
                <br /> <br />
                <div className="flex gap-[160px]">
                  <span className="text-gray-400">Air</span>
                  <span className="text-gray-400">Hà Nội</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThoiTrang/quan3.jpg?raw=true"
                alt="quần 3"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">Quần jodan</h3>
                <p className="text-orange-700 text-center">8,000,000₫</p>
                <button
                  className={`text-xl mr-2 ${
                    likes[24] ? "text-red-500" : "text-gray-500"
                  }`}
                  onClick={() => toggleLike(0)}
                >
                  <i className="fa-solid fa-heart"></i>
                </button>
                <span className="ml-[135px]">90 đã bán</span>
                <br /> <br />
                <div className="flex gap-[130px]">
                  <span className="text-gray-400">Joddan</span>
                  <span className="text-gray-400">Hà Nội</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src=" https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThoiTrang/quan4.jpg?raw=true"
                alt="quần 4"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">
                  Quần Thể Thao Màu Tím
                </h3>
                <p className="text-orange-700 text-center">2,000,000₫</p>
                <button
                  className={`text-xl mr-2 ${
                    likes[25] ? "text-red-500" : "text-gray-500"
                  }`}
                  onClick={() => toggleLike(0)}
                >
                  <i className="fa-solid fa-heart"></i>
                </button>
                <span className="ml-[135px]">35 đã bán</span>
                <br /> <br />
                <div className="flex gap-[142px]">
                  <span className="text-gray-400">Nikke</span>
                  <span className="text-gray-400">Hà Nội</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThoiTrang/quan5.jpg?raw=true "
                alt="quần 5"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">Quần Xám NIKE</h3>
                <p className="text-orange-700 text-center">20,000,000₫</p>
                <button
                  className={`text-xl mr-2 ${
                    likes[26] ? "text-red-500" : "text-gray-500"
                  }`}
                  onClick={() => toggleLike(0)}
                >
                  <i className="fa-solid fa-heart"></i>
                </button>
                <span className="ml-[120px]">900 đã bán</span>
                <br /> <br />
                <div className="flex gap-[142px]">
                  <span className="text-gray-400">Nike</span>
                  <span className="text-gray-400">Hà Nội</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThoiTrang/quan7.jpg?raw=true"
                alt="quần 6"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">Quần Đùi Đen NIKE</h3>
                <p className="text-orange-700 text-center">2,000,000₫</p>
                <button
                  className={`text-xl mr-2 ${
                    likes[27] ? "text-red-500" : "text-gray-500"
                  }`}
                  onClick={() => toggleLike(0)}
                >
                  <i className="fa-solid fa-heart"></i>
                </button>
                <span className="ml-[120px]">489 đã bán</span>
                <br /> <br />
                <div className="flex gap-[142px]">
                  <span className="text-gray-400">Nike</span>
                  <span className="text-gray-400">Hà Nội</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src=" https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThoiTrang/quan6.jpg?raw=true"
                alt="quần 5"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">Quần Đùi Đỏ NIKE</h3>
                <p className="text-orange-700 text-center">2,000,000₫</p>
                <button
                  className={`text-xl mr-2 ${
                    likes[28] ? "text-red-500" : "text-gray-500"
                  }`}
                  onClick={() => toggleLike(0)}
                >
                  <i className="fa-solid fa-heart"></i>
                </button>
                <span className="ml-[120px]">456 đã bán</span>
                <br /> <br />
                <div className="flex gap-[142px]">
                  <span className="text-gray-400">Nike</span>
                  <span className="text-gray-400">Hà Nội</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/Sach/ConChimXanhBiecQuayVe.jpg?raw=true"
                alt="sách 1"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">
                  Con Chim Xanh Biếc Quay Về
                </h3>
                <p className="text-orange-700 text-center">23,000₫</p>
                <button
                  className={`text-xl mr-2 ${
                    likes[29] ? "text-red-500" : "text-gray-500"
                  }`}
                  onClick={() => toggleLike(0)}
                >
                  <i className="fa-solid fa-heart"></i>
                </button>
                <span className="ml-[120px]">120 đã bán</span>
                <br /> <br />
                <div className="flex gap-[142px]">
                  <span className="text-gray-400 ml-[180px]">Hà Nội</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/Sach/DacNhanTam.jpg?raw=true"
                alt="sách 2"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">Đắc Nhân Tâm</h3>
                <p className="text-orange-700 text-center">47,000₫</p>
                <button
                  className={`text-xl mr-2 ${
                    likes[30] ? "text-red-500" : "text-gray-500"
                  }`}
                  onClick={() => toggleLike(0)}
                >
                  <i className="fa-solid fa-heart"></i>
                </button>
                <span className="ml-[120px]">897 đã bán</span>
                <br /> <br />
                <div className="flex gap-[142px]">
                  <span className="text-gray-400  ml-[180px]">Hà Nội</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/Sach/DiTimLeSong.jpg?raw=true"
                alt="sách 3"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">Đi Tìm Lẽ Sống</h3>
                <p className="text-orange-700 text-center">49,000₫</p>
                <button
                  className={`text-xl mr-2 ${
                    likes[31] ? "text-red-500" : "text-gray-500"
                  }`}
                  onClick={() => toggleLike(0)}
                >
                  <i className="fa-solid fa-heart"></i>
                </button>
                <span className="ml-[120px]">685 đã bán</span>
                <br /> <br />
                <div className="flex gap-[142px]">
                  <span className="text-gray-400  ml-[180px]">Hà Nội</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/Sach/HaiSoPhan.jpg?raw=true"
                alt="sách 4"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">Hai Số Phận</h3>
                <p className="text-orange-700 text-center">50,000₫</p>
                <button
                  className={`text-xl mr-2 ${
                    likes[32] ? "text-red-500" : "text-gray-500"
                  }`}
                  onClick={() => toggleLike(0)}
                >
                  <i className="fa-solid fa-heart"></i>
                </button>
                <span className="ml-[120px]">345 đã bán</span>
                <br /> <br />
                <div className="flex gap-[142px]">
                  <span className="text-gray-400  ml-[180px]">Hà Nội</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/Sach/HoangTuBe.jpg?raw=true"
                alt="sách 5"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">Hoàng Tử Bé</h3>
                <p className="text-orange-700 text-center">24,000₫</p>
                <button
                  className={`text-xl mr-2 ${
                    likes[33] ? "text-red-500" : "text-gray-500"
                  }`}
                  onClick={() => toggleLike(0)}
                >
                  <i className="fa-solid fa-heart"></i>
                </button>
                <span className="ml-[120px]">986 đã bán</span>
                <br /> <br />
                <div className="flex gap-[142px]">
                  <span className="text-gray-400  ml-[180px]">Hà Nội</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/Sach/KhongGiaDinh.jpg?raw=true"
                alt="sách 6"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">Không Gia Đình</h3>
                <p className="text-orange-700 text-center">56,000₫</p>
                <button
                  className={`text-xl mr-2 ${
                    likes[34] ? "text-red-500" : "text-gray-500"
                  }`}
                  onClick={() => toggleLike(0)}
                >
                  <i className="fa-solid fa-heart"></i>
                </button>
                <span className="ml-[120px]">690 đã bán</span>
                <br /> <br />
                <div className="flex gap-[142px]">
                  <span className="text-gray-400  ml-[180px]">Hà Nội</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/Sach/MatBiec.jpg?raw=true"
                alt="sách 7"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">Mắt Biếc</h3>
                <p className="text-orange-700 text-center">42,000₫</p>
                <button
                  className={`text-xl mr-2 ${
                    likes[35] ? "text-red-500" : "text-gray-500"
                  }`}
                  onClick={() => toggleLike(0)}
                >
                  <i className="fa-solid fa-heart"></i>
                </button>
                <span className="ml-[120px]">146 đã bán</span>
                <br /> <br />
                <div className="flex gap-[142px]">
                  <span className="text-gray-400  ml-[180px]">Hà Nội</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/Sach/MuonKiepNhanSinh.jpg?raw=true"
                alt="sách 8"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">Muộn Kiếp Nhân Sinh</h3>
                <p className="text-orange-700 text-center">67,000₫</p>
                <button
                  className={`text-xl mr-2 ${
                    likes[36] ? "text-red-500" : "text-gray-500"
                  }`}
                  onClick={() => toggleLike(0)}
                >
                  <i className="fa-solid fa-heart"></i>
                </button>
                <span className="ml-[105px]">3670 đã bán</span>
                <br /> <br />
                <div className="flex gap-[142px]">
                  <span className="text-gray-400  ml-[180px]">Hà Nội</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/Sach/NhaGiaKim.jpg?raw=true"
                alt="sách 9"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">Nhà Giả Kim</h3>
                <p className="text-orange-700 text-center">37,000₫</p>
                <button
                  className={`text-xl mr-2 ${
                    likes[37] ? "text-red-500" : "text-gray-500"
                  }`}
                  onClick={() => toggleLike(0)}
                >
                  <i className="fa-solid fa-heart"></i>
                </button>
                <span className="ml-[105px]">6768 đã bán</span>
                <br /> <br />
                <div className="flex gap-[142px]">
                  <span className="text-gray-400  ml-[180px]">Hà Nội</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/Sach/ToiTuHoc.jpg?raw=true"
                alt="sách 10"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">Tôi Tự Học</h3>
                <p className="text-orange-700 text-center">22,000₫</p>
                <button
                  className={`text-xl mr-2 ${
                    likes[38] ? "text-red-500" : "text-gray-500"
                  }`}
                  onClick={() => toggleLike(0)}
                >
                  <i className="fa-solid fa-heart"></i>
                </button>
                <span className="ml-[120px]">786 đã bán</span>
                <br /> <br />
                <div className="flex gap-[142px]">
                  <span className="text-gray-400  ml-[180px]">Hà Nội</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/Sach/YourName.jpg?raw=true"
                alt="sách 11"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">Your Name</h3>
                <p className="text-orange-700 text-center">67,000₫</p>
                <button
                  className={`text-xl mr-2 ${
                    likes[39] ? "text-red-500" : "text-gray-500"
                  }`}
                  onClick={() => toggleLike(0)}
                >
                  <i className="fa-solid fa-heart"></i>
                </button>
                <span className="ml-[105px]">7864 đã bán</span>
                <br /> <br />
                <div className="flex gap-[142px]">
                  <span className="text-gray-400  ml-[180px]">Hà Nội</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
      <footer className="bg-gray-400 text-white w-screen h-[200px] py-8 flex justify-around items-center">
        <div className="flex flex-col items-center">
          <h3 className="font-bold">CHĂM SÓC KHÁC HÀNG</h3>
          <p>Trung Tâm trợ giúp</p>
          <p>Hướng dẫn mua hàng</p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="font-bold">GIỚI THIỆU</h3>
          <p>Điều Khoản</p>
          <p>Chính Sách Bảo mật</p>
          <p>Tuyển Dụng</p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="font-bold">DANH MỤC SẢN PHẨM</h3>
          <p>Thời Trang</p>
          <p>Đồ Tiêu Dùng</p>
          <p>Thiết Bị Điện Tử</p>
          <p>Sách</p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="font-bold">THEO DÕI CHÚNG TÔI</h3>
          <p><i className="fa-brands fa-facebook"></i> Facebook</p>
          <p><i className="fa-brands fa-instagram"></i> Instagram</p>
          <p><i className="fa-brands fa-x-twitter"></i> Twitter</p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="font-bold">ĐỘI NGŨ PHÁT TRIỂN</h3>
          <p className="text-orange-500">Nguyễn Thị Thu Quỳnh</p>
        </div>
      </footer>
    </div>
  );
}

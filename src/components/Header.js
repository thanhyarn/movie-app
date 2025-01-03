import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import userIcon from "../assets/user.png";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { navigation } from "../contants/navigation";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Tạo đối tượng URLSearchParams từ location.search
  const searchParams = new URLSearchParams(location.search);

  // Lấy giá trị của tham số "q" từ URL
  const initialSearchInput = searchParams.get("q") || ""; // Nếu không có "q", mặc định là chuỗi rỗng.

  const [searchInput, setSearchInput] = useState(initialSearchInput);

  // Cập nhật lại URL khi người dùng nhập tìm kiếm
  useEffect(() => {
    if (searchInput) {
      navigate(`/search?q=${searchInput}`);
    }
  }, [searchInput, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault(); // Dùng preventDefault() thay vì prevenDefault()
  };

  return (
    <header className="fixed top-0 w-full h-16 bg-black bg-opacity-75 z-40">
      <div className="container mx-auto px-3 flex items-center h-full">
        <Link to={`/`}>
          <img src={logo} alt="logo" width={120} />
        </Link>
        <nav className="hidden lg:flex items-center gap-1 ml-5">
          {navigation.map((nav, index) => {
            return (
              <div key={index}>
                <NavLink
                  to={nav.href}
                  className={({ isActive }) =>
                    `px-3 hover:text-neutral-100 ${
                      isActive && "text-neutral-100"
                    }`
                  }
                >
                  {nav.label}
                </NavLink>
              </div>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-5">
          <form className="flex items-center gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search here..."
              className="bg-transparent px-4 py-1 outline-none border-none hidden lg:block"
              name="searchInput"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button className="text-2xl text-white">
              <IoSearchOutline />
            </button>
          </form>
          <div className="w-9 h-9 rounded-full overflow-hidden cursor-pointer active:scale-50 transition-all">
            <img src={userIcon} className="w-10 h-10" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

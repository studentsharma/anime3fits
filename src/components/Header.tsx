import { useState, useEffect, useRef } from 'react';
import { Menu, X, CircleUser, LogOut, Mail } from 'lucide-react';
import logo from "../assets/logo.png"
import { useSelector, useDispatch } from 'react-redux';
import { loginSuccess, logout } from "../features/user/userSlice"
import { RootState } from '../app/Store';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import toast from 'react-hot-toast';

interface NavLink {
  href: string;
  label: string;
}

const Logo = () => (
  <Link to="#" className="flex items-center space-x-3">
    <div className="h-10 w-10 text-white"><img src={logo} alt="" /></div>
    <span className="text-2xl font-bold text-white">Anime3fits</span>
  </Link>
);

const Header = (): JSX.Element => {
  const dispatch = useDispatch();
  const login = useSelector((state: RootState) => state.user.isAuthenticated);
  const user = useSelector((state: RootState) => state.user.user);
  const userEmail = useSelector((state: RootState) => state.user.email);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isUserSidebarOpen, setIsUserSidebarOpen] = useState<boolean>(false);
  const userSidebarRef = useRef<HTMLDivElement>(null);

  const navLinks: NavLink[] = [
    { href: '/', label: 'Studio' },
    { href: '/cart', label: 'Cart' },
    { href: '/login', label: 'Login' },
  ];

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  // Close user sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userSidebarRef.current && !userSidebarRef.current.contains(event.target as Node)) {
        setIsUserSidebarOpen(false);
      }
    };

    if (isUserSidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isUserSidebarOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleUserSidebar = () => {
    setIsUserSidebarOpen(!isUserSidebarOpen);
  };

  const handleLogout = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/user/logout`, {}, 
        {
        withCredentials: true,
      });
      dispatch(logout());
      setisloggedIn(false);
      setIsUserSidebarOpen(false);
    } catch (error) {
      // console.error("Logout failed:", error);
    }
  };

  const [isloggedIn, setisloggedIn] = useState<Boolean>(false);

  useEffect(() => {
    async function auth() {
      try {
        const res = await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/user/home`, {}, {
          withCredentials: true,
        });

        if (res.status === 200) {
          setisloggedIn(true);
          // console.log(res.data)
          // console.log("DISPATCHING loginSuccess with:", {
          //   name: res.data.user,
          //   email: res.data.email
          // });

          dispatch(loginSuccess({name : res.data.user, email : res.data.email}));
        } else {
          setisloggedIn(false);
        }
      } catch (err) {
        setisloggedIn(false);
      }
    }

    auth();

  }, []);

  return (
    <div className="bg-black h-16">
      <header className="bg-black text-white shadow-lg shadow-gray-900/50 sticky top-0 z-50">
        <nav className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <Logo />

          <ul className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.label} >
                {isloggedIn && link.label === "Login" && login ? (
                  <>
                    <div 
                      className='flex justify-center items-center cursor-pointer hover:bg-gray-800 px-3 py-2 rounded-lg transition-colors duration-200'
                      onClick={toggleUserSidebar}
                    >
                      <CircleUser />
                      <span className="text-gray-400 font-semibold text-lg ml-2">{user}</span>
                    </div>
                  </>
                ) : (
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-black hover:bg-white transition-colors duration-300 text-lg px-4 py-2 rounded-md"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Hamburger (Mobile Only) */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* User Info Sidebar */}
      {isUserSidebarOpen && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsUserSidebarOpen(false)}
          />
          
          {/* Sidebar */}
          <div 
            ref={userSidebarRef}
            className="fixed top-16 right-4 w-80 bg-gray-900 border border-gray-700 rounded-lg shadow-2xl z-50 transform transition-all duration-200 ease-out"
          >
            <div className="p-6">
              {/* User Profile Section */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                  <CircleUser className="w-8 h-8 text-gray-300" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">{user}</h3>
                  <p className="text-gray-400 text-sm">User Profile</p>
                </div>
              </div>

              {/* User Details */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wide">Email</p>
                    <p className="text-white text-sm">{userEmail}</p>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-700 my-4"></div>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="w-full flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-lg transition-colors duration-200 font-medium"
              >
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </>
      )}

      {/* Overlay when mobile menu is open */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-70 z-40 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        onClick={toggleMenu}
      ></div>

      {/* Slide-out Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-black border-l border-gray-800 z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex justify-end p-6">
          <button
            onClick={toggleMenu}
            className="text-gray-300 hover:text-white focus:outline-none"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <ul className="flex flex-col space-y-4 p-8">
          {navLinks.map((link) => (
            <li key={link.label} onClick={toggleMenu}>
              {isloggedIn && link.label === "Login" && login ? (
                <div 
                  className="flex items-center space-x-3 p-4 bg-gray-800 rounded-lg cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleUserSidebar();
                    setIsMenuOpen(false);
                  }}
                >
                  <CircleUser className="w-6 h-6" />
                  <div>
                    <p className="text-white font-semibold text-lg">{user || "User"}</p>
                    <p className="text-gray-400 text-sm">View Profile</p>
                  </div>
                </div>
              ) : (
                <Link
                  to={link.href}
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-2xl block py-2"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div >
  );
};

export default Header;

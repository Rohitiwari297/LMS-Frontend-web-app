import { FiMenu } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import { useDispatch, useSelector } from "react-redux";

function HomeLayout({ children }) {
  //
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // for checking if user is logged in
  const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);
  //console.log(isLoggedIn)

  //for displaying the option acc to role
  const role = useSelector((state) => state?.auth?.role);
  //console.log(role)

  //Defining the method of changeWidth
  function changeWidth() {
    const drawerSide = document.getElementsByClassName("drawer-side");
    drawerSide[0].style.width = "auto";
  }

  //Defining the method of hideDrawer
  function hideDrawer() {
    const element = document.getElementsByClassName("drawer-toggle");
    element[0].checked = false;

    //changeWidth();
  }

  //defining the function handleLogout
  function handleLogout(e){
    e.reventDefault();

    // const res = await dispatch(logout())

    // if(res?.payload?.success)
    navigate('/');
  }

  return (
    <div className="min-h-[90vh] bg-gray-900 ">
      {/* drawer */}
      <div className="drawer absolute left-0 z-50 w-fit ">
        <input className="drawer-toggle" id="my-drawer" type="checkbox" />
        <div className="drawer-content">
          <label htmlFor="my-drawer" className="cursor-pointer relative">
            <FiMenu
              onClick={changeWidth}
              size={"32px"}
              className="font-bold text-white m-4"
            />
          </label>
        </div>
        <div className="drawer-side w-0 ">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>

          <ul className="menu p-4 bg-gray-800 text-white w-48 h-[100%] sm:w-80 bg-base-100 text-base-content relative">
            <li className="w-fit absolute right-2 z-50">
              <button onClick={hideDrawer}>
                <AiFillCloseCircle size={24} />
              </button>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>

            {isLoggedIn && role === "ADMIN" && (
              <li>
                <Link to="/admit.dashboard">Admin DashBoard</Link>
              </li>
            )}

            <li>
              <Link to="/courses">All Courses</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>

            {!isLoggedIn && (
              <li className="absolute bottom-4 w-[90%]">
                <div className="w-full flex  items-center justify-center gap-3">
                  <button className="btn-primary px-4 py-1 font-semibold bg-blue-800 hover:bg-blue-900 rounded-md w-full">
                    <Link to="/login">Login</Link>
                  </button>
                  <button
                    className="btn-seconday px-4 py-1 font-semibold bg-pink-500
                                hover:bg-pink-600 rounded-md w-full"
                  >
                    <Link to="/login">Signup</Link>
                  </button>
                </div>
              </li>
            )}

            {isLoggedIn && (
              <li className="absolute bottom-4 w-[90%">
                <div className="w-full flex  items-center justify-center gap-3">
                  <button className="btn-primary px-4 py-1 font-semibold bg-blue-800 hover:bg-blue-900 rounded-md w-full">
                    <Link to="/user/profile">Profile</Link>
                  </button>
                  <button
                    className="btn-seconday px-4 py-1 font-semibold bg-pink-500
                                hover:bg-pink-600 rounded-md w-full"
                  >
                    <Link onClick={handleLogout}>Logout</Link>
                  </button>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>

      {/*children Component */}
      {children}

      {/* Footer Component*/}
      <Footer />
    </div>
  );
}

export default HomeLayout;

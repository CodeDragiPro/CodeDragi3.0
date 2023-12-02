import React from "react";
import Logo from "../assets/logoWeb.png";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { useTranslation } from "react-i18next";
import packageJson from '../../package.json';

const Footer = () => {
  const [t] = useTranslation("global");
  return (
    <footer className=" bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/">
              <img src={Logo} className="w-48" />
            </Link>
            <p className="italic text-gray-400 text-sm mt-2">{t("header.captivateItem")}</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold  uppercase text-white">
              {t("footer.FollowSectionTitle")}
              </h2>
              <ul className="text-gray-400 font-medium">
                <li>
                  <Link
                    to="https://fr.fiverr.com/codedragi76?public_mode=true"
                    className="hover:underline"
                  >
                    Fiever
                  </Link>
                </li>
              </ul>
              <ul className="text-gray-400 font-medium">
                <li>
                  <Link
                    to="https://www.facebook.com/profile.php?id=61553372835257"
                    className="hover:underline"
                  >
                    Facebook
                  </Link>
                </li>
              </ul>
              <ul className="text-gray-400 font-medium">
                <li>
                  <Link
                    to="https://www.instagram.com/codedragi/"
                    className="hover:underline"
                  >
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold  uppercase text-white">
                Legal
              </h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-2">
                  <Link to="/conditions" className="hover:underline">
                  {t("footer.ThermAndConditionsLink")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6  sm:mx-auto border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-400 sm:text-start ">
          {t("footer.Copyright")}
            <p>SIREN 981 765 001</p>
            <p>Version: {packageJson.version}</p>
          </span>

          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <Link
              to="https://www.facebook.com/profile.php?id=61553372835257"
              className="text-gray-500  hover:text-white"
            >
              <FaFacebookSquare size={20} />
              <span className="sr-only">Facebook page</span>
            </Link>
            <Link
              to="https://fr.fiverr.com/codedragi76?public_mode=true"
              className="text-gray-500  hover:text-white  ms-5"
            >
              <SiFiverr size={24}/>
              <span className="sr-only">Fiver page</span>
            </Link>
            <Link
              to="https://www.instagram.com/codedragi/"
              className="text-gray-500  hover:text-white ms-5"
            >
              <FaInstagramSquare size={20}/>
              <span className="sr-only">Instagram page</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

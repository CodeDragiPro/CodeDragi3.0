import React from "react";
import Logo from "../assets/logoWeb.png";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";

const Footer = () => {
  return (
    <footer class="bg-white dark:bg-gray-900">
      <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
            <Link to="/">
              <img src={Logo} className="w-48" />
            </Link>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Nous suivre
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li>
                  <Link
                    to="https://fr.fiverr.com/codedragi76?public_mode=true"
                    className="hover:underline"
                  >
                    Fiever
                  </Link>
                </li>
              </ul>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li>
                  <Link
                    to="https://www.facebook.com/profile.php?id=61553372835257"
                    className="hover:underline"
                  >
                    Facebook
                  </Link>
                </li>
              </ul>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
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
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-2">
                  <Link to="/" className="hover:underline">
                    Charte du site
                  </Link>
                </li>
                <li class="mb-2">
                  <Link to="/" className="hover:underline">
                    Termes & conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="/" class="hover:underline">
              CodeDragi
            </a>
            . Tous droits reservés.
          </span>

          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <Link
              to="https://www.facebook.com/profile.php?id=61553372835257"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <FaFacebookSquare size={20} />
              <span className="sr-only">Facebook page</span>
            </Link>
            <Link
              to="https://fr.fiverr.com/codedragi76?public_mode=true"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <SiFiverr size={24}/>
              <span className="sr-only">Fiver page</span>
            </Link>
            <Link
              to="https://www.instagram.com/codedragi/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
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

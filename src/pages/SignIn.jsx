import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../Config/AuthContext";
import Button from "../components/ui/Button";
import Toast from "../components/ui/Toast";
import { useTranslation } from "react-i18next";

const SignIn = () => {
  const [t] = useTranslation("global");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signIn } = UserAuth();
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      Toast({ type: "success", message: t("toastLogin.success") });
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (e) {
      Toast({ type: "error", message: t("toastLogin.error") });
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div className=" py-20 h-screen flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        autoComplete="on"
        ref={form}
        id="signIn form"
        className="max-w-[600px] w-full mx-auto bg-gray-900 p-4 rounded"
      >
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Email"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            {t("login.passwordLabel")}
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="••••••••"
            required
          />
        </div>
        <Button text={t("login.button")} />
      </form>
    </div>
  );
};

export default SignIn;

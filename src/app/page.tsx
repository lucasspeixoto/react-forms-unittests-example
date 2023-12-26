import React from "react";
import LoginWrapper from "./components/login/LoginWrapper";

export default function Home() {
  return (
    <React.Fragment>
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-wrap items-center justify-center p-0">
          <div className="h-screen bg-[url('/images/wallpaper.png')] bg-cover bg-repeat md:block w-full">
            <div className="flex h-screen w-full flex-col items-center justify-center px-0">
              <LoginWrapper />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

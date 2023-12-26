import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="md-p-8 lg:md-p-8 flex flex-wrap items-center justify-center p-0">
          <div className="hidden w-full bg-[url('/images/wallpaper.png')] bg-cover bg-repeat md:block md:w-1/2">
            <div className="flex h-screen flex-col items-center justify-center px-10 py-17.5 text-center"></div>
          </div>

          <div className="w-full border-stroke md:w-1/2 md:border-l-2 dark:border-strokedark">
            <div className="flex h-screen w-full flex-col items-center justify-center px-4 md:px-0">
              <div className="w-full md:w-9/12 lg:w-8/12">
               {/* Formulário */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

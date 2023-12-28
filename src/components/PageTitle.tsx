import React from "react";

const PageTitle = ({ title = "", img = "" }) => {
  return (
    <section className={"bg-cover bg-[url(" + img + ")]"}>
      <div className="container h-56 text-white flex items-center">
        <h2 className="text-5xl">{title}</h2>
      </div>
    </section>
  );
};

export default PageTitle;

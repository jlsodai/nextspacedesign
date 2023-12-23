import React from "react";

const PageTitle = ({ title = "" }) => {
  return (
    <section className="bg-primary">
      <div className="container h-56 text-white flex items-center">
        <h2 className="text-5xl">{title}</h2>
      </div>
    </section>
  );
};

export default PageTitle;

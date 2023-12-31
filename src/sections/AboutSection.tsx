/* eslint-disable @next/next/no-img-element */

const AboutSection = () => {
  return (
    <section className="bg-[#FAFAFA] flex py-16 md:py-24" id="about">
      <div className="container md:flex items-center">
        <div className="order-2 lg:w-[55%]">
          <div className="block md:hidden mb-8">
            <p className="font-bold">About Us</p>
            <div className="bg-gray-800 w-[40px] h-[5px]">&nbsp;</div>
          </div>
          {/* <div className="grid grid-cols-2 gap-x-6 items-center -sm:mb-8">
            <img
              src="https://res.cloudinary.com/dmaestro/image/upload/v1703188234/kitchen_about_bwl9hy.jpg"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dmaestro/image/upload/v1703188234/kitchen_about2_p3usah.jpg"
              alt=""
            />
          </div> */}
        </div>
        <div className="lg:pr-24 lg:w-[45%]">
          <div className="hidden md:block">
            <p className="font-bold">About Us</p>
            <div className="bg-gray-800 w-[40px] h-[5px]">&nbsp;</div>
          </div>

          <h2 className="mt-8 mb-4">Excellence and professionalism</h2>
          <p>
            Our team has an experience of more than 10 years in wood work design
            and manufacturing. We also provide a pool of specialists for all
            your customized needs for finishing and refurbishment.
          </p>

          <h2 className="mt-8 mb-4">Our Core Activity</h2>
          <p>
            We are manufacturers of wood solutions for all kinds of spaces:
            cabinetry, furniture and all carpentry designs.{" "}
          </p>

          <h2 className="mt-8 mb-4">Project Management</h2>
          <p>
            We work hand in hand with our customers in the design of spaces and
            furniture, the preparation of cutting lists and bills of quantity,
            the manufacturing process, the installation and after sales
            services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

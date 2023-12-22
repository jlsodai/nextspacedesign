/* eslint-disable @next/next/no-img-element */

const AboutSection = () => {
  return (
    <section className="bg-[#FAFAFA] min-h-screen flex" id="about">
      <div className="container flex items-center -md:my-16">
        <div className="pr-24 w-[45%]">
          <p className="font-bold">About Us</p>
          <div className="bg-gray-800 w-[40px] h-[5px]">&nbsp;</div>

          <h2 className="mt-8 mb-4">Excellence and professionalism</h2>
          <p>
            Our team has an experience of more than 10 years in wood work design
            and manufacturing. We also provide a pool of specialists for all
            your customized needs for finishing and refurbishment.
          </p>
          <h2 className="mt-8 mb-4">Project Management</h2>
          <p>
            We work hand in hand with our customers in the design of spaces and
            furniture, the preparation of cutting lists and bills of quantity,
            the manufacturing process, the installation and after sales
            services. We work hand in hand with our customers in the design of
            spaces and furniture, the preparation of cutting lists and bills of
            quantity, the manufacturing process, the installation and after
            sales services.
          </p>
        </div>
        <div className="grid grid-cols-2 w-[55%] gap-x-6 items-center">
          <img
            src="https://res.cloudinary.com/dmaestro/image/upload/v1703188234/kitchen_about_bwl9hy.jpg"
            className="h-[120%]"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dmaestro/image/upload/v1703188234/kitchen_about2_p3usah.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

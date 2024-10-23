import React from "react";
import ProductImages from "../../components/ProductImg";
import CustomizeProducts from "../../components/CustomizeProducts";
import Add from "../../components/Add";

const SinglePage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* img */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      {/* text */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Product Name</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
          natus. Maiores, libero. Laudantium, impedit, distinctio praesentium
          rem dolorum, ipsa magni illo perspiciatis expedita magnam corporis
          commodi nostrum mollitia velit modi.
        </p>
        <div className="h-[2px] bg-gray-100"></div>
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">$59</h3>
          <h2 className="font-medium text-2xl">$49</h2>
        </div>
        <div className="h-[2px] bg-gray-100"></div>
        <CustomizeProducts />
        <Add />
        <div className="h-[2px] bg-gray-100"></div>
        <div className="text-sm">
          <h1 className="font-medium mb-4">Title</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
            mollitia enim doloremque sit, fugit, debitis dolore obcaecati
            delectus quos repellendus adipisci voluptatum perspiciatis, optio
            veritatis maiores recusandae ex. Maiores, laborum?
          </p>
        </div>
        <div className="text-sm">
          <h1 className="font-medium mb-4">Title</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
            mollitia enim doloremque sit, fugit, debitis dolore obcaecati
            delectus quos repellendus adipisci voluptatum perspiciatis, optio
            veritatis maiores recusandae ex. Maiores, laborum?
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;

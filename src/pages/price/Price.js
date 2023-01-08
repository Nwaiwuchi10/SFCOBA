import React from "react";
import PriceCard from "./PriceCard";

const Price = () => {
  return (
    <div>
      <section className="hprice padding">
        {/* <Heading subtitle='OUR PRICING' title='Pricing & Packages' /> */}
        <div className="price container grid">
          <PriceCard />
        </div>
      </section>
    </div>
  );
};

export default Price;

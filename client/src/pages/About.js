import React from "react";
import Layout from "../components/Layout/Layout.js";

const About = () => {
  return (
    <Layout title={"About us - eKart app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "80%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            eKart - an Ecommerce company was born in 2023. Till that day we
            never looked behind and keep on growing day by day.And now We have
            become family of more than million of customers. we provide online
            shopping services in more than 200 countries.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;

import React, { useState } from "react";
import Banner from "../../components/Banners/Banners";
import {
  Blog_img,
  Course_blog_banner,
} from "../../components/Img/ImportedImage";
import {
  Column,
  Heading,
  Row,
  Span,
  Wraper,
  Button,
} from "../../components/ComponentsIndex";

import Blog_api from "../../components/Blog_api/Blog_Api";
import Footer from "../../components/footer/footer";
import CommanBanner from "../../components/Banners/CommanBanner";
import { Journy_highlights } from "../../components/Img/ImportedImage";

const Courses = () => {
  return (
    <>
      <Row>
        <CommanBanner children={Journy_highlights} heading={"Blogs"} />
      </Row>

      <Blog_api />

      <Footer />
    </>
  );
};

export default Courses;

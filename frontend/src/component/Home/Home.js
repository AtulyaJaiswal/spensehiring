import React, { Fragment, useEffect } from "react";
import "./Home.css";
import Carousel from 'react-material-ui-carousel';
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import {toast} from "react-toastify";
import BG1 from "../../Images/Background1.jpg";
import BG2 from "../../Images/Background2.jpg";
import BG3 from "../../Images/Background3.jpg";
import BG4 from "../../Images/Background4.jpg";
import BG5 from "../../Images/Background5.jpg";
import BG6 from "../../Images/Background6.jpg";
import BG7 from "../../Images/Background7.jpg";
import BG8 from "../../Images/Background8.jpg";

const Home = () => {
  const dispatch = useDispatch();
  const { products, loading, error, } = useSelector((state) => state.products);

  var items = [
    {
        name: BG1,
        description: "BG1"
    },
    {
        name: BG2,
        description: "BG2"
    },
    {
      name: BG3,
      description: "BG3"
    },
    {
      name: BG4,
      description: "BG4"
    },
    {
      name: BG5,
      description: "BG5"
    },
    {
      name: BG6,
      description: "BG6"
    },
    {
      name: BG7,
      description: "BG7"
    },
    {
      name: BG8,
      description: "BG8"
    },
  ]

  useEffect(() => {
    if (error) {
      return toast.error(error);
      // dispatch(clearErrors());
    }

    dispatch(getProduct());
  }, [dispatch, error]);
    

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Dukaan" />
          <Carousel className='carousel'>
              {items.map( (item, i) => (
                <img
                  className="homePageImage"
                  key={i}
                  src={item.name}
                  alt={`${i} Slide`}
              />
              ))}
          </Carousel>

          <div className="homeOther">
            <h2 className="homeHeading">Featured Products</h2>

            <div className="container" id="container">
              {products &&
                products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}   
            </div>
          </div>
          <div className="margin"></div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
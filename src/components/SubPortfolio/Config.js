import desktop0 from "../../assets/desktop0.jpg";
import desktop1 from "../../assets/desktop1.jpg";
import desktop2 from "../../assets/desktop2.jpg";
import desktop3 from "../../assets/desktop3.jpg";
import desktop4 from "../../assets/desktop4.jpg";
import mobile0 from "../../assets/mobile0.jpg";
import mobile1 from "../../assets/mobile1.jpg";
import mobile2 from "../../assets/mobile2.jpg";
import mobile3 from "../../assets/mobile3.jpg";
import mobile4 from "../../assets/mobile4.jpg";

export default {
  "galaxy-products-configurator": {
    headline: "Samsung Galaxy Products",
    subHeadline: "Custom configurator for purchase your Samsung Galaxy Products",
    description: `The galaxy products configurator is an interactive page where the user will finish their purchase of  
      galaxy products based on his selections of several steps. It's currently used for galaxy s8/s9/note8 purchase.
      <br><br>I lead a front-end group of 3 developers to build this project from ground up, and delivered it into production 
      within 3 weeks.<br><br>This project is built on React/Redux in combination with Sass, and page transition is handled by 
      history API so each step can be cached and deeplinked in browser. It's full responsive and well tagged for marketing 
      purpose. All the data is retrieved by RESTful API.`,
    link: "https://www.samsung.com/us/smartphones/galaxy-s9/buy/",
    release: "February 2018",
    tech: ["ReactJS", "Redux", "ES6", "Sass", "HTML5", "Webpack", "Restful APIs", "Full Responsive"],
    desktop: desktop0,
    mobile: mobile0
  },
  "tvs-configurator": {
    headline: "Samsung TVs",
    subHeadline: "Custom configurator for purchase your Samsung TVs",
    description: `The Samsung TVs configurator is an interactive page where the user will finish their purchase of  
      Samsung TVs based on his selections of several steps. It's currently used for Samsung QLED/UHD TV purchase.
      <br><br>I lead another front-end developer to build this project from ground up, and delivered it into production 
      within 1 month.<br><br>This project is built on React/Redux in combination with Sass, and page transition is handled by 
      history API so each step can be cached and deeplinked in browser. It's full responsive and well tagged for marketing 
      purpose. All the data is retrieved by RESTful API.`,
    link: "https://www.samsung.com/us/televisions-home-theater/tvs/buy/",
    release: "November 2017",
    tech: ["ReactJS", "Redux", "ES6", "Sass", "HTML5", "Webpack", "Restful APIs", "Full Responsive"],
    desktop: desktop1,
    mobile: mobile1
  },
  "home-appliances-configurator": {
    headline: "Samsung Home Appliances",
    subHeadline: "Custom configurator for purchase your Home Appliances",
    description: `The Samsung TVs configurator is an interactive page where the user will finish their purchase of  
      Samsung Home Appliances based on his selections of several steps. It's currently used for refrigerator/range/washer/dryer/microwave/dishwasher purchase.
      <br><br>I lead another front-end developer to build this project from ground up, and delivered it into production 
      within 2 months.<br><br>This project is built on React/Redux in combination with Sass, and page transition is handled by 
      history API so each step can be cached and deeplinked in browser. It's full responsive and well tagged for marketing 
      purpose. All the data is retrieved by RESTful API, and also call Ajax to check zip codes and installation availability.`,
    link: "https://www.samsung.com/us/home-appliances/refrigerators/",
    release: "August 2017",
    tech: ["ReactJS", "Redux", "ES6", "Sass", "HTML5", "Webpack", "Restful APIs", "Full Responsive"],
    desktop: desktop2,
    mobile: mobile2
  },
  "product-finder": {
    headline: "Samsung Product Finder",
    subHeadline: "Product Finder guides your customers to the right products",
    description: `The Samsung Product Finder is a product category page where the user can easily find right products by  
      filtering them through model, color, size, price or rating. It's currently used for all Samsung product category such as
      mobiles, TVs and home appliances.<br><br>I worked with another front-end developer to build this project from ground up, 
      and delivered it into production within 2 months.<br><br>This project is built on React/Redux in combination with JSS, 
      and each filter result handled by history API so it will be cached in browser without duplicate hits to server to get same data. 
      It's full responsive and all the data is retrieved by RESTful API.`,
    link: "https://www.samsung.com/us/mobile/phones/all-phones/",
    release: "March 2017",
    tech: ["ReactJS", "Redux", "ES6", "JSS", "HTML5", "Webpack", "Restful APIs", "Full Responsive"],
    desktop: desktop3,
    mobile: mobile3
  },
  "all-deals": {
    headline: "Samsung All Deals",
    subHeadline: "Find all the best deals daily for your customers",
    description: `The Samsung All Deals is a product category page where the user can easily find the best deals of products. 
      It's currently used for all Samsung products daily deals, especially for 2016 and 2017 Black Friday. <br><br>I worked 
      with another 2 front-end developers to build this project from ground up, and delivered it into production within 5 weeks.
      <br><br>This project is built on React/Flux in combination with Sass, and the category filter is built by JQuery.
      It's full responsive and all the data is retrieved by RESTful API.`,
    link: "https://www.samsung.com/us/shop/all-deals/",
    release: "November 2016",
    tech: ["ReactJS", "Flux", "ES6", "Sass", "HTML5", "JQuery", "Restful APIs", "Full Responsive"],
    desktop: desktop4,
    mobile: mobile4
  }
};
import desktop0 from "../../assets/desktop0.jpg";
import desktop1 from "../../assets/desktop1.jpg";
import desktop2 from "../../assets/desktop2.jpg";
import mobile0 from "../../assets/mobile0.jpg";
import mobile1 from "../../assets/mobile1.jpg";
import mobile2 from "../../assets/mobile2.jpg";

export default {
  "galaxy-products-configurator": {
    headline: "Samsung Galaxy Products",
    subHeadline: "Custom configurator for purchase your Samsung Galaxy Products",
    description: `the galaxy products configurator is an interactive page where the user will finish their purchase of  
      galaxy products based on his selections of several steps. It's currently used for galaxy s8/s9/note8 purchase.
      <br><br>I lead a front-end group of 3 people to build this project from ground up, and delivered it into production 
      within 3 weeks.<br><br>This project is built on React/Redux in combination with Sass, and page transition is handled by 
      history API so each step can be cached and deeplinked in browser. It's full responsive and well tagged for marketing 
      purpose. All the data is retrieved by RESTful API.`,
    link: "https://www.samsung.com/us/smartphones/galaxy-s9/buy",
    release: "February 2018",
    tech: ["ReactJS", "Redux", "ES6", "Sass", "HTML5", "Webpack", "Restful APIs", "Full Responsive"],
    desktop: desktop0,
    mobile: mobile0
  },
  "tvs-configurator": {
    headline: "Samsung TVs",
    subHeadline: "Custom configurator for purchase your Samsung TVs",
    description: `the Samsung TVs configurator is an interactive page where the user will finish their purchase of  
      Samsung TVs based on his selections of several steps. It's currently used for Samsung QLED/UHD TV purchase.
      <br><br>I lead another front-end developer to build this project from ground up, and delivered it into production 
      within 1 month.<br><br>This project is built on React/Redux in combination with Sass, and page transition is handled by 
      history API so each step can be cached and deeplinked in browser. It's full responsive and well tagged for marketing 
      purpose. All the data is retrieved by RESTful API.`,
    link: "https://www.samsung.com/us/televisions-home-theater/tvs/buy",
    release: "November 2017",
    tech: ["ReactJS", "Redux", "ES6", "Sass", "HTML5", "Webpack", "Restful APIs", "Full Responsive"],
    desktop: desktop1,
    mobile: mobile1
  },
  "home-appliances-configurator": {
    headline: "Samsung Home Appliances",
    subHeadline: "Custom configurator for purchase your Home Appliances",
    description: `the Samsung TVs configurator is an interactive page where the user will finish their purchase of  
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
  } 
};
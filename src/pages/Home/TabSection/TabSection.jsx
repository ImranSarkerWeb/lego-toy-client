import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";

const TabSection = () => {
  return (
    <Tabs>
      <div className="text-center">
        <h3 className="text-accent inline-block py-1 px-6  border-2 border-dashed border-accent font-bold text-xl">
          Category
        </h3>
        <h1 className="text-6xl my-10 font-bold"> Our Categories</h1>
      </div>
      <TabList>
        <Tab>
          <img
            className="w-16 mx-auto"
            src="https://slidesigma.com/themes/html/toystore/assets/img/shop/500x420-2.jpg"
            alt="Robot toys"
          />
          <h1 className="md:text-2xl font-bold text-accent">Robot Toys</h1>
        </Tab>
        <Tab>
          {" "}
          <img
            className="w-16 mx-auto"
            src="https://slidesigma.com/themes/html/toystore/assets/img/home-1/500-1.jpg"
            alt="brick toyes"
          />
          <h1 className="md:text-2xl font-bold text-accent">Brick Toys</h1>
        </Tab>
        <Tab>
          {" "}
          <img
            className="w-16 mx-auto"
            src="https://slidesigma.com/themes/html/toystore/assets/img/home-1/500-2.jpg"
            alt="doll toyes"
          />
          <h1 className="md:text-2xl font-bold text-accent">Doll Toys</h1>
        </Tab>
      </TabList>
      <TabPanel>
        <Tab1></Tab1>
      </TabPanel>
      <TabPanel>
        <Tab2></Tab2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 3</h2>
      </TabPanel>
    </Tabs>
  );
};

export default TabSection;

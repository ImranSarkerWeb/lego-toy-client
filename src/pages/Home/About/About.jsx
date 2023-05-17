import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const About = () => {
  const [counterUp, setCounterUp] = useState(false);
  return (
    <div className="hero min-h-screen  md:pb-10 md:mb-4">
      <div className="hero-content  flex-col lg:flex-row">
        <div className="relative md:ps-10 mb-12 md:mb-0 md:w-1/2">
          <img
            src="https://cdn.pixabay.com/photo/2020/03/12/19/40/kids-4926030_960_720.jpg"
            className=" w-full rounded-lg shadow-2xl"
          />
          <img
            src="https://cdn.pixabay.com/photo/2014/11/04/13/21/lego-516559_960_720.jpg"
            className="absolute  w-48 md:w-72 top-[60%]  -left-[10px] border-8 border-white rounded-lg shadow-2xl"
          />

          <div className="absolute flex bg-accent gap-2 items-center text-white top-0 right-0 md:w-1/2 p-2 md:p-4">
            {" "}
            <ScrollTrigger
              onEnter={() => setCounterUp(true)}
              onExit={() => setCounterUp(false)}
            >
              {counterUp && (
                <CountUp start={0} end={25} delay={0}>
                  {({ countUpRef }) => (
                    <div className="text-4xl md:text-6xl font-bold  mb-0">
                      <span ref={countUpRef} />
                    </div>
                  )}
                </CountUp>
              )}
            </ScrollTrigger>{" "}
            <span className="font-2xl font-semibold">Years of experience</span>
          </div>
        </div>
        <div className="md:w-1/2 space-y-6 ps-5">
          <h3 className="text-accent text-xl font-bold"> About us</h3>
          <h1 className="text-5xl font-bold">
            Best Toys From <span className="text-accent"> Best Shop!</span>{" "}
          </h1>
          <h2 className="text-2xl font-bold">
            Customers&apos; favorite products this week.
          </h2>
          <p className="py-6">
            The golden age of toy development was at the turn of the toys Real
            wages were rising steadily in the Western world, allowing even
            working-class families to afford toys for their children, and
            industrial techniques.
          </p>

          <button className="btn btn-accent">Contact us</button>
        </div>
      </div>
    </div>
  );
};

export default About;

/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FcSalesPerformance, FcComboChart, FcManager } from "react-icons/fc";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const CounterUp = () => {
  const [counterUp, setCounterUp] = useState(false);
  return (
    <div className="w-[90%] mx-auto mt-28 mb-10 flex flex-col md:flex-row gap-0 bg-accent">
      <div className="card rounded-none w-full bg-accent shadow-xl">
        <ScrollTrigger
          onEnter={() => setCounterUp(true)}
          onExit={() => setCounterUp(false)}
        >
          <div className="card-body  text-white items-center">
            <h2 className="card-title p-1 rounded-lg shadow-md text-5xl">
              <FcSalesPerformance />
            </h2>
            {counterUp && (
              <CountUp start={0} end={2500} delay={0}>
                {({ countUpRef }) => (
                  <div className="text-3xl  mb-0">
                    <span ref={countUpRef} /> <sup>+</sup>
                  </div>
                )}
              </CountUp>
            )}

            <p className="text-xl mt-0">Complete Sale Per Month</p>
          </div>
        </ScrollTrigger>{" "}
      </div>

      <div className="card rounded-none w-full bg-accent shadow-xl">
        <ScrollTrigger
          onEnter={() => setCounterUp(true)}
          onExit={() => setCounterUp(false)}
        >
          <div className="card-body  text-white items-center">
            <h2 className="card-title p-1 rounded-lg shadow-md text-5xl">
              <FcComboChart />
            </h2>
            {counterUp && (
              <CountUp start={0} end={25} delay={0}>
                {({ countUpRef }) => (
                  <div className="text-3xl mb-0">
                    <span ref={countUpRef} /> <sup>+</sup>
                  </div>
                )}
              </CountUp>
            )}

            <p className="text-xl mt-0">Years Practical Experience</p>
          </div>
        </ScrollTrigger>
      </div>

      <div className="card rounded-none w-full bg-accent shadow-xl">
        <ScrollTrigger
          onEnter={() => setCounterUp(true)}
          onExit={() => setCounterUp(false)}
        >
          <div className="card-body  text-white items-center">
            <h2 className="card-title p-1 rounded-lg shadow-md text-5xl">
              <FcManager />
            </h2>
            {counterUp && (
              <CountUp start={0} end={100} delay={0}>
                {({ countUpRef }) => (
                  <div className="text-3xl  mb-0">
                    <span ref={countUpRef} /> <sup>+</sup>
                  </div>
                )}
              </CountUp>
            )}

            <p className="text-xl mt-0">Awesome Team Members</p>
          </div>
        </ScrollTrigger>
      </div>
    </div>
  );
};

export default CounterUp;

/* eslint-disable no-unused-vars */
import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";

import { useLoaderData } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";

const Blog = () => {
  useTitle("Blog");
  const questions = useLoaderData();
  // https://assets4.lottiefiles.com/packages/lf20_4sabgt2r.json

  return (
    <>
      <div className="w-[90%] mx-auto mb-10">
        <Player
          autoplay
          loop
          src="https://assets4.lottiefiles.com/packages/lf20_4sabgt2r.json"
          style={{ height: "300px", width: "300px" }}
        ></Player>
        {questions.map((question) => {
          return (
            <div
              key={question.id}
              tabIndex={0}
              className="collapse my-4 collapse-arrow border border-base-300 bg-base-100 rounded-box"
            >
              <div className="collapse-title text-xl font-medium">
                {question?.question}
              </div>
              <div className="collapse-content">
                <p>{question.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Blog;

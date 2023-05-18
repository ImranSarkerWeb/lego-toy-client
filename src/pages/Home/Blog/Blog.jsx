/* eslint-disable no-unused-vars */
import React from "react";

import { useLoaderData } from "react-router-dom";

const Blog = () => {
  const questions = useLoaderData();
  console.log(questions);

  return (
    <>
      <div className="w-[90%] mx-auto my-10">
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

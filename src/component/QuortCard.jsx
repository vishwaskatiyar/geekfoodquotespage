// QuoteCard.js
// import React from "react";
import PropTypes from "prop-types";
import QuortData from "./quatData";

const QuoteCard = ({ quote, author }) => {
  return (
    <div className="m-auto max-w-xxl w-full bg-white shadow-lg rounded-xl overflow-hidden my-10">
      <div className="px-10 py-8 bg-blue-600 dark:bg-gray-800 text-white">
        <div className="text-center mb-4">
          <h2 className="font-bold text-2xl">{author}</h2>
          <div className="h-1 w-20 mx-auto my-2 bg-white"></div>
        </div>
        <p className="text-lg text-center">{quote}</p>
      </div>
    </div>
  );
};

QuoteCard.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

const QuoteCardList = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 pt-16">
      <div className="w-4/5">
        {QuortData.map((data, index) => (
          <QuoteCard key={index} quote={data.Quort} author={data.Author} />
        ))}
      </div>
    </div>
  );
};

export default QuoteCardList;

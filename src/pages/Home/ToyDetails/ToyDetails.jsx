import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const toy = useLoaderData();
  return <div>detils will be here {toy.toyName}</div>;
};

export default ToyDetails;

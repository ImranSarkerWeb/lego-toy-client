/* eslint-disable react/prop-types */

const GalleryCard = ({ toy }) => {
  const { image, name } = toy;
  return (
    <div>
      <div className=" relative rounded-2xl w-full shadow-xl">
        <figure>
          <img className="rounded-2xl w-full h-60" src={image} alt="" />
        </figure>

        <div className="absolute rounded-2xl inset-0 bg-slate-300 hover:bg-opacity-30  opacity-0 hover:transition hover:duration-300 hover:opacity-100 card-body ">
          <h2 className="card-title text-accent ">{name}</h2>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;

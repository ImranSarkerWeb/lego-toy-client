const Loader = () => {
  return (
    <div className="flex items-center  justify-center">
      <span className="text-6xl font-bold text-accent">Loding</span>
      <div className="animate-spin border-dashed border-accent w-16 h-16 rounded-full p-4 m-4 border-8"></div>
    </div>
  );
};

export default Loader;

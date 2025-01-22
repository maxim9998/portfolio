import Loader from "../loader/Loader";

const LoadingPage = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Loader width="50px" color="green" />
    </div>
  );
};

export default LoadingPage;

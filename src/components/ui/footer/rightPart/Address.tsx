const Address = () => {
  return (
    <div className="flex items-start justify-between">
      <p className="text-green w-20">Address:</p>
      <address className="not-italic flex flex-col items-start text-left">
        <p className="text-lightGreen">
          <span>Armenia, Yerevan</span>
        </p>
      </address>
    </div>
  );
};

export default Address;

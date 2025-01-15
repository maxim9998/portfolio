const Address = () => {
  return (
    <div className="flex items-start justify-between w-full">
      <p className="text-green w-20">Address:</p>
      <address className="not-italic flex flex-col items-start text-left w-[54.3%]">
        <p className="text-lightGreen">
          <span>Tsarav Aghbyur St,</span>
          <br />
          <span>Avan District, Yerevan 0052</span>
          <br />
          <span>Armenia</span>
        </p>
      </address>
    </div>
  );
};

export default Address;

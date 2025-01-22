const Address = () => {
  return (
    <div className="flex items-start justify-between">
      <p className="text-green w-20">Address:</p>
      <address className="not-italic flex flex-col items-start text-left">
        <p className="text-lightGreen">
          <span>Tsarav Aghbyur St, Avan District,</span>
          <br />
          <span>Yerevan 0052</span>
          <br />
          <span>Armenia</span>
        </p>
      </address>
    </div>
  );
};

export default Address;

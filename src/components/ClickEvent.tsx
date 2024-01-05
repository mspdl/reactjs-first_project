const ClickEvent = () => {
  function handleClick() {
    alert("it worked (First approach)!");
  }

  const handleButtonClick = () => {
    alert("it worked (Fourth approach)!");
  };

  const handleButtonClickWithParam = (param: string) => {
    alert(`it worked (${param} approach)!`);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="p-3 bg-black text-white rounded-md w-1/5"
      >
        Click here - First approach
      </button>
      <button
        onClick={function click() {
          alert("it worked (Second approach)!");
        }}
        className="p-3 bg-black text-white rounded-md w-1/5"
      >
        Click here - Second approach
      </button>
      <button
        onClick={() => {
          alert("it worked (Third approach)!");
        }}
        className="p-3 bg-black text-white rounded-md w-1/5"
      >
        Click here - Third approach
      </button>
      <button
        onClick={handleButtonClick}
        className="p-3 bg-black text-white rounded-md w-1/5"
      >
        Click here - Fourth approach
      </button>
      <button
        onClick={() => handleButtonClickWithParam("Fifth")}
        className="p-3 bg-black text-white rounded-md w-1/5"
      >
        Click here - Fifth approach
      </button>
    </>
  );
};

export default ClickEvent;

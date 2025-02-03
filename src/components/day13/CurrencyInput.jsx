const CurrencyInput = ({ krw, usd, onChangeInput }) => {
  return (
    <>
      <div>
        <span>krw: </span>
        <input name="krw" type="number" onChange={onChangeInput} value={krw} />
      </div>
      <div>
        <span>usd: </span>
        <input name="usd" type="number" onChange={onChangeInput} value={usd} />
      </div>
    </>
  );
};

export default CurrencyInput;

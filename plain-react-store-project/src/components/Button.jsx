const Button = ({ onClickHandler, value, title }) => {
  return (
    <button onClick={onClickHandler} value={value} className="recommended-btn">
      {title}
    </button>
  );
};

export default Button;

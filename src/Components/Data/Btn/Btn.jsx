const Btn = ({ children }) => {
  return (
    <div>
      <a href="/#" className="text-white btn">
        {children}
      </a>
    </div>
  );
};

export default Btn
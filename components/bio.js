const Bio = ({ mb, children }) => {
  return <div className={`bio mb-${mb}`}>{children}</div>;
};

export default Bio;

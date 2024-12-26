const PreventClickBubbling = ({
  children,
  ignoredSelector = ".content-box",
}) => {
  const handleEvent = (e) => {
    if (e.target.closest(ignoredSelector)) {
      e.stopImmediatePropagation();
      e.preventDefault();
      return false;
    }
  };

  return (
    <div
      onClick={handleEvent}
      onMouseDown={handleEvent}
      onTouchStart={handleEvent}
      onMouseUp={handleEvent}
    >
      {children}
    </div>
  );
};

export default PreventClickBubbling;

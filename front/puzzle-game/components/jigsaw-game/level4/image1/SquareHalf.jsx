// SquareHalf.js
const SquareHalf = ({ position, type, orientation }) => {
  const size = 20; // The full size of a square
  const style = {
    position: 'absolute',
    width: orientation === 'horizontal' ? `${size / 2}px` : `${size}px`,
    height: orientation === 'vertical' ? `${size / 2}px` : `${size}px`,
    background: type === 'protrusion' ? 'white' : 'transparent',
    ...position,
  };

  if (type === 'indentation') {
    style.border = '2px solid black';
    if (orientation === 'horizontal') {
      style.borderRadius = '0 50% 50% 0'; // Half circle on the right
    } else {
      style.borderRadius = '50% 0 0 50%'; // Half circle on the bottom
    }
  }

  return <div style={style} />;
};

export default SquareHalf;

const NewsIcon = ({ isActive }) => (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.6786 3H7.82143C5.57284 3 3.75 4.82284 3.75 7.07143V17.9286C3.75 20.1772 5.57284 22 7.82143 22H18.6786C20.9272 22 22.75 20.1772 22.75 17.9286V7.07143C22.75 4.82284 20.9272 3 18.6786 3Z"
      stroke={isActive ? '#ff4310' : '#AAAAAA'}
      strokeWidth="2"
    />
    <path
      d="M5.10742 9.78577H21.3931"
      stroke={isActive ? '#ff4310' : '#AAAAAA'}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default NewsIcon;

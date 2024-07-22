const TrophyIcon = ({ isActive }) => (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_687_2461)">
      <path
        d="M12.2487 17.7142C8.41952 17.7142 5.31536 14.3884 5.31536 10.2857V3.49202C5.31536 2.89982 5.31536 2.60373 5.4153 2.3741C5.52128 2.13059 5.70396 1.93486 5.93124 1.82131C6.14556 1.71423 6.42191 1.71423 6.97463 1.71423H17.5227C18.0755 1.71423 18.3518 1.71423 18.5661 1.82131C18.7934 1.93486 18.9761 2.13059 19.0821 2.3741C19.182 2.60373 19.182 2.89982 19.182 3.49202V10.2857C19.182 14.3884 16.0779 17.7142 12.2487 17.7142ZM12.2487 17.7142V22.2857M17.582 22.2857H6.91536M22.9154 3.99995V9.71423M1.58203 3.99995V9.71423"
        stroke={isActive ? '#ff4310' : '#AAAAAA'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_687_2461">
        <rect width="24" height="24" fill="white" transform="translate(0.25)" />
      </clipPath>
    </defs>
  </svg>
);

export default TrophyIcon;

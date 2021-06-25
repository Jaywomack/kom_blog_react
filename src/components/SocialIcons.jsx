import { Link } from 'react-router-dom';

const SocialIcons = () => {
  return (
    <ul className='social-icons flex items-baseline justify-center py-2 bg-black text-white'>
      <li>
        <Link to={{ pathname: 'https://facebook.com' }} target='_blank'>
          <i class='fab fa-facebook-square fa-2x mr-3 '></i>
        </Link>
      </li>
      <li>
        <Link to={{ pathname: 'https://twitter.com' }} target='_blank'>
          <i class='fab fa-twitter-square fa-2x mr-3'></i>
        </Link>
      </li>
      <li>
        <Link to={{ pathname: 'https://linkedin.com' }} target='_blank'>
          <i class='fab fa-linkedin fa-2x mr-3'></i>
        </Link>
      </li>
      <li>
        <Link to={{ pathname: 'https://youtube.com' }} target='_blank'>
          <i class='fab fa-youtube-square fa-2x '></i>
        </Link>
      </li>
    </ul>
  );
};

export default SocialIcons;

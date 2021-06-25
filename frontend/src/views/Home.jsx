import BlogPreview from '../components/BlogPreview';

const Home = () => {
  return (
    <div className='home'>
      <div className='top-rated grid grid-cols-1 gap-8 justify-items-center'>
        <h1 className='text-4xl my-12 '>Top Rated Blogs</h1>
        <BlogPreview />
        <BlogPreview />
        <BlogPreview />
      </div>
      <div className='top-rated grid grid-cols-1 gap-8 justify-items-center'>
        <h1 className='text-4xl my-12 '> Blogs About Health</h1>
        <BlogPreview />
        <BlogPreview />
        <BlogPreview />
      </div>
      <div className='top-rated grid grid-cols-1 gap-8 justify-items-center'>
        <h1 className='text-4xl my-12 '>Blogs About Wealth</h1>
        <BlogPreview />
        <BlogPreview />
        <BlogPreview />
      </div>
      <div className='top-rated grid grid-cols-1 gap-8 justify-items-center'>
        <h1 className='text-4xl my-12 '>Blogs About Wisdom</h1>
        <BlogPreview />
        <BlogPreview />
        <BlogPreview />
      </div>
    </div>
  );
};

export default Home;

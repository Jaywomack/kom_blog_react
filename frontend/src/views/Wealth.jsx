import BlogPreview from '../components/BlogPreview';
const Wealth = () => {
  return (
    <div className='wealth'>
      <div className='wealth-blogs grid grid-cols-1 gap-8 justify-items-center'>
        <h1 className='text-4xl my-12 '>Wealth Blogs</h1>
        <BlogPreview />
        <BlogPreview />
        <BlogPreview />
        <BlogPreview />
        <BlogPreview />
        <BlogPreview />
        <BlogPreview />
        <BlogPreview />
        <BlogPreview />
      </div>
    </div>
  );
};

export default Wealth;

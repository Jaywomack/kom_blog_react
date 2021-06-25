import BlogPreview from '../components/BlogPreview';
const Health = () => {
  return (
    <div className='health'>
      <div className='health-blogs grid grid-cols-1 gap-8 justify-items-center'>
        <h1 className='text-4xl my-12 '>Health Blogs</h1>
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

export default Health;

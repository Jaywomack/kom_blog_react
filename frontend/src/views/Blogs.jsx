import BlogPreview from '../components/BlogPreview';
const Blogs = () => {
  return (
    <div className='blogs'>
      <div className='all-blogs grid grid-cols-1 gap-8 justify-items-center'>
        <h1 className='text-4xl my-12 '>All Blogs</h1>
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

export default Blogs;

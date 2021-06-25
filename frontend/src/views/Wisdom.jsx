import BlogPreview from '../components/BlogPreview';
const Wisdom = () => {
  return (
    <div className='wisdom'>
      <div className='wisdom-blogs grid grid-cols-1 gap-8 justify-items-center'>
        <h1 className='text-4xl my-12 '>Wisdom Blogs</h1>
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

export default Wisdom;

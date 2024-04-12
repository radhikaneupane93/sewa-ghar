import { useParams } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams();

  // Dummy data 
  const blogs = [
    {
      id: 1,
      title: 'Blog One Title',
      content: 'Detailed content of Blog One goes here...',
    },
    {
      id: 2,
      title: 'Blog Two Title',
      content: 'Detailed content of Blog Two goes here...',
    },
    {
      id: 3,
      title: 'Blog Three Title',
      content: 'Detailed content of Blog Three goes here...',
    },
  ];

  
  const blog = blogs.find(blog => blog.id === parseInt(id));

  
  if (!blog) {
    return <p>Blog not found</p>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">{blog.title}</h2>
      <p className="text-gray-700 mb-8">{blog.content}</p>
    </div>
  );
};

export default BlogDetail;

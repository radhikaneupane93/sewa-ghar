import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export interface Blog {
  _id: string;
  title: string;
  summary: string;
  content: string;
  imageUri: string;
  tags: string[];
  category: string;
  status: string;
  project: string;
  position: number;
  createdAt: string;
  updatedAt: string;
  slug: string;
}

interface PaginatedBlog {
  data: Blog[];
  total: number;
  count: number;
  limit: number;
  offset: number;
}

const Blog = () => {
  const [blogs, setBlogs] = useState<PaginatedBlog>({
    data: [],
    total: 0,
    count: 0,
    limit: 0,
    offset: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogData();
  }, []);

  const fetchBlogData = async () => {
    try {
      const response = await fetch(
        "https://main-cosmos-api-tf-api.trilok.tech/api/projects/sewa-ghar-6619463a358328d88d357a83/posts/public"
      );
      if (response.ok) {
        const data = await response.json();
        setBlogs(data);
        setLoading(false);
      } else {
        console.error("Failed to fetch blog data:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching blog data:", error);
    }
  };

  return (
    <div className="container flex flex-col items-center justify-center mt-32">
      <p className="text-4xl md:text-3xl xl:text-4xl font-semibold text-red-600 mb-6">
        Our Blogs
      </p>
      {loading && <p>Loading...</p>}
      {!loading && blogs.data.length === 0 && <p>No blogs found.</p>}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs.data.map((blog) => (
          <Card>
            <CardActionArea href={`/blogs/${blog.slug}`}>
              <CardMedia
                component="img"
                sx={{ height: 160 }}
                image={blog.imageUri}
                alt={blog.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {blog.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {blog.content}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>

      <div className="text-center mt-8">
      </div>
    </div>
  );
};

export default Blog;

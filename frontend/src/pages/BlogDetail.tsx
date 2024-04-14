import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Blog } from "./Blog";

const BlogDetail = () => {
  const { id } = useParams();

  const [blogDetail, setBlogDetail] = useState<Blog>({
    _id: "",
    title: "",
    summary: "",
    content: "",
    imageUri: "",
    tags: [],
    category: "",
    status: "",
    project: "",
    position: 0,
    createdAt: "",
    updatedAt: "",
    slug: "",
  });

  useEffect(() => {
    fetchBlogDetail();
  }, []);

  const fetchBlogDetail = async () => {
    try {
      const response = await fetch(
        `https://main-cosmos-api-tf-api.trilok.tech/api/projects/sewa-ghar-6619463a358328d88d357a83/posts/public/${id}`
      );
      if (response.ok) {
        const data = await response.json();
        setBlogDetail(data);
      } else {
        console.error("Failed to fetch blog detail:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching blog detail:", error);
    }
  };

  return (
    <div className="container flex flex-col items-center justify-center mt-32">
      <p className="text-4xl md:text-3xl xl:text-4xl font-semibold text-red-600 mb-6">
        {blogDetail.title}
      </p>
      <p>{blogDetail.summary}</p>
      <p>{blogDetail.content}</p>
    </div>
  );
};

export default BlogDetail;

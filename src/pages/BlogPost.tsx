import { useParams, Navigate, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { getBlogById } from "../data/blogs"; 

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = id ? getBlogById(parseInt(id)) : null;

  if (!post || post.type === "external") {
    return <Navigate to="/blog" replace />;
  }

  return (
    <Layout>
      <article className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <button
            onClick={() => navigate("/blog")}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Blog</span>
          </button>

          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
              <span className="uppercase tracking-wider">{post.category}</span>
              <span>•</span>
              <span>{post.readTime}</span>
              <span>•</span>
              <span>{post.date}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif mb-6">
              {post.title}
            </h1>
          </div>

          <div className="overflow-hidden bg-muted mb-12">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content || "" }}
          />
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
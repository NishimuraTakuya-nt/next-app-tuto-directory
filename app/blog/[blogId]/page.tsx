// import BlogList from "@/features/blog/components/BlogList/BlogList";
// import BlogCard from "@/features/blog/components/BlogCard/BlogCard.";
// import BlogImage from "@/features/blog/components/BlogImage/BlogImage";
import * as Blog from "@/features/blog/components";

const BlogPage = async () => {
    const posts = await fetch("https://localhost:3000/api/blog/getAllBlogs", {
        // cache: "no-cache", // SSR
        // cache: "force-cache", // SSG
        next: {revalidate: 3000} // ISR
    });
    console.log(posts);
    return (
        <div>
            <Blog.BlogList />
            <Blog.BlogCard />
            <Blog.BlogImage />
        </div>
    );
};

export default BlogPage;

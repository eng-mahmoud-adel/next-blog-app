import BlogCard from '@/app/_components/BlogCard';
import { fetchBlogById, fetchBlogs } from '@/app/_lib/api';
import { IBlog } from '@/app/_types';

export async function generateStaticParams() {
    const blogs = await fetchBlogs();

    return blogs.map((blog: IBlog) => ({
        id: String(blog.id),
    }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: number }> }) {
    const { id } = await params;
    const blog = await fetchBlogById(id);

    return {
        title: blog.slug,
        description: blog.description,
    }
}

const BlogDetailsPage = async ({ params }: { params: Promise<{ id: number }> }) => {
    const { id } = await params;
    const blog = await fetchBlogById(id);

    return (
        <div className="container mx-auto p-4">
            <BlogCard
                id={blog.id}
                type_of={blog.type_of}
                title={blog.title}
                description={blog.description}
                slug={blog.slug}
                cover_image={blog.cover_image}
                published_at={blog.published_at}
                user={blog.user}
            />
        </div>
    );
};

export default BlogDetailsPage;

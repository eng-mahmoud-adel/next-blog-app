import { fetchBlogs, fetchBlogsTotalPages } from "../_lib/api";
import BlogCard from "../_components/BlogCard";
import Link from "next/link";
import { IBlog } from "../_types";
import PaginationContainer from "../_components/PaginationContainer";
import { PAGE, PER_PAGE } from "../_constants";

export default async function Blogs({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const { page = PAGE } = await searchParams;

  const totalBlogs = await fetchBlogsTotalPages();
  const blogs: IBlog[] = await fetchBlogs(+page, PER_PAGE);

  const totalPages = Math.ceil(totalBlogs / PER_PAGE);

  if (!blogs.length) {
    return (
      <div className="container mx-auto p-4 h-screen flex flex-col gap-4 justify-center items-center">
        <h2 className="text-2xl font-bold">Not Data Found</h2>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-4 flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {blogs.map((blog: IBlog) => (
          <Link key={blog.id} href={`blogs/${blog.id}`}>
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
          </Link>
        ))}
      </div>

      <div className="flex justify-end">
        <PaginationContainer page={+page} totalPages={totalPages} />
      </div>
    </div>
  );
}

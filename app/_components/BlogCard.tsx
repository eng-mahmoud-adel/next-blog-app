import Image from "next/image"
import { IBlog } from "../_types"

const BlogCard = ({ type_of, title, description, cover_image, published_at, user }: Partial<IBlog>) => {
    const imageFallback = 'https://rankenjordan.org/wp-content/themes/apexclinic/images/no-image/No-Image-Found-400x264.png';

    return (
        <div className="p-4 shadow-lg rounded-md flex flex-col justify-around h-[600px] bg-white">
            <div className="relative w-full h-60">
                <Image src={cover_image || imageFallback} alt={""} fill objectFit="cover" loading="lazy" />
            </div>

            <div className="flex flex-col gap-3">
                <h5 className="text-purple-700 text-base font-semibold capitalize">{type_of}</h5>
                <p className="text-xl font-bold">{title}</p>
                <p className="text-lg text-gray-500">{description}</p>
            </div>

            <div className="flex items-center gap-3">
                <div className="relative size-10 rounded-full">
                    <Image src={user?.profile_image_90 || imageFallback} alt={""} fill objectFit="cover" className="rounded-full" loading="lazy" />
                </div>
                <div className="flex flex-col gap-1">
                    <h6 className="text-sm font-semibold">{user?.username || ""}</h6>
                    <p className="text-sm text-gray-500">{published_at}</p>
                </div>
            </div>
        </div>
    )
}

export default BlogCard
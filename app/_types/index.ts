export interface IBlog {
    id: number;
    type_of: string;
    title: string;
    description: string;
    slug: string;
    cover_image: string;
    published_at: string;
    user: IUser;
}

interface IUser {
    username: string;
    profile_image_90: string;
}

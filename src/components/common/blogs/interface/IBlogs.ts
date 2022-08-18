export type BlogData = {
    title: string;
    description: string;
    url: string;
    imgUrl: string;
    urlName: string;
};

export interface Blogs{
    title: string;
    data: BlogData [];
}
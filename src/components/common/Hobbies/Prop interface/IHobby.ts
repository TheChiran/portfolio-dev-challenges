export type HobbyData = {
    index: number;
    title: string;
    subTitle: string;
    imgUrl: string;
};

export interface IHobby{
    title: string;
    data: HobbyData [];
}
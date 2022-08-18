export type HobbyData = {
    title: string,
    subTitle: string,
    imgUrl: string
};

export interface IHobby{
    title: string,
    data: HobbyData []
}
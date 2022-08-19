type Data = {
    name: string;
    url: string;
}

export default interface IPerson{
    name: string;
    profession: string;
    email: string;
    phone: string;
    summary: string;
    imgUrl: string;
    linkedIn: Data;
    github: Data;
}
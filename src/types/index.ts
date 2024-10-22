export type TypeServices = {
    id: number
    title: string
    description: string
    price: string
    condition: string
    image: string
    url: string

}

export type TypeBenefits = {
    id: number
    title: string
    description: string
    image: string
}

export type TypeReviews = {
    id: number
    perfil: string
    name: string
    position: string
    comment: string
}

export type TypeDistricts = {
    name: string
}

export type TypeBlog = {
    id: number;
    category: { text: string }[];
    date: string
    firstTitle: string;
    firstImage: string;
    introduction: string;
    secondTitle: string;
    secondDescription: string;
    secondList: Array<{ text: string }>;
    secondDescription_2: string;
    thirstTitle: string;
    thirstDescription: string;
    thirstList: Array<{ text: string }>;
    fourthTitle: string;
    fourthDescription: string;
    fourthList: Array<{ text: string }>;
    fifthTitle: string;
    fifthDescription: string;
    fifthList: Array<{ text: string }>;
    sixthTitle: string;
    sixthList: Array<{ text: string }>;
    sixthDescription: string;
    seventhTitle: string;
    seventhDescription: string;
    seventhList: Array<{ text: string }>
    conclution: string;
}
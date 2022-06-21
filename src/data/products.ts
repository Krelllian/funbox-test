import cat from '../images/common/cat.png'

export interface ICatFoodProduct {
    id: string,
    supText: string,
    supTextHover: string,
    productName: string,
    with: string,
    portions: number,
    presentMouses: number,
    weightInKilograms: string,
    image: string,
    selectedSubText: string,
    inStock: boolean,
}

const catFoodProducts: ICatFoodProduct[] = [
    {
        id: "1",
        supText: "Сказочное заморское яство",
        supTextHover: "Котэ не одобряет?",
        productName: "Нямушка",
        with: "с фуа-гра",
        portions: 10,
        presentMouses: 1,
        weightInKilograms: "0,5",
        image: cat,
        selectedSubText: 'Печень утки разварная с артишоками.',
        inStock: true,
    },
    {
        id: "2",
        supText: "Сказочное заморское яство",
        supTextHover: "Котэ не одобряет?",
        productName: "Нямушка",
        with: "с рыбой",
        portions: 40,
        presentMouses: 2,
        weightInKilograms: "2",
        image: cat,
        selectedSubText: 'Головы щучьи с чесноком да свежайшая сёмушка.',
        inStock: true,
    },
    {
        id: "3",
        supText: "Сказочное заморское яство",
        supTextHover: "Котэ не одобряет?",
        productName: "Нямушка",
        with: "с курой",
        portions: 100,
        presentMouses: 5,
        weightInKilograms: "5",
        image: cat,
        selectedSubText: 'Филе из цыплят с трюфеляит в бульоне',
        inStock: false,
    }
]

export default catFoodProducts
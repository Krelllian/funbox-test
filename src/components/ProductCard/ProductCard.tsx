import React, { useState } from 'react'
import { ICatFoodProduct } from '../../data/products'
import './ProductCard.scss'

interface IProductCardProps {
    card: ICatFoodProduct,
}

const ProductCard = ({ card }: IProductCardProps) => {
    const [isSelected, setIsSelected] = useState(false)
    const [isHoverSelected, setIsHoverSelected] = useState(false)

    const toggleIsSelected = (e: React.MouseEvent<HTMLElement>) => {
        setIsSelected(prev => prev = !isSelected)
        setIsHoverSelected(false)
    }

    const hoverSelectedHandler = () => {
        if (isSelected) {
            setIsHoverSelected(true)
        }
    }

    const leaveSelectedHandler = () => {
        setIsHoverSelected(false)
    }

    return (
        <div className={`cardsList__card card ${isSelected ? 'selected' : ''} ${card.inStock ? '' : 'disabled'}`}>
            <div className={`card-wrapper ${card.inStock ? '' : 'disabled'}`}>
                <div className='card-content' onClick={toggleIsSelected} onMouseEnter={hoverSelectedHandler} onMouseLeave={leaveSelectedHandler}>
                    {isHoverSelected ?
                        <p className='card__suptext card__suptext--hover-selected'>{card.supTextHover}</p>
                        : <p className='card__suptext'>{card.supText}</p>
                    }
                    <p className='card__product-name'>{card.productName}</p>
                    <p className='card__with'>{card.with}</p>
                    <p className='card__portions'><span>{card.portions}</span>{card.portions === 1 ? ` порция` : ` порций`}</p>
                    <p className='card__gift'>
                        <span>{card.presentMouses > 1 && `${card.presentMouses} `}</span>{card.presentMouses === 1 ? `мышь в подарок`
                            : card.presentMouses < 5 ? `мыши в подарок`
                                : `мышей в подарок`}
                    </p>
                    {card.presentMouses > 4 ? <p className="card__large-buy-text">Заказчик доволен</p> : ''}
                    <div className='card__weight'>{card.weightInKilograms}<span>КГ</span></div>
                    <img className='card__img' src={card.image}></img>
                </div>
            </div>
            {card.inStock ? (isSelected ?
                <div className='card__footer card__footer--selected'><p>{card.selectedSubText}</p></div>
                : <div className='card__footer'><p>Чего сидишь? Порадуй котэ, <button className='card__footer__btn' onClick={toggleIsSelected}>купи.</button></p></div>)
                : <div className='card__footer card__footer--out-of-stock'><p>{`Печалька с ${card.with} закончился`}</p></div>
            }
        </div>
    )
}

export default ProductCard
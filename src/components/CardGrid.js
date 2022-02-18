import React from 'react'
import CardItem from './CardItem'

const CardGrid = ({ items, isLoading }) => {
    return (
        <>
            {isLoading ? (<h1>Loading...</h1>) : (
                <section className='cards'>
                    {items.map(item => <CardItem key={item.id} item={item} />)}
                </section>  
            )}
        </>
    )
}

export default CardGrid
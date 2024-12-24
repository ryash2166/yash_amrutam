import React from 'react'
import Card from './common/Card';
import { CardData } from '../Data/CardData';

const CardList = () => {
  return (
    <div className="container flex items-center justify-center gap-[41px] flex-wrap max-xl:gap-5 max-lg:mt-10">
       {CardData.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          image={card.image}
          rating={card.rating}
          name={card.name}
          experience={card.experience + " of Experience"}
          language={card.language}
          videofee={card.videofee}
          chatfee={card.chatfee}
        />
      ))}
    </div>
  )
}

export default CardList

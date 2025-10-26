import { motion } from 'framer-motion'
import type { CardInnovacionType } from '../types'

type CardPropsType = {
    cards: CardInnovacionType[]
}

export default function CardInnovacion({ cards }: CardPropsType) {
    return (
        <>
            {cards.map((card, index) => (
                <motion.article
                    key={card.titulo}
                    initial={{ opacity: 0 }}            
                    whileInView={{ opacity: 1 }}      
                    transition={{ duration: 1, delay: 0.2, ease: 'easeIn' }}
                    viewport={{ once: true, amount: 0.5 }}   // solo se anima la primera vez, al 50% visible
                    className={`flex flex-col gap-3 px-4 justify-center  min-h-45 ${index < 2 ? 'border-r-3 border-orange-600' : ''}`}
                >
                    <h3 className="text-2xl font-bold text-neutral-50">{card.titulo}</h3>
                    <p className="text-neutral-300">{card.descripcion}</p>
                </motion.article>
            ))}
        </>
    )
}

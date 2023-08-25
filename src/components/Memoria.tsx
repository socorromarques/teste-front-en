import React from "react"

interface MemoriaProps {
    cards: string[]
}

const MessageHistory: React.FC<MemoriaProps> = ({ cards }) => {
    return (
      <div className="h-1/2 w-full rounded bg-pink-300 p-4 ">
        <h1>Memoria</h1>
        <ul>
          {cards.map((card, index) => (
            <li key={index}>{card}</li>
          ))}
        </ul>
      </div>
    ) }

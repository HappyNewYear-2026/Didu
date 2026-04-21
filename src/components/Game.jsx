"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const BALLOONS = ["🎈", "🎈", "🎈"]

export default function Game({ setCurrentPage }) {
  const [balloons, setBalloons] = useState(
    Array.from({ length: 12 }, (_, i) => ({
      id: i,
      popped: false,
      emoji: BALLOONS[i % BALLOONS.length],
    }))
  )

  const popBalloon = (id) => {
    const updated = balloons.map((b) =>
      b.id === id ? { ...b, popped: true } : b
    )
    setBalloons(updated)

    if (updated.every((b) => b.popped)) {
      setTimeout(() => {
        setCurrentPage("diary")
      }, 900)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center select-none">
      <h1 className="text-3xl md:text-4xl text-pink-300 mb-8">
        👶🏻🪄<br />
        Pop all the balloons 🎈
      </h1>

      <div className="grid grid-cols-3 gap-6">
        {balloons.map((balloon) => (
          <div
            key={balloon.id}
            className="flex h-24 w-24 items-center justify-center md:h-28 md:w-28"
          >
            <motion.span
              onClick={() => !balloon.popped && popBalloon(balloon.id)}
              className={`text-6xl md:text-7xl ${
                balloon.popped
                  ? "pointer-events-none"
                  : "cursor-pointer"
              }`}
              initial={{ scale: 0, y: 20, opacity: 0 }}
              animate={
                balloon.popped
                  ? { scale: 1.8, opacity: 0, rotate: 20 }
                  : { scale: 1, y: 0, opacity: 1, rotate: 0 }
              }
              transition={{ duration: 0.35 }}
              whileTap={balloon.popped ? undefined : { scale: 0.8 }}
              whileHover={balloon.popped ? undefined : { scale: 1.15 }}
            >
              {balloon.emoji}
            </motion.span>
          </div>
        ))}
      </div>

      <p className="mt-10 text-purple-200 text-sm md:text-base">
        Pop every balloon to unlock something special 💖<br />
      </p>
    </div>
  )
}


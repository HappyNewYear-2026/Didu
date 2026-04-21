"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export default function GiftPage({ setMusicPlaying, setShowMusicPlayer, setMusicTrack }) {
  const [giftOpened, setGiftOpened] = useState(false)
  const [showSurprise, setShowSurprise] = useState(false)

  const openGift = () => {
    setGiftOpened(true)
    setTimeout(() => {
      setShowSurprise(true)
    }, 1200)
  }

  const handleLoveClick = () => {
    setMusicTrack?.("/audio/y2mate.mp3")
    setShowMusicPlayer?.(true)
    setMusicPlaying?.(true)
    window.open(
      "https://my-madam-jii.github.io/Play_Game/",
      "_blank"
    )
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center relative overflow-hidden">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-3xl text-pink-300 mb-16"
      >
        Ye khash tere ley... 💝
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative"
      >
        <AnimatePresence mode="wait">
          {!giftOpened ? (
            <motion.div
              key="gift-box"
              onClick={openGift}
              className="cursor-pointer relative"
            >
              <motion.img
                src="/gifs/gift.gif"
                alt="Gift"
                className="w-56 h-56 mx-auto"
                animate={{ rotate: [0, 2, -2, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <p className="text-pink-200 mt-6 text-xl">
                Click to open..! 🎁✨
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="opened"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="space-y-12"
            >
              {/* Teddy */}
              <div className="relative">
                <div className="absolute inset-0 w-64 h-64 mx-auto bg-gradient-to-r from-pink-400/30 to-purple-400/30 rounded-full blur-2xl"></div>
                <img
                  src="/gifs/teddy-giving-flower.gif"
                  alt="Teddy"
                  className="w-52 mx-auto relative z-10"
                />
              </div>

              <AnimatePresence>
                {showSurprise && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="space-y-8 max-w-lg mx-auto"
                  >
                    {/* 💌 UPDATED LOVE BUTTON */}
                    <motion.button
                      onClick={handleLoveClick}
                      animate={{
                        scale: [1.2, 1.35, 1.2],
                        rotate: [0, 3, -3, 0],
                        filter: [
                          "drop-shadow(0 0 6px rgba(255,182,193,0.6))",
                          "drop-shadow(0 0 14px rgba(255,105,180,0.9))",
                          "drop-shadow(0 0 6px rgba(255,182,193,0.6))",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      whileHover={{ scale: 1.5 }}
                      whileTap={{ scale: 1.3 }}
                      className="mx-auto text-5xl cursor-pointer"
                    >
                      💌
                    </motion.button>

                    <motion.p className="text-2xl text-pink-300">
                      Make a wish & cut it.🌹
                    </motion.p>

                    <motion.p className="text-lg text-purple-200">
                      Didu...<br/>
                      There are some people in life who come & go.<br/>
                      Then there are people who stayed forever.<br/>
                      You’re one of those rare person in my life.💕<br/>

                      From childhood memories to the moments we share today,<br/>
                      You know about all my secrets & keeps it safe.😌<br/>
                      You Proved people wrong, that "larkiyon ke pet me baat nhi pachti".🤭

                      And today, on your birthday,
                      I just want you to know that<br/>
                      I'm too shy to talk & to show my feelings..❤️🔥<br/>
                      But i cares you, loves you a lot 'more than all'.🫣<br/>

                      You deserve all the Happiness in the world…<br/>
                      but don’t worry, I’m already planning to give you more than that 😉<br/>

                      The people you know, they all proud of you…<br/>
                      Stay Happy & Stay safe...💖<br/>

                      Keep growing & crack any Gov. exam this year.😂

                      
                    </motion.p>

                    <motion.p className="text-xl text-pink-200">
                      Once again...<br />
                      🎂 Happy Birthday, Didu..👶🏻<br/><br/>
                      
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

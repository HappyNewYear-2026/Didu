"use client"

import { motion } from "framer-motion"

export default function LetterPage({ setCurrentPage }) {
  const handleContinue = () => {
    setCurrentPage("hug")
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-2xl text-center space-y-8"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-2xl text-pink-300 mb-8 mt-10 md:mt-0"
        >
          On your birthday,<br /> I truly pray for you that...!ðŸ˜Œ
        </motion.h2>

        <div className="flex justify-center mb-8">
          <motion.div
            initial={{ opacity: 0, rotate: -4, y: 30 }}
            animate={{ opacity: 1, rotate: 0, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="relative group cursor-pointer mx-auto"
            whileHover={{
              y: -2,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="bg-white p-3 rounded-2xl shadow-lg transform transition-all duration-300 group-hover:shadow-pink-200/40 max-w-[220px]">
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-pink-50 to-purple-50">
                <img
                  src="/images/1.jpg"
                  alt="Beautiful memory"
                  className="w-full h-40 object-cover"
                />

                <div className="absolute top-1 right-1">
                  <span className="text-xs">ðŸ’•</span>
                </div>
              </div>

              <div className="mt-3 px-2 py-2 bg-white">
                <div className="flex justify-center space-x-1">
                  <div className="w-8 h-0.5 bg-pink-200 rounded-full"></div>
                  <div className="w-6 h-0.5 bg-purple-200 rounded-full"></div>
                  <div className="w-10 h-0.5 bg-pink-200 rounded-full"></div>
                </div>
                <div className="flex justify-center space-x-1 mt-1">
                  <div className="w-12 h-0.5 bg-purple-200 rounded-full"></div>
                  <div className="w-4 h-0.5 bg-pink-200 rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-12 h-6 rounded-md shadow-sm opacity-90 bg-gradient-to-r from-yellow-200 to-yellow-300 border border-yellow-400/30"></div>

            <motion.div
              className="absolute -top-1 -right-2 text-sm"
              animate={{
                y: [0, -3, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
              }}
            >
              ðŸŽ€
            </motion.div>

            <motion.div
              className="absolute -bottom-2 -left-2 text-sm"
              animate={{
                y: [0, -2, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Number.POSITIVE_INFINITY,
              }}
            >
              ðŸŒº
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="space-y-6"
        >
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="text-xl text-purple-200 leading-relaxed"
          >
            your birthday is filled with as much warm and lovely as the feeling you get, when you put pizza on your mouth...ðŸ•
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="text-lg text-pink-200 leading-relaxed max-w-lg mx-auto"
          >
            let make me more wishes for you..ðŸ¤”.<br />
            <br />
            ðŸ”¸May God gives you lots of Happiness....ðŸ™‚<br />
            ðŸ”¸May God keep you away from any disaster.<br />
            ðŸ”¸May God bless you lots of Vitamins, So that your bones become strong as me.ðŸ˜<br /><br />
            ðŸ”¸May God always keeps such a lovely smile on your face...ðŸ¤­
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 0.8 }}
            className="text-pink-300 text-xl mt-6"
          >
            Wish that all happiness follow you quietly, forever...â£ï¸
          </motion.p>
        </motion.div>

        <motion.button
          onClick={handleContinue}
          className="mt-10 mb-10 md:mb-0 px-10 py-4 bg-gradient-to-r from-pink-500/25 to-purple-500/25 backdrop-blur-sm border border-pink-300/40 rounded-full text-pink-200 text-lg hover:from-pink-500/35 hover:to-purple-500/35 transition-all duration-300 shadow-lg shadow-pink-500/20"
          whileHover={{
            scale: 1.02,
            boxShadow: "0 0 25px rgba(236, 72, 153, 0.3)",
            y: -1,
          }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          Next..âœ¨
        </motion.button>
      </motion.div>
    </div>
  )
}

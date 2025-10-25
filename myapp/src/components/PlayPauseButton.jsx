import { motion, AnimatePresence } from "framer-motion";
import playImg from "../assets/playbutton.jpg";
import pauseImg from "../assets/pausebutton.jpg";

function PlayPauseButton({ isPlaying, onToggle }) {
    return (
      <div className="relative w-16 h-16">
        <AnimatePresence mode="wait">
          {isPlaying ? (
            <motion.button
              key="pause"
              onClick={() => onToggle(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0"
            >
              <img src={pauseImg} alt="Pause" className="w-16 h-16 rounded-full object-cover shadow-sm" />
            </motion.button>
          ) : (
            <motion.button
              key="play"
              onClick={() => onToggle(true)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0"
            >
              <img src={playImg} alt="Play" className="w-16 h-16 rounded-full object-cover shadow-sm" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    );
  }
  export default PlayPauseButton;
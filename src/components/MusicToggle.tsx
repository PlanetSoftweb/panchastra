import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/outline';

function MusicToggle() {
  const [isMuted, setIsMuted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio('https://vasanigroup.co.in/yglaroaj/2025/02/samurai-flutes-ethereal-fantasy-flute-relaxing-meditation-music-248255.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.2;
    
    // Load the audio
    audioRef.current.load();
    
    // Handle audio loaded
    audioRef.current.addEventListener('canplaythrough', () => {
      setIsLoaded(true);
      // Try to play audio
      const playPromise = audioRef.current?.play();
      if (playPromise) {
        playPromise.catch(() => {
          // Auto-play was prevented
          setIsMuted(true);
        });
      }
    });
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMute = () => {
    if (audioRef.current && isLoaded) {
      if (isMuted) {
        const playPromise = audioRef.current.play();
        if (playPromise) {
          playPromise.catch(() => {
            setIsMuted(true);
          });
        }
      } else {
        audioRef.current.pause();
      }
      setIsMuted(!isMuted);
    }
  };

  if (!isLoaded) return null;

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleMute}
      className="fixed bottom-6 left-6 z-50 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
    >
      {isMuted ? (
        <SpeakerXMarkIcon className="w-5 h-5" />
      ) : (
        <SpeakerWaveIcon className="w-5 h-5" />
      )}
    </motion.button>
  );
}

export default MusicToggle;
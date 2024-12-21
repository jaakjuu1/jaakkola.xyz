import { useState, useEffect } from "react";
import { hintSets, type Hint } from "../config/hints";
import { FaSnowflake, FaGift } from 'react-icons/fa';
import confetti from 'canvas-confetti';
import { playFireworks } from '../utils/soundEffects';
import { processHintImage } from '../utils/imageProcessing.ts';

interface PasswordFormProps {
  currentHintId?: string;
  hintSetId?: string;
  isFinal?: boolean;
}

interface StoredHintState {
  hintId: string;
  hintSetId: string;
  displayCount: number;
}

export default function PasswordForm({
  currentHintId,
  hintSetId: initialHintSetId,
}: PasswordFormProps) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  
  const [currentHintState, setCurrentHintState] = useState<{
    hint: Hint | null;
    hintSetId: string | null;
  }>(() => {
    if (typeof window !== 'undefined') {
      const savedState = localStorage.getItem('hintState');
      if (savedState) {
        const parsed: StoredHintState = JSON.parse(savedState);
        const hint = parsed.hintSetId ? hintSets[parsed.hintSetId]?.hints[parsed.hintId] : null;
        return {
          hint,
          hintSetId: parsed.hintSetId
        };
      }
    }
    return {
      hint: initialHintSetId && currentHintId 
        ? hintSets[initialHintSetId]?.hints[currentHintId] 
        : null,
      hintSetId: initialHintSetId || null
    };
  });

  useEffect(() => {
    async function loadHintImage() {
      if (currentHintState.hint) {
        const processedHint = await processHintImage(currentHintState.hint);
        if (processedHint.imageUrl !== currentHintState.hint.imageUrl) {
          setCurrentHintState(prev => ({
            ...prev,
            hint: processedHint
          }));
        }
        setImageUrl(processedHint.imageUrl || null);
      }
    }

    loadHintImage();
  }, [currentHintState.hint?.id]);

  const updateHintState = async (newHint: Hint | null, newHintSetId: string | null) => {
    if (newHint) {
      const processedHint = await processHintImage(newHint);
      setCurrentHintState({
        hint: processedHint,
        hintSetId: newHintSetId
      });
      setImageUrl(processedHint.imageUrl || null);
      
      if (typeof window !== 'undefined' && newHintSetId) {
        localStorage.setItem('hintState', JSON.stringify({
          hintId: processedHint.id,
          hintSetId: newHintSetId,
          displayCount: (processedHint.displayCount || 0) + 1
        }));
      }
    } else {
      setCurrentHintState({
        hint: null,
        hintSetId: newHintSetId
      });
      setImageUrl(null);
    }
  };

  const fireConfetti = () => {
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    
    playFireworks();
    
    const defaults = { 
      startVelocity: 30, 
      spread: 360, 
      ticks: 60, 
      zIndex: 100,
      gravity: 0.8,
      scalar: 1.2,
      shapes: ['star', 'circle']
    };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.2, 0.4), y: 0.7 },
        colors: ['#ff0000', '#00ff00', '#ffffff', '#FFD700', '#ff69b4'],
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.6, 0.8), y: 0.7 },
        colors: ['#ff0000', '#00ff00', '#ffffff', '#FFD700', '#ff69b4'],
      });
    }, 250);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await fetch("/api/verify-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password,
          currentHintId: currentHintState.hint?.id,
          hintSetId: currentHintState.hintSetId,
        }),
      });

      const data = await response.json();

      if (data.success) {
        fireConfetti();

        if (data.isComplete) {
          setSuccess(data.message);
          if (typeof window !== 'undefined') {
            localStorage.removeItem('hintState');
          }
          setTimeout(() => {
            window.location.href = "/success";
          }, 3000);
        } else if (data.hintSetId) {
          const firstHint = hintSets[data.hintSetId].hints.hint1;
          updateHintState(firstHint, data.hintSetId);
          setSuccess('Oikein! Tervetuloa seikkailuun.');
          setPassword('');
        } else {
          const nextHintId = currentHintState.hint?.nextHintId;
          if (nextHintId && currentHintState.hintSetId) {
            const nextHint = hintSets[currentHintState.hintSetId].hints[nextHintId];
            updateHintState(nextHint, currentHintState.hintSetId);
            setSuccess(data.message);
            setPassword('');
          }
        }
      } else {
        setError(data.message || "Väärä vastaus. Yritä uudelleen!");
      }
    } catch (error) {
      setError("Järjestelmävirhe. Yritä myöhemmin uudelleen.");
    }
  };

  return (
    <div className="w-full relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="snowflake-container">
          {[...Array(20)].map((_, i) => (
            <FaSnowflake key={i} className="text-white/30 absolute animate-fall" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${Math.random() * 20 + 10}px`
            }} />
          ))}
        </div>
      </div>

      <div className="relative z-10 bg-gradient-to-b from-green-900/80 to-red-900/80 p-8 rounded-2xl shadow-2xl border-2 border-gold animate-glow">
        {currentHintState.hint ? (
          <div className="space-y-6">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <FaGift className="text-3xl text-red-400 animate-bounce" />
                <h1 className="text-3xl font-bold text-red-400 font-christmas">
                  {currentHintState.hint.title}
                </h1>
                <FaGift className="text-3xl text-red-400 animate-bounce" />
              </div>
              <p className="text-xl text-green-300 mb-8 font-christmas">
                {currentHintState.hint.description}
              </p>
            </div>
            
            {imageUrl && (
              <div className="w-full flex justify-center my-4">
                <img
                  src={imageUrl}
                  alt="Hint Image"
                  className="max-w-full h-auto rounded-lg shadow-xl"
                  style={{ maxHeight: '400px' }}
                />
              </div>
            )}
            
            <div className="prose prose-lg">
              <p className="text-gold font-christmas text-2xl text-center">
                Tässä arvoituksesi:
              </p>
              <blockquote className="italic text-white border-l-4 border-gold pl-4 my-4 bg-green-900/50 p-6 rounded-lg shadow-xl backdrop-blur-sm">
                {currentHintState.hint.riddle}
              </blockquote>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <h1 style={{ wordBreak: 'break-word' }} className="text-4xl font-bold text-red-400 mb-6 font-christmas animate-pulse">
              Tervetuloa arvoitusseikkailuun!
            </h1>
            <p className="text-green-300 text-2xl mb-8 font-christmas">
              Syötä salasana aloittaaksesi seikkailun.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 mt-8">
          <div>
            <label
              htmlFor="password"
              className="block text-xl font-christmas text-gold mb-3"
            >
              {currentHintState.hint ? 'Anna vastauksesi' : 'Anna salasana'}
            </label>
            <input
              type="text"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gold rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 bg-white/10 text-white text-lg placeholder-white/50 backdrop-blur-sm"
              required
            />
          </div>
          {error && <p className="text-red-400 text-lg font-medium animate-shake">{error}</p>}
          {success && (
            <p 
              className="text-green-300 text-lg font-medium opacity-0 transition-opacity duration-[3000ms] ease-out"
              style={{ animation: 'fadeIn 0ms forwards', opacity: 1 }}
              onAnimationEnd={() => {
                setTimeout(() => {
                  setSuccess("");
                }, 3000);
              }}
            >
              {success}
            </p>
          )}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-4 px-6 rounded-lg hover:from-red-700 hover:to-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 text-xl font-christmas transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0"
          >
            Lähetä
          </button>
        </form>
      </div>
    </div>
  );
}

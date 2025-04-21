import { useEffect, useState, useRef } from "react";
import BreathingQuestions from "./BreathingQuestions";

interface BreathingModalProps {
  open: boolean;
  onClose: () => void;
}

const BASE_PHASES = [
  { label: "Breathe in", duration: 4000 },
  { label: "Hold", duration: 4000 },
  { label: "Breathe out", duration: 4000 },
  { label: "Hold", duration: 4000 },
];

export default function BreathingModal({ open, onClose }: BreathingModalProps) {
  const [step, setStep] = useState<'questions' | 'breathing'>('questions');
  const [userOptions, setUserOptions] = useState<{ stress: number; duration: number } | null>(null);
  const [phase, setPhase] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [elapsed, setElapsed] = useState(0); // in ms
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [totalTime, setTotalTime] = useState(180000); // default 3min
  const [phases, setPhases] = useState(BASE_PHASES);

  useEffect(() => {
    if (!open) return;
    setStep('questions');
    setUserOptions(null);
    setPhase(0);
    setElapsed(0);
    setPhases(BASE_PHASES);
    setTotalTime(180000);
  }, [open]);

  // Breathing session logic
  useEffect(() => {
    if (step !== 'breathing' || !userOptions) return;
    setAnimating(true);
    setPhase(0);
    setElapsed(0);
    // Adjust phase durations based on stress or duration
    let userPhases = BASE_PHASES.map(p => ({ ...p }));
    if (userOptions.stress === 5) {
      // If very stressed, make inhale longer
      userPhases[0].duration += 1000;
      userPhases[2].duration -= 500;
    } else if (userOptions.stress === 1) {
      // If calm, make all phases a bit shorter
      userPhases = userPhases.map(p => ({ ...p, duration: Math.max(2000, p.duration - 1000) }));
    }
    setPhases(userPhases);
    setTotalTime(userOptions.duration * 60000);

    let totalElapsed = 0;
    let timeout: NodeJS.Timeout;
    let interval: NodeJS.Timeout;
    function nextPhase(current: number) {
      timeout = setTimeout(() => {
        setPhase((p) => (p + 1) % userPhases.length);
        nextPhase((current + 1) % userPhases.length);
      }, userPhases[current].duration);
    }
    nextPhase(0);
    interval = setInterval(() => {
      totalElapsed += 1000;
      setElapsed((e) => e + 1000);
      if (totalElapsed >= userOptions.duration * 60000) {
        setStep('questions');
        setUserOptions(null);
        setAnimating(false);
        clearInterval(interval);
        clearTimeout(timeout);
      }
    }, 1000);
    return () => {
      setAnimating(false);
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [step, userOptions]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white rounded-xl shadow-xl p-8 max-w-sm w-full relative flex flex-col items-center overflow-visible" style={{ minHeight: 480, minWidth: 360, maxWidth: 400, boxSizing: 'border-box' }}>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl">×</button>
        {step === 'questions' && (
          <BreathingQuestions
            onComplete={(opts) => {
              setUserOptions(opts);
              setStep('breathing');
            }}
          />
        )}
        {step === 'breathing' && userOptions && (
          <div className="flex flex-col items-center justify-center w-full">
            <h2 className="text-2xl font-bold text-center mb-2 text-[rgb(26,62,111)]">Let's Breathe!</h2>
            <div className="text-center text-gray-500 mb-4">{userOptions.duration} min session · Stress: {userOptions.stress}/5</div>
            <div className="relative flex items-center justify-center mb-4 w-full" style={{height: 180, minHeight: 180, maxHeight: 180, width: '100%'}}>
              {/* Animated Breathing Circle */}
              <div
                className={`transition-all duration-1000 animate-bounce-slow`}
                style={{
                  width: phase === 0 ? 160 : phase === 2 ? 80 : 120,
                  height: phase === 0 ? 160 : phase === 2 ? 80 : 120,
                  maxWidth: 180,
                  maxHeight: 180,
                  minWidth: 80,
                  minHeight: 80,
                  borderRadius: "50%",
                  background: `radial-gradient(circle at 70% 30%, #f7e8ff 0%, #6461E0 60%, #4A75B2 100%)`,
                  marginBottom: 0,
                  transition: "width 1s, height 1s, box-shadow 0.7s",
                  boxShadow: phase === 0 || phase === 2 ? "0 0 40px 10px #b3e0ff, 0 0 0 0 #fff" : "0 0 20px 5px #e0c3fc, 0 0 0 0 #fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "visible",
                }}
              >
                {/* Sparkles */}
                <span className="absolute left-2 top-2 animate-pulse text-yellow-300 text-lg select-none">★</span>
                <span className="absolute right-4 bottom-3 animate-pulse text-blue-200 text-md select-none">✦</span>
                <span className="absolute left-8 bottom-8 animate-pulse text-purple-300 text-md select-none">✧</span>
                <span className="absolute right-8 top-8 animate-pulse text-pink-200 text-md select-none">✺</span>
                <span className="text-white text-xl font-semibold w-full text-center select-none z-10 drop-shadow-lg">
                  {phases[phase].label}
                </span>
              </div>
              {/* Fun animated emoji */}
              <span className={`absolute -right-8 top-1 text-3xl transition-transform duration-700 ${phase === 0 ? "scale-125" : "scale-100"}`}>🫧</span>
              <span className={`absolute -left-8 bottom-1 text-2xl transition-transform duration-700 ${phase === 2 ? "scale-125" : "scale-100"}`}>🌬️</span>
            </div>
            <div className="flex justify-between w-full text-xs text-gray-400 mb-2">
              <span>{Math.floor(elapsed / 60000)}:{((elapsed % 60000) / 1000).toString().padStart(2, '0')}</span>
              <span>{Math.floor((totalTime - elapsed) / 60000)}:{(((totalTime - elapsed) % 60000) / 1000).toString().padStart(2, '0')}</span>
            </div>
            <div className="text-gray-600 text-sm mb-2">{Math.ceil(phases[phase].duration / 1000)} seconds · {phases[phase].label}</div>
            <button
              className="mt-2 px-6 py-2 rounded-full font-semibold text-white bg-gradient-to-r from-blue-400 to-purple-500 shadow-lg hover:scale-105 transition-all duration-200"
              onClick={() => {
                setStep('questions');
                setUserOptions(null);
                setAnimating(false);
              }}
            >
              Restart
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

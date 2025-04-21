import { useState } from "react";

interface BreathingQuestionsProps {
  onComplete: (options: { stress: number; duration: number }) => void;
}

const DURATIONS = [3, 5, 10];

export default function BreathingQuestions({ onComplete }: BreathingQuestionsProps) {
  const [stress, setStress] = useState<number | null>(null);
  const [duration, setDuration] = useState<number | null>(null);

  const canContinue = stress !== null && duration !== null;

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h2 className="text-xl font-bold mb-4 text-[rgb(26,62,111)]">Let's personalize your session</h2>
      <div className="mb-6 w-full">
        <label className="block text-gray-700 mb-2 font-medium text-center">How stressed are you right now?</label>
        <div className="flex justify-center gap-3">
          {[1, 2, 3, 4, 5].map((level) => (
            <button
              key={level}
              onClick={() => setStress(level)}
              className={`w-10 h-10 rounded-full border-2 font-bold text-lg transition-all duration-200 ${stress === level ? "bg-blue-500 text-white border-blue-700 scale-110" : "bg-white text-blue-500 border-blue-300 hover:bg-blue-50"}`}
              aria-label={`Stress level ${level}`}
            >
              {level}
            </button>
          ))}
        </div>
        <div className="text-xs text-gray-500 text-center mt-2">1 = Calm, 5 = Very Stressed</div>
      </div>
      <div className="mb-6 w-full">
        <label className="block text-gray-700 mb-2 font-medium text-center">How much time do you have?</label>
        <div className="flex justify-center gap-3">
          {DURATIONS.map((min) => (
            <button
              key={min}
              onClick={() => setDuration(min)}
              className={`px-4 py-2 rounded-full border-2 font-semibold transition-all duration-200 ${duration === min ? "bg-purple-500 text-white border-purple-700 scale-105" : "bg-white text-purple-600 border-purple-300 hover:bg-purple-50"}`}
              aria-label={`${min} minutes`}
            >
              {min} min
            </button>
          ))}
        </div>
      </div>
      <button
        className={`mt-2 px-6 py-2 rounded-full font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg transition-all duration-200 ${canContinue ? "hover:scale-105" : "opacity-60 cursor-not-allowed"}`}
        onClick={() => canContinue && onComplete({ stress: stress!, duration: duration! })}
        disabled={!canContinue}
      >
        Start Breathing
      </button>
    </div>
  );
}

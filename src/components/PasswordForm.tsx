import { useState } from "react";
import { hintSets, type Hint } from "../config/hints";

interface PasswordFormProps {
  currentHintId?: string;
  hintSetId?: string;
  isFinal?: boolean;
}

export default function PasswordForm({
  currentHintId,
  hintSetId: initialHintSetId,
  isFinal = false,
}: PasswordFormProps) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [currentHintState, setCurrentHintState] = useState<{
    hint: Hint | null;
    hintSetId: string | null;
  }>({
    hint: initialHintSetId && currentHintId 
      ? hintSets[initialHintSetId]?.hints[currentHintId] 
      : null,
    hintSetId: initialHintSetId || null
  });

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
        if (data.isComplete) {
          setSuccess(data.message);
          // Redirect to success page after a short delay
          setTimeout(() => {
            window.location.href = "/success";
          }, 2000);
        } else if (data.hintSetId) {
          // Initial password was correct, load the first hint
          const firstHint = hintSets[data.hintSetId].hints.hint1;
          setCurrentHintState({
            hint: firstHint,
            hintSetId: data.hintSetId
          });
          setSuccess('Oikein! Tervetuloa seikkailuun.');
          setPassword('');
        } else {
          // Answer was correct, update to next hint
          const nextHintId = currentHintState.hint?.nextHintId;
          if (nextHintId && currentHintState.hintSetId) {
            const nextHint = hintSets[currentHintState.hintSetId].hints[nextHintId];
            setCurrentHintState({
              ...currentHintState,
              hint: nextHint
            });
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
    <div className="w-full">
      {currentHintState.hint ? (
        <div className="space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {currentHintState.hint.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {currentHintState.hint.description}
            </p>
          </div>
          
          <div className="prose prose-lg">
            <p className="text-gray-800">
              Tässä arvoituksesi:
            </p>
            <blockquote className="italic text-gray-700 border-l-4 border-blue-500 pl-4 my-4">
              {currentHintState.hint.riddle}
            </blockquote>
          </div>
        </div>
      ) : null}

      <form onSubmit={handleSubmit} className="space-y-4 mt-8">
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {currentHintState.hint ? 'Anna vastauksesi' : 'Anna salasana'}
          </label>
          <input
            type="text"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        {success && <p className="text-green-500 text-sm">{success}</p>}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Lähetä
        </button>
      </form>
    </div>
  );
}

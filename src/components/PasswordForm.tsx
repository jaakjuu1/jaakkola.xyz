import { useState } from 'react';

interface PasswordFormProps {
    currentHintId?: string;
    hintSetId?: string;
    isFinal?: boolean;
}

export default function PasswordForm({ currentHintId, hintSetId, isFinal = false }: PasswordFormProps) {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        
        try {
            const response = await fetch('/api/verify-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    password,
                    currentHintId,
                    hintSetId
                }),
            });

            const data = await response.json();

            if (data.success) {
                if (data.isComplete) {
                    setSuccess(data.message);
                    // Redirect to success page after a short delay
                    setTimeout(() => {
                        window.location.href = '/success';
                    }, 2000);
                } else if (data.hintSetId) {
                    // Initial password was correct, refresh to show first hint
                    window.location.reload();
                } else {
                    // Answer was correct, refresh to show next hint
                    window.location.reload();
                }
            } else {
                setError(data.message || 'Väärä vastaus. Yritä uudelleen!');
            }
        } catch (error) {
            setError('Järjestelmävirhe. Yritä myöhemmin uudelleen.');
        }
    };

    return (
        <div className="w-full">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                        {isFinal ? 'Anna vastauksesi' : 'Anna salasana'}
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
                {error && (
                    <p className="text-red-500 text-sm">{error}</p>
                )}
                {success && (
                    <p className="text-green-500 text-sm">{success}</p>
                )}
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
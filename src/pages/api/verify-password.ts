import type { APIRoute } from "astro";
import { randomBytes } from 'crypto';
import { hints } from '../../config/hints';

// Generate a random token
function generateToken() {
    return randomBytes(32).toString('hex');
}

export const POST: APIRoute = async ({ request }) => {
    try {
        const data = await request.json();
        const { password, currentHintId } = data;

        // If we have a currentHintId, verify the password
        if (currentHintId) {
            const currentHint = hints[currentHintId];
            
            // Check if this is the final hint
            if (!currentHint.nextHintId && currentHint.finalAnswer) {
                // Verify the final answer
                if (password.toLowerCase() === currentHint.finalAnswer.toLowerCase()) {
                    const token = generateToken();
                    const response = new Response(JSON.stringify({ 
                        success: true,
                        isComplete: true,
                        message: 'Congratulations! You have completed the treasure hunt!'
                    }), {
                        status: 200,
                        headers: { 'Content-Type': 'application/json' },
                    });

                    // Set completion cookie and clear hint cookies
                    response.headers.append('Set-Cookie', 
                        `treasure_complete=${token}; Path=/; HttpOnly; SameSite=Strict; Max-Age=86400`
                    );
                    response.headers.append('Set-Cookie', 
                        'hint_access=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0'
                    );
                    response.headers.append('Set-Cookie', 
                        'current_hint=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0'
                    );

                    return response;
                }
            } else {
                // Handle regular hint progression
                const nextHint = currentHint.nextHintId ? hints[currentHint.nextHintId] : null;
                if (nextHint && password.toLowerCase() === nextHint.password.toLowerCase()) {
                    const token = generateToken();
                    const response = new Response(JSON.stringify({ success: true }), {
                        status: 200,
                        headers: { 'Content-Type': 'application/json' },
                    });

                    response.headers.append('Set-Cookie', 
                        `hint_access=${token}; Path=/; HttpOnly; SameSite=Strict; Max-Age=3600`
                    );
                    response.headers.append('Set-Cookie', 
                        `current_hint=${nextHint.id}; Path=/; HttpOnly; SameSite=Strict; Max-Age=3600`
                    );

                    return response;
                }
            }
        } else {
            // First hint - check if the password matches the first hint's password
            const firstHint = hints['hint1'];
            if (password.toLowerCase() === firstHint.password.toLowerCase()) {
                const token = generateToken();
                const response = new Response(JSON.stringify({ success: true }), {
                    status: 200,
                    headers: { 'Content-Type': 'application/json' },
                });

                response.headers.append('Set-Cookie', 
                    `hint_access=${token}; Path=/; HttpOnly; SameSite=Strict; Max-Age=3600`
                );
                response.headers.append('Set-Cookie', 
                    `current_hint=${firstHint.id}; Path=/; HttpOnly; SameSite=Strict; Max-Age=3600`
                );

                return response;
            }
        }

        return new Response(JSON.stringify({ 
            success: false, 
            message: 'Incorrect answer. Try again!' 
        }), {
            status: 401,
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (error) {
        console.error('Error in verify-password:', error);
        return new Response(JSON.stringify({ 
            success: false, 
            message: 'Server error' 
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
} 
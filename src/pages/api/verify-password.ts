import type { APIRoute } from "astro";
import { randomBytes } from 'crypto';
import { hintSets } from '../../config/hints';

// Generate a random token
function generateToken() {
    return randomBytes(32).toString('hex');
}

export const POST: APIRoute = async ({ request }) => {
    try {
        const data = await request.json();
        const { password, currentHintId, hintSetId } = data;

        // If we don't have a hintSetId, this is the initial password attempt
        if (!hintSetId) {
            // Find the hint set that matches this initial password
            const matchingSet = Object.values(hintSets).find(
                set => set.initialPassword.toLowerCase() === password.toLowerCase()
            );

            if (matchingSet) {
                const token = generateToken();
                const response = new Response(JSON.stringify({ 
                    success: true,
                    hintSetId: matchingSet.id,
                    hintSetName: matchingSet.name
                }), {
                    status: 200,
                    headers: { 'Content-Type': 'application/json' },
                });

                // Set cookies for the hint set and first hint
                response.headers.append('Set-Cookie', 
                    `hint_access=${token}; Path=/; HttpOnly; SameSite=Strict; Max-Age=3600`
                );
                response.headers.append('Set-Cookie', 
                    `current_hint=hint1; Path=/; HttpOnly; SameSite=Strict; Max-Age=3600`
                );
                response.headers.append('Set-Cookie', 
                    `hint_set_id=${matchingSet.id}; Path=/; HttpOnly; SameSite=Strict; Max-Age=3600`
                );

                return response;
            }
        } else {
            // We're solving a hint
            const currentSet = hintSets[hintSetId];
            if (!currentSet) {
                return new Response(JSON.stringify({ 
                    success: false, 
                    message: 'Virheellinen vihjekokoelma.' 
                }), {
                    status: 400,
                    headers: { 'Content-Type': 'application/json' },
                });
            }

            const currentHint = currentSet.hints[currentHintId];
            if (!currentHint) {
                return new Response(JSON.stringify({ 
                    success: false, 
                    message: 'Virheellinen vihje.' 
                }), {
                    status: 400,
                    headers: { 'Content-Type': 'application/json' },
                });
            }

            // Check if the answer matches the current hint's answer
            if (password.toLowerCase() === currentHint.answer.toLowerCase()) {
                // If this is the final hint
                if (!currentHint.nextHintId) {
                    const token = generateToken();
                    const response = new Response(JSON.stringify({ 
                        success: true,
                        isComplete: true,
                        message: 'Onneksi olkoon! Olet ratkaissut kaikki arvoitukset!'
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
                    response.headers.append('Set-Cookie', 
                        'hint_set_id=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0'
                    );

                    return response;
                } else {
                    // Move to next hint
                    const token = generateToken();
                    const response = new Response(JSON.stringify({ 
                        success: true,
                        message: 'Oikein! Siirrytään seuraavaan vihjeeseen.'
                    }), {
                        status: 200,
                        headers: { 'Content-Type': 'application/json' },
                    });

                    // Update cookies with the next hint
                    response.headers.append('Set-Cookie', 
                        `hint_access=${token}; Path=/; HttpOnly; SameSite=Strict; Max-Age=3600`
                    );
                    response.headers.append('Set-Cookie', 
                        `current_hint=${currentHint.nextHintId}; Path=/; HttpOnly; SameSite=Strict; Max-Age=3600`
                    );

                    return response;
                }
            }
        }

        // If we get here, the answer was wrong
        return new Response(JSON.stringify({ 
            success: false, 
            message: 'Väärä vastaus. Yritä uudelleen!' 
        }), {
            status: 401,
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (error) {
        console.error('Error in verify-password:', error);
        return new Response(JSON.stringify({ 
            success: false, 
            message: 'Järjestelmävirhe. Yritä myöhemmin uudelleen.' 
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
} 
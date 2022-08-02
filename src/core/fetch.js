export async function GET(url) {
    const response = await fetch("https://api.candidate.u-mix.ru/" + url);
    if (response.ok) {
        try {
            const data = await response.json();
            return data;
        } catch {
            return true;
        }
    }
}
export async function POST(url, body) {
    const response = await fetch("https://api.candidate.u-mix.ru/" + url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(body),
    });
}

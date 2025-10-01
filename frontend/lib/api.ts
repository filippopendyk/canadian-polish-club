export async function fetchAPI(endpoint: string){
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/${endpoint}`);
    if(!res.ok) throw new Error("Failed to fetch API");
    return res.json();
}
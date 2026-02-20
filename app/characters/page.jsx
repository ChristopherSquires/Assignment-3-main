import Link from "next/link"

export default async function characterPage() {

    const res = await fetch("https://rickandmortyapi.com/api/character")
    const data = await res.json();
    const characters = data.results;

    return (
        <>
            <h2>Characters</h2>

            {characters.map((character) => (
                <div key={character.id}>
                    <Link href={`/characters/${character.id}`}>
                    {character.name}
                    </Link>
                </div>
            ))}
        </>
    )
}
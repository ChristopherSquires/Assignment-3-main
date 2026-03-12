import CharacterInfo from "@/components/Character";
import Image from "next/image"

export async function generateStaticParams() {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    const data = await res.json();

    return data.results.map((character) => ({
        id: character.id.toString(),
    }));
}

export default async function CharacterDetail({params}) {
    const {id} = await params;
    
    const res = await fetch("https://rickandmortyapi.com/api/character/" + id)
    const data = await res.json();

    return (
        <>
            <CharacterInfo
                name={data.name}
                species={data.species}
                image={data.image}
            />
        </>
    )
}
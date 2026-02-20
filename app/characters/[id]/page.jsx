import CharacterInfo from "@/components/Character";
import Image from "next/image"

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
import Image from "next/image"

export default function CharacterInfo({name, species, image}) {
    return (
        <>
            <h2>{name}</h2>
            <p>{species}</p>
            {image && (
                <Image src={image} alt={name} width={200} height={200}/>
            )}
        </>
    )
}
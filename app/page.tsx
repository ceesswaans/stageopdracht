import Image from "next/image";
import Tilburg from '../public/Hub_Tilburg.jpeg'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-3xl font-bold">Mijn stage opdracht </h1>
      Hoi ik ben cees ik ben 15 jaar oud, ik heb 3 dagen stage gelopen bij Happy Horizon Tiburg. 
      <br/>
      <br/>
      <span className="text-xl font-bold">Over Happy Horizon</span>
      <br/>
      Happy Horizon heeft 7 verschillende hubs in Nederland waarvan ook een in Tilburg.
       Op elke hub werken ze aan iets anders in Tilburg waar ik heb stage gelopen doen ze bijvoorbeeld: Online marketing, webshops en applicaties, merkpostionering, data integraties en content creatie.
     <br/>
     <br/>
      Waar zitten de hubs van Happy Horizon:
     <br/>
      happy Horizon heeft zeven hubs en ze zijn verspreid door heel Nederland de steden van de hubs: Tilburg, Eindhoven, Utrecht, Nijmegen, Amsterdam, Arnhem en Den haag.
      <br/>
      <br/> 
      Hoe is het bedrijf ontstaan:
      <br/>
      Het bedrijf is ontstaan uit verschillende soorten labels die zijn samengevoegd tot een bedrijf en dat zijn labels zoals deze: Happy idiots, happy cactus, Happy geeks, Happy en Healthy, PauwR, flashpoint, Digimonks, Evoworks, WWav, Nochi, Winnrs, Jelba, WeBBer en Experius 
      <br/>
      <br/>
      zoals je kan zien ben ik een website aan het maken. dat is moeilijk aan het begin maar ik denk dat als ik het snap dat het leuk en makkelijk is. 
      <br/>
      <br/>
      welke tools ik heb gebruikt en waarvoor ze nodig zijn.
      <br/>
      ik heb verschillende tools gebruikt om deze website te maken zoals next.js dat is een website met informatie en uitleg over een website maken dan heb je ook nog visual studio code van daar uit doe je je tekst en foto's programeren in de website en je hebt ook nog terminal nodig om alles te kunnen programeren.
      <Link href="/cees">
      <Image
      src={Tilburg}
      alt="Tilburg van boven"
      width={600} 
      />
      </Link>
      </main>
    </div>
  );
}

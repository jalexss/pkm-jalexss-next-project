import Link from 'next/link';
import Image from "next/image";
import { Spacer, Text, useTheme } from "@nextui-org/react"
import { useRouter } from 'next/router';


export const Navbar = () => {

  const { theme } =  useTheme()

  return (
    <div 
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'start',
        alignItems: 'center',
        width: '100%',
        padding: '0px 20px',
        backgroundColor: theme?.colors.gray100.value
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt="icono de app"
        width={70}
        height={70}
      />
      
      <Link href="/" >
        <a>Pokemon</a>
      </Link>

      <Spacer css={{ flex: 1 }}/>
      
      <Link href="/favoritos" >
        <a> favoritos</a>
      </Link>

    </div>
  )
}
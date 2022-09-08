import NextLink from 'next/link';
import Image from "next/image";
import { Link, Spacer, Text, useTheme } from "@nextui-org/react"


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
      <NextLink href="/" passHref >
        <Link>
          <Text color='red' h2 >P</Text>
          <Text color='white' h3 >okemon</Text>
        </Link>
      </NextLink>
      <Spacer css={{ flex: 1 }} />
      <NextLink href="/favoritos" passHref >
        <Link css={{marginRight: '10px'}}>
          <Text color='white' h4 >Favoritos</Text>
        </Link>
      </NextLink>
    </div>
  )
}
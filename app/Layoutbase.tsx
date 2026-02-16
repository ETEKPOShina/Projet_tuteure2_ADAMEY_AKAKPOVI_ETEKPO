'use client';
import { Geist, Geist_Mono, Poppins ,Montserrat,Inter,Merriweather} from "next/font/google";
import "./globals.css";
import { TamaguiProvider, YStack } from "tamagui";
import tamaguiConfig from '@/tamagui.config'
// import { RootProviders } from '@/lib/auth/root-providers';
// import { getRelayEnvironment } from '@/auth/relayEnvironment';
import { RelayEnvironmentProvider } from 'react-relay';
import{ relayEnvironment} from '@/relayClient';
import  AuthProvider  from '@/src/providers/AuthProvider';

// import { Header } from "@/components/Others/Header";
// import { FooterSection } from "@/components/Others/FooterSection";
// import { HeaderResponsive } from "@/components/Others/HeaderResponsive";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: '--font-poppins',

  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap', // 👈 OBLIGATOIRE
  preload: true,   // 👈 OBLIGATOIRE

});
const inter = Inter({
  variable: '--font-inter',
  // subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap', // 👈 OBLIGATOIRE
  preload: true,   // 👈 OBLIGATOIRE
})
const monsterat = Montserrat({
   variable: '--font-monsterat',
  // subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})


export default function MainRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${poppins.className}  ${poppins.variable}  ${inter.variable}  ${inter.className} ${monsterat.className} ${monsterat.variable} antialiased`}
      >
      
        <TamaguiProvider config={tamaguiConfig} defaultTheme="light">
           <RelayEnvironmentProvider environment={relayEnvironment}>
            <AuthProvider>
            <YStack flex={1}>
                {/* <Header/> */}
                {/* <HeaderResponsive /> */}
                {children}
                {/* <FooterSection /> */}
            </YStack>
            </AuthProvider>
          </RelayEnvironmentProvider>
        </TamaguiProvider>
      </body>
    </html>
  );
}

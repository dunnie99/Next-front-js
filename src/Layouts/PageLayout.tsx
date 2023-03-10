import React from "react";
import Navbar from '@/components/Navbar';
import Footer from "@/components/Footer";


export default function PageLayout({children}: any){
    return(
        <>
            <main>
                <Navbar />
                {children}
                <Footer />
            </main>
        </>
    )
}
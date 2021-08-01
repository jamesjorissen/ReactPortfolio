import React from "react"
import image from "../Eden.JPG"

export default function Home() {
    return (
        <main>
            <img src={image} alt="Eden" className="absolute object-cover w-full h-full" />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="picture">Hi, I am James. The girl is my daughter - glad she looks like her mom! Ready to build applications! </h1>

            </section>
        </main>
    )
}
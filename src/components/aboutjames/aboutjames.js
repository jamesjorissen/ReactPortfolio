import React from "react"
import image from "../../dogs.JPG"

function aboutjames() {
    return (
        <main>
            <img src={image} alt="Eden" className="absolute object-cover w-full h-full" />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="picture"> My name is James Jorissen. I work in Saint Paul Public Schools in the Division of Schools. I am learning web development as I look to make more opportunities available to myself as I move forward into a new career. I have a passion for computers and solving problems. </h1>
                <br></br>
                <h1 className="picture2">I have a wife named Andrea, a 2 year old daughter named Eden and 2 crazy dogs named Putter and Lily.</h1>
            </section>
        </main>
    )
}
export default aboutjames
import type { Project } from "./models/Project";

export const Projects: Project[] = [
    {
        name: "Bython",
        repo: {
            plaintext: "View on Github",
            url: "https://github.com/prushton2/bython"
        },
        url: {
            plaintext: "View on Pypi",
            url: "https://pypi.org/project/bython-prushton/"
        },
        desc: "A transpiler that allows for curly braces in Python, because Python is awesome but whitespace is awful",
    },
    {
        name: "Hide and Seek",
        repo: {
            plaintext: "View on Github",
            url: "https://github.com/prushton2/hide-and-seek"
        },
        url: {
            plaintext: "View on prushton.com",
            url: "https://hideandseek.prushton.com/"
        },
        desc: "A website recreating the hide and seek game played by the 'Jet Lag: The Game' Youtube Channel",
    },
    {
        name: "Trainlapse",
        repo: {
            plaintext: "View on Github",
            url: "https://github.com/prushton2/trainlapse"
        },
        url: {
            plaintext: "View on prushton.com",
            url: "https://trainlapse.prushton.com/"
        },
        desc: "A website storing the last 24 hours of MBTA Commuter rail train positions, letting you timelapse through the data",
    }
]
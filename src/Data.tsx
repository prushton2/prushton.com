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
        name: "Search",
        repo: {
            plaintext: "View on Github",
            url: "https://github.com/prushton2/searchengine"
        },
        url: {
            plaintext: "View on prushton.com",
            url: "search.prushton.com"
        },
        desc: "A fully custom search engine that is built on Rust, Go, and Postgres"
    },
    {
        name: "MBTA",
        repo: {
            plaintext: "View on Github",
            url: "https://github.com/prushton2/mbta"
        },
        url: {
            plaintext: "View on prushton.com",
            url: "mbta.prushton.com"
        },
        desc: "A website showing both live and the past 24 hours of MBTA train data, letting you scroll through the trains at any time"
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
    }
]
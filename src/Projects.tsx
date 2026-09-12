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
        name: "Render Engine",
        repo: {
            plaintext: "View on Github",
            url: "https://github.com/prushton2/renderengine"
        },
        url:  {
            plaintext: "Download latest release",
            url: "https://github.com/prushton2/renderengine/releases/latest"
        },
        desc: "A 3D raytracing render engine written in Rust and WGSL",
    },
    {
        name: "Waydraw",
        repo: {
            plaintext: "View on Github",
            url: "https://github.com/prushton2/waydraw"
        },
        url:  {
            plaintext: "Download latest release",
            url: "https://github.com/prushton2/waydraw/releases/latest"
        },
        desc: "A peer-to-peer remote mouse control app letting you use a touchscreen laptop as a drawing tablet",
    },
    {
        name: "Search Engine",
        repo: {
            plaintext: "View on Github",
            url: "https://github.com/prushton2/searchengine"
        },
        url: {
            plaintext: "View on prushton.com",
            url: "https://search.prushton.com"
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
            url: "https://mbta.prushton.com"
        },
        desc: "A website showing both live and the past 24 hours of MBTA train data, letting you scroll through the trains at any time"
    },
    {
        name: "Randochess",
        repo: {
            plaintext: "View on Github",
            url: "https://github.com/prushton2/randochess"
        },
        url: {
            plaintext: "View on prushton.com",
            url: "https://randochess.prushton.com/"
        },
        desc: "A Chess game that features alternate rulesets to shake up gameplay",
    }
]
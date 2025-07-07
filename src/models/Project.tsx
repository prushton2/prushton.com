export interface Project {
    name: string
    repo: Link
    desc: string
    url: Link
}

export interface Link {
    plaintext: string
    url: string
}
const grabRand = <T>(ray: Array<T>): T => ray[Math.floor(Math.random() * ray.length)]

export class Lyrics {
    lines = [
    'I can\'t understand it why you want to hurt me After all the things I\'ve done for you',
    'She parties all the time party all the time',
    'She lets her hair down she lets her body down']

    getLine (): string {
        return grabRand<string>(this.lines)
    }
}
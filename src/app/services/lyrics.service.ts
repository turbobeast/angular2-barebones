const grabRand = <T>(ray: Array<T>): T => ray[Math.floor(Math.random() * ray.length)]

export class Lyrics {
    songs = {
        giveittomebaby: ['When I came home last night You wouldn\'t make love to me',
                         'You went fast asleep You wouldn\'t even talk to me',
                         'said I\'m so crazy Coming home intoxicated',
                         'I said I just wanna love ya (I just wanna love you baby)',
                         'Guess that\'s why I\'m so elated (C\'mon girl)']
    }
    lines = [
    'I can\'t understand it why you want to hurt me After all the things I\'ve done for you',
    'She parties all the time party all the time',
    'She lets her hair down she lets her body down']

    getLine (): string {
        return grabRand<string>(this.lines)
    }

    getLineForSong (song: string): string {
        return grabRand<string>(this.songs[song])
    }
}
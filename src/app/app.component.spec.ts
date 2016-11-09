import { TestBed } from '@angular/core/testing'
import { configureTests } from '../test.configure'
import {APP_BASE_HREF} from '@angular/common';

import { AppModule } from './app.module'
import { AppComponent} from './app.component'
import { Lyrics } from './services/lyrics.service'

class FakeLyrics {
    getLine (): string {
        return 'Party\'s Over'
    }
}

describe("AppComponent", () => {
    let fixture;

    beforeEach((done) => {
        const configure = (testBed: TestBed) => {
            testBed.configureTestingModule({
                imports: [AppModule],
                providers: [
                    { provide: Lyrics, useClass: FakeLyrics },
                    { provide: APP_BASE_HREF, useValue : '/' }
                ]
            })
        }

        configureTests(configure).then((testBed) => {
            fixture = testBed.createComponent(AppComponent)
            fixture.detectChanges()
            done()
        })
    })

    it("should have a passing test", () => {
        expect(fixture).toBeTruthy()
    })

    it("should party", () => {
        expect(fixture.componentInstance.message).toBe('Party\'s Over')
    })
})
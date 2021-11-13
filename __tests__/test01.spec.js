// Defining the timeout for the test
const timeout = process.env.SLOWMO ? 6000 : 2500;
import * as app from '../solutions/app';

describe('1. Feladat', () => {
    test('Ki kellene exportálni a megadott objektumokat.', async () => {
        expect(app.setCookie).toBeTruthy();
        expect(app.cookieHandler).toBeTruthy();
    });
});

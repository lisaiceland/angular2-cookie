import {provide} from '@angular/core';

import {BaseCookieOptions, CookieOptions} from './services';

export * from './services';

export const ANGULAR2_COOKIE_PROVIDERS: any[] =
    [provide(CookieOptions, {useClass: BaseCookieOptions})];

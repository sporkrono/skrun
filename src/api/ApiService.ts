/*
 * This file is part of the Runr package.
 *
 * (c) François Pluchino <francois.pluchino@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* tslint:disable:no-empty-interface */

import {AxiosInstance} from 'axios';

/**
 * @author François Pluchino <francois.pluchino@gmail.com>
 */
export interface ApiService {
}

/**
 * Interface of database repository constructor.
 */
export interface ApiServiceConstructor {
    new (client: AxiosInstance): ApiService;

    /**
     * Get the name of api service.
     *
     * @return {string}
     */
    getName(): string;
}

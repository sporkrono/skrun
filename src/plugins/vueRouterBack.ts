/*
 * This file is part of the Runr package.
 *
 * (c) François Pluchino <francois.pluchino@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {RouterBackOptions} from '@/routers/RouterBackOptions';
import VueRouterBack from '@/routers/VueRouterBack';
import Vue from 'vue';

/**
 * @author François Pluchino <francois.pluchino@gmail.com>
 */

export function useVueRouterBackPlugin(options: RouterBackOptions): void {
    Vue.use(VueRouterBack, options);
}

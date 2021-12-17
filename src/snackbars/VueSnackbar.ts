/*
 * This file is part of the Runr package.
 *
 * (c) François Pluchino <francois.pluchino@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {SnackbarManager} from '@/snackbars/SnackbarManager';
import _Vue, {PluginObject} from 'vue';

/**
 * Snackbar vue plugin.
 *
 * @author François Pluchino <francois.pluchino@gmail.com>
 */
export default {
    install: (Vue: typeof _Vue, options?: SnackbarManager): void => {
        Vue.prototype.$snackbar = options;
    },
} as PluginObject<SnackbarManager>;

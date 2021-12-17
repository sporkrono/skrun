/*
 * This file is part of the Runr package.
 *
 * (c) François Pluchino <francois.pluchino@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {DrawerModuleState} from '@/stores/drawer/DrawerModuleState';
import {DrawerState} from '@/stores/drawer/DrawerState';
import {Module, MutationTree} from 'vuex';

/**
 * @author François Pluchino <francois.pluchino@gmail.com>
 */
export class DrawerModule<R extends DrawerModuleState> implements Module<DrawerState, R> {
    private readonly storage: Storage;

    public constructor(storage?: Storage) {
        this.storage = storage ? storage : localStorage;
    }

    public get namespaced(): boolean {
        return true;
    }

    public get state(): DrawerState {
        return {
            show: null === this.storage.getItem('drawer:show')
                ? true
                : 'true' === (this.storage.getItem('drawer:show')),
        };
    }

    public get mutations(): MutationTree<DrawerState> {
        const self = this;

        return {
            toggle(state: DrawerState, show?: boolean): void {
                state.show = undefined === show ? !state.show : show;
                self.storage.setItem('drawer:show', state.show ? 'true' : 'false');
            },
        };
    }
}

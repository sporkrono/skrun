/*
 * This file is part of the Runr package.
 *
 * (c) François Pluchino <francois.pluchino@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
 * @author François Pluchino <francois.pluchino@gmail.com>
 */
export class Canceler {
    private executor?: () => void;

    /**
     * Set the cancel request executor.
     *
     * @param {Function} executor
     */
    public setExecutor(executor: () => void): void {
        this.executor = executor;
    }

    /**
     * Cancel the request.
     */
    public cancel(): void {
        if (this.executor) {
            this.executor();
        }
    }
}

export default function two_crystal_balls(breaks: boolean[]): number {
    const stackLength = breaks.length;
    const jumpInterval = Math.floor(Math.sqrt(stackLength));
    let i = 0;
    for (; i < stackLength; i += jumpInterval) {
        if (breaks[i]) {
            break;
        }
    }
    i -= jumpInterval;
    for (; i < stackLength; ++i) {
        if (breaks[i]) {
            return i;
        }
    }
    return -1;
}

// Method 1
// export default function bs_list(haystack: number[], needle: number): boolean {
//     const stackLength = haystack.length;
//     let lowPoint = 0;
//     let highPoint = stackLength - 1;

//     do {
//         const midPoint = Math.floor(lowPoint + (highPoint - lowPoint) / 2);
//         const itemAtMidpoint = haystack[midPoint];
//         if (itemAtMidpoint === needle) {
//             return true;
//         } else if (itemAtMidpoint > needle) {
//             highPoint = midPoint - 1;
//         } else {
//             lowPoint = midPoint + 1;
//         }
//     } while (lowPoint <= highPoint);

//     return false;
// }

// Method 2

export default function bs_list(haystack: number[], needle: number): boolean {
    const stackLength = haystack.length;
    let lowPoint = 0;
    let highPoint = stackLength - 1;

    do {
        const midPoint = Math.floor(lowPoint + (highPoint - lowPoint) / 2);
        const itemAtMidpoint = haystack[midPoint];
        if (itemAtMidpoint === needle) {
            return true;
        } else if (itemAtMidpoint > needle) {
            highPoint = midPoint - 1;
        } else {
            lowPoint = midPoint + 1;
        }
    } while (lowPoint <= highPoint);

    return false;
}

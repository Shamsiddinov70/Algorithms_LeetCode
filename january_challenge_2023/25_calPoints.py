def calPoints(operations) -> int:
    stack = []

    for o in operations:
        if o == 'C':
            stack.pop()
        elif o == '+':
            stack.append(stack[-1] + stack[-2])
        elif o == 'D':
            stack.append(2 * stack[-1])
        else:
            stack.append(int(o))

    return sum(stack)


# // JS solution
# /**
#  * @param {string[]} operations
#  * @return {number}
#  */
# // var calPoints = function (operations) {
# //     let stack = [];
# //     for (const o of operations) {
# //         let prevLast = stack[stack.length - 2];
# //         let last = stack[stack.length - 1];

# //         if (o === '+') {
# //             stack.push(prevLast + last);
# //             continue;
# //         }
# //         if (o === 'D') {
# //             stack.push(2 * last);
# //             continue;
# //         }
# //         if (o === 'C') {
# //             stack.pop();
# //         }
# //         else {
# //             stack.push(parseInt(o));
# //         }
# //     }

# //     if (stack.length > 1) {
# //         return stack.reduce((a, b) => a + b);
# //     }
# //     return 0;
# // };

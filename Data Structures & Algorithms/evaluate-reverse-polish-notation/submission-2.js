class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];

        for (let i = 0; i < tokens.length; i++) {
            while (stack.length > 1 && ['+', '-', '*', '/'].includes(tokens[i])) {
                let value = 0;
                switch (tokens[i]) {
                    case '+': 
                        value = stack.at(-2) + stack.at(-1);
                        break;
                    case '-': 
                        value = stack.at(-2) - stack.at(-1);
                        break;
                    case '*': 
                        value = stack.at(-2) * stack.at(-1);
                        break;
                    case '/': 
                        value = stack.at(-2) / stack.at(-1);
                        break;
                    default: 
                        break;
                }

                stack.pop();
                stack.pop();
                stack.push(parseInt(value));
                i++;
            }

            if (!isNaN(parseInt(tokens[i]))) {
                stack.push(parseInt(tokens[i]));
            }
        }

        return stack.at(-1);
    }
}
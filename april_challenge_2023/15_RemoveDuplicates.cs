public class Solution {
    public string RemoveDuplicates(string s) {
        var stack = new Stack<char>();
        foreach(char c in s)
        {
            char prev = '\0';
            if(stack.Count > 0)
                prev = stack.Peek();
            if(c == prev)
                stack.Pop();
            else
                stack.Push(c);
        }

        return String.Join("", stack.Reverse());
    }
}
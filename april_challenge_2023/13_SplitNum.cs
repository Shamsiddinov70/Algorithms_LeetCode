public class Solution {
    public int SplitNum(int num) {
        var n = num.ToString().ToCharArray();
        Array.Sort(n);

        int num1 = 0, num2 = 0, i = 0;
        while (i < n.Length)
        {
            if(i % 2 == 0)
            {
                num1 *= 10;
                num1 += (int)(n[i] - '0');
            }
            else
            {
                num2 *= 10;
                num2 += (int)(n[i] - '0');
            }
            i++;
        }

        return num1 + num2;
    }
}
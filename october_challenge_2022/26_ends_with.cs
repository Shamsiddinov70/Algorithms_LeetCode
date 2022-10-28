using System;
public class Kata
{
    public static bool Solution(string str, string ending)
    {
        if (ending.Length == 0) return true;
        if (str.Length < ending.Length) return false;

        int endLeng = ending.Length;
        var sub = str.Substring(str.Length - endLeng);
        return sub == ending;
    }
}
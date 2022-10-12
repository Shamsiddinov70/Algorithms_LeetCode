using System;
using System.Linq;

public static class Kata
{
    public static string HighAndLow(string numbers)
    {
        string[] strArr = numbers.Split(' ');

        int[] numArr = new int[] { };
        var tempList = numArr.ToList();

        foreach (string n in strArr)
        {
            tempList.Add(Convert.ToInt32(n));
        }

        int[] resArr = tempList.ToArray();
        Array.Sort(resArr);

        int arrOne = resArr[0];
        int arrLast = resArr.Last();

        return arrLast.ToString() + " " + arrOne.ToString();
    }
}
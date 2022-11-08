using System;
using System.Linq;
using System.Collections.Generic;

class Kata
{
    public static long MinValue(int[] a)
    {
        int[] numArr = new int[] {};
        var tempList = numArr.ToList();

        for (int i = 0; i < a.Length; i++) {
            if (!tempList.Contains(a[i])) {
                tempList.Add(a[i]);
            }
        }

        var uniques = tempList.ToArray();
        Array.Sort(uniques);
        string str = String.Join("", uniques);
        return long.Parse(str);
    }
}
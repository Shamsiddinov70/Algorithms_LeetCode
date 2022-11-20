//JS
/*
function solution(value){
  let str = String(value);
  if(str.length === 5) `Value is ${str}`;

  let ans = str.padStart(5, "0");
  return `Value is ${ans}`;
}
 */


//C#
using System.Text;

public class PaddedNumbers
{
    public static string Solution(int value)
    {
        string str = value.ToString();
        if (str.Length == 5) return $"Value is {str}";

        StringBuilder builder = new StringBuilder();
        for (int i = 0; i < (5 - str.Length); i++)
        {
            builder.Append('0');
        }

        string ans = builder.ToString();
        return $"Value is {ans + str}";
    }
}
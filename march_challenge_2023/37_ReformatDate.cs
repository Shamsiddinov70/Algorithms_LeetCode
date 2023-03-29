public class Solution {
    public string ReformatDate(string date) {
        string[] months = { "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" };
        string[] arr = date.Split(" ");

        var dayNum1 = arr[0][0];
        bool n1 = false;

        var dayNum2 = arr[0][1];
        bool n2 = false;

        if (dayNum1 >= '0' && dayNum1 <= '9') n1 = true;
        if (dayNum2 >= '0' && dayNum2 <= '9') n2 = true;

        var monthNum = (Array.IndexOf(months, arr[1]) + 1);
        string month = monthNum < 10 ? $"0{monthNum.ToString()}" : monthNum.ToString();
        string year = arr[2];

        if (n1 && n2)
            return $"{year}-{month}-{dayNum1}{dayNum2}";
        else
            return $"{year}-{month}-0{dayNum1}";
        }
}
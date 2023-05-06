public class Solution {
    public bool IsCovered(int[][] ranges, int left, int right) {
        var set = new HashSet<int>();

        foreach (var range in ranges)
        {
          for (var i = range[0]; i <= range[1]; i++)
          {
            set.Add(i);
          }
        }

        int counter = 0;

        for (int i = left; i <= right; i++)
        {
          if (set.Contains(i)) counter++;
        }

        return counter == right - left + 1;
    }
}
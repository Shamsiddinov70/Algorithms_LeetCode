public class Solution {
    public int FindDelayedArrivalTime(int arrivalTime, int delayedTime) {
        if (arrivalTime + delayedTime < 24) return arrivalTime + delayedTime;
        return arrivalTime + delayedTime - 24;
    }
}
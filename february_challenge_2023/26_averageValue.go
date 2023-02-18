package main

func main() {

}

func averageValue(nums []int) int {
	ans := 0
	average := 0
	for i := 0; i < len(nums); i++ {
		if nums[i]%2 == 0 && nums[i]%3 == 0 {
			ans += nums[i]
			average += 1
		}
	}

	if ans > 0 {
		return ans / average
	}
	return 0
}

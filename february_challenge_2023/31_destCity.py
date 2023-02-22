class Solution:
    def destCity(self, paths: List[List[str]]) -> str:
        cities1 = []
        cities2 = []

        for i in range(len(paths)):
            cities1.append(paths[i][0])
            cities2.append(paths[i][1])

        ans = ""
        for city in cities2:
            if city not in cities1:
                ans = city

        return ans

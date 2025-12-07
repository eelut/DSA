class Solution:
    def isPalindrome(self, x: int) -> bool:
        s=str(x)
        length=len(s)
        for i in range(length):
            if s[i]!=s[length-1-i]:
                return False
        return True
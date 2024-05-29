def sum1(arr, x):
    
    seen = set()

   
    for num in arr:
       
        complement = x - num

        
        if complement in seen:
            return "Yes"
       
        seen.add(num)
    
   
    return "No"

# Test cases
arr1 = [0, -1, 2, -3, 1]
x1 = -2
arr2 = [1, -2, 1, 0, 5]
x2 = 0

print(sum1(arr1, x1))  
print(sum1(arr2, x2))  

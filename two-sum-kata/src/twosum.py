def two_sum(nums, target):
    targetSumDict = {}
    for index, num in enumerate(nums):
        targetSumDict[num] = index
    for index, num in enumerate(nums):
        if (targetSumDict.__contains__(target - num)):
            return [index, targetSumDict.get(target - num)]
    return []

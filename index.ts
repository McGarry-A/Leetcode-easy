// Two Sum

const twoSum = (nums: Array<number>, target: number): number[] => {
    let indexes: Array<number> = []

    for (let i: number = 0; i<nums.length; i++) {
        for (let j:number = i + 1; j<nums.length; j++){
            if (nums[i] + nums[j] === target){
                indexes.push(i)
                indexes.push(j)
            }
        }
    }
    return indexes
}


console.log(twoSum([3,2,4], 6))
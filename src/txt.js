let nums = [2,7,11,15];
let target = 9;

function twoSum (nums,target){
  for (let i = 0, i< nums.lenght,i++) {
    for (let j = i + 1, j< nums.lenght,j++){
      if (nums[j] === target - nums[i]){ console.log(nums[j],nums[i])}
  }
}
}

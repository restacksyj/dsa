
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false
    const hashmap = {}
    for (let i of s.split('')){
        if(hashmap[i]){
            hashmap[i] += 1
        } else{
            hashmap[i] = 1
        }
    }
    
    const newHash = {}
    
    for(let j of t.split('')){
        if(!hashmap[j]){
           return false
        } else if(newHash[j]) {
            newHash[j] +=1
        } else{
            newHash[j] = 1
        }
    }
    
    for(let k in hashmap){
        if(hashmap[k] !== newHash[k]){
            return false
        }
    }
    
    return true
};

console.log(isAnagram('cat','rat'))

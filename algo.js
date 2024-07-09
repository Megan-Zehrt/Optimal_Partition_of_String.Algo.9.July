// 2405. Optimal Partition of String



// Given a string s, partition the string into one or more substrings such that the characters in each substring are unique. That is, no letter appears in a single substring more than once.

// Return the minimum number of substrings in such a partition.

// Note that each character should belong to exactly one substring in a partition.





/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {

    let partitions = 1
    let table = new Map()

    for(let i = 0; i < s.length; i++){

        if(table.has(s[i])){
            partitions++

            table.clear()

            table.set(s[i], 1)
        }else{
            table.set(s[i], 1)
        }
    }

    return partitions
    
};
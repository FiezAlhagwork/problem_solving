/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const  addTwoNumbers = function(l1, l2) {
    

    let sumArray = Number(l1.reverse().join('')) + Number(l2.reverse().join(''))
    let l3 = sumArray.toString().split('').map(Number).reverse()
    if(l3[0] === 0 ) {
        console.log("not found");
        return [0]
    }
    console.log(l3)
    return l3
     


    
};

addTwoNumbers([0], [0])

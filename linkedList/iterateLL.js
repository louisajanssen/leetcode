const iterateLL = (head) => {

    while (head !== undefined) {
        console.log(head.val)

        head = head.next
    }

    return 0;
}

let test1 = iterateLL({val: 1, next: { val: 2, next: {val : 3, next: undefined}}})
console.log(test1)

let test2 = iterateLL(undefined)
console.log(test2)
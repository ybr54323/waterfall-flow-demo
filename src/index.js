const root = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 3,
        },
        right: {
            val: 4
        }
    },
    right: {
        val: 2,
        left: {
            val: 4
        },
        right: {
            val: 3
        }
    }
}

var isSymmetric = function (root) {
    if (!root) return true

    function re(l, r) {
        if (!l && !r) return true
        if (!l || !r) return false
        return l.val === r.val && re(l.left, r.right) && re(l.right, r.left)
    }
    return re(root.left, root.right)
};

var res = isSymmetric(root)
console.log(res)

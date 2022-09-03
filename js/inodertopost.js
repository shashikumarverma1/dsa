var buildTree = function(inorder, postorder) {
    if (inorder.length === 0) return null;

    let root = postorder[postorder.length - 1];
    let pivot = inorder.indexOf(root);

    return {
        val: root,
        left: buildTree(inorder.slice(0, pivot), postorder.slice(0, pivot)),
        right: buildTree(inorder.slice(pivot + 1), postorder.slice(pivot, -1))
    };
};
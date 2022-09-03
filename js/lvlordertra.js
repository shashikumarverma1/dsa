
function lvl(root){
    if(!root){
        return []
    }
    let q=[];
    q.push(root);
    let res=[];
    while(q.length){
        let cur=[]
        let node=q.unshift();
        let n=q.length;
        for(let i=0;i<n;i++){
            if(root.left){
                cur.push(node.val)
            }
            if(root.rigth){
                cur.push(node.val)
            }
        }
    }
    res.push(cur)
    return res
}
lvl(b)
var levelOrder = function(root) {
    // function levelOrder(root: TreeNode | null): number[][] {
    if(!root) return [];
    let queue = [];
    queue.push(root);
    let res = []
    while(queue.length) {
        let cur = [];
        let n = queue.length;
        for(let i = 0; i < n; i++) {
            let node = queue.shift();
            cur.push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        res.push(cur);
    }
    return res;
};
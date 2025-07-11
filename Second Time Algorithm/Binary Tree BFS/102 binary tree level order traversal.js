var levelOrder = function(root) {
    if(!root) return [];

    let result = [];
    let queue = [root];

    while(queue.length > 0) {
        let levelSize = queue.length;
        let levelNode = [];

        for(let i = 0; i <= levelSize - 1; i++) {
            const node = queue.shift();
            levelNode.push(node.val);

            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        result.push(levelNode);
    }
    return result;
}
class TreeNode {
    constructor(data) {
        this.data = data
        this.parent = null
        this.left = null
        this.right = null
    }
}

class BinaryTree {

    constructor() {
        this.root = null
    }

    findNodeByValue(value) {
        let currentNode = this.root;
        while (currentNode !== null) {
            if (currentNode.data === value) {
                break
            }
            if (value > currentNode.data) {
                currentNode = currentNode.right
            } else {
                currentNode = currentNode.left
            }
        }
        return currentNode
    }

    insertNode(node) {
        if (!this.root) {
            this.root = node;
            return
        }

        let currentNode = this.root;
        let inserted = false;
        while (!inserted) {
            if (currentNode.data === node.data) {
                throw new Error("Non-unique value")
            }
            if (node.data > currentNode.data) {
                if (currentNode.right) {
                    currentNode = currentNode.right
                } else {
                    currentNode.right = node;
                    node.parent = currentNode
                    inserted = true;
                }
            } else {
                if (currentNode.left) {
                    currentNode = currentNode.left
                } else {
                    currentNode.left = node;
                    node.parent = currentNode
                    inserted = true;
                }
            }
        }
    }

    deleteNode(value) {
        let nodeToDelete = this.findNodeByValue(value)
        if (nodeToDelete !== null) {
            let parent = nodeToDelete.parent
            // No child nodes to deal with
            if (!nodeToDelete.right && !nodeToDelete.left) {
                if (parent.right === nodeToDelete) {
                    parent.right = null
                } else {
                    parent.left = null
                }
                nodeToDelete.parent = null
                return
            }
            // Only one child node to deal with
            if (!nodeToDelete.right || !nodeToDelete.left) {
                let child = nodeToDelete.right || nodeToDelete.left
                if (parent.right === nodeToDelete) {
                    parent.right = child
                } else {
                    parent.left = child
                }
                nodeToDelete.parent = null
                nodeToDelete.left = null
                nodeToDelete.right = null
                return
            }
            // Two child nodes
            // We are looking for the smallest node in the righthand subtree
            // that does not have a lefthand child
            let successorNode = nodeToDelete.right;
            while (successorNode.left !== null) {
                successorNode = successorNode.left
            }
            if (successorNode.parent !== nodeToDelete) {
                successorNode.parent.left = null;
            }
            successorNode.left = nodeToDelete.left;
            successorNode.parent = nodeToDelete.parent
            nodeToDelete.left.parent = successorNode
            if (nodeToDelete.parent.right === nodeToDelete) {
                nodeToDelete.parent.right = successorNode
            } else {
                nodeToDelete.parent.left = successorNode
            }
            nodeToDelete.parent = null
            nodeToDelete.left = null
            nodeToDelete.right = null
        }
    }


}
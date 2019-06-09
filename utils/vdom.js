const hasOwnProperty = Object.prototype.hasOwnProperty;

function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key);
};

export const isVNode =  function(node) {
    return node !== null && typeof node === 'object' && hasOwn(node, 'componentOptions');
};


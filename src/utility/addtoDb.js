import { toast } from 'react-toastify';

const getStoredReadList = () => {
    // read list 
    const storedListStr = localStorage.getItem('read-list');
    if(storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    } else {
        return [];
    }


}

const getStoredWishList = () => {
    const storedWishListStr = localStorage.getItem('wish-list');
    if(storedWishListStr) {
        const storedWishList = JSON.parse(storedWishListStr);
        return storedWishList;
    } else {
        return [];
    }
}


const addToStoredReadList = (rawId) => {
    const id = parseInt(rawId);
    const storedList = (getStoredReadList() || []).map((n) => parseInt(n));
    if (storedList.includes(id)) {
        toast.info('Already in Read list');
        return false;
    }
    const next = [...storedList, id];
    localStorage.setItem('read-list', JSON.stringify(next));
    toast.success('Marked as Read');
    return true;
}

const addToStoredWishList = (rawId) => {
    const id = parseInt(rawId);
    const storedWishList = (getStoredWishList() || []).map((n) => parseInt(n));
    if (storedWishList.includes(id)) {
        toast.info('Already in Wishlist');
        return false;
    }
    const next = [...storedWishList, id];
    localStorage.setItem('wish-list', JSON.stringify(next));
    toast.success('Added to Wishlist');
    return true;
}

// remove helpers
const removeFromStoredReadList = (rawId) => {
    const id = parseInt(rawId);
    const stored = (getStoredReadList() || []).map((n) => parseInt(n));
    const next = stored.filter((item) => parseInt(item) !== id);
    const removed = next.length !== stored.length;
    localStorage.setItem('read-list', JSON.stringify(next));
    if (removed) {
        toast.success('Removed from Read list');
    } else {
        toast.info('Not found in Read list');
    }
}

const removeFromStoredWishList = (rawId) => {
    const id = parseInt(rawId);
    const stored = (getStoredWishList() || []).map((n) => parseInt(n));
    const next = stored.filter((item) => parseInt(item) !== id);
    const removed = next.length !== stored.length;
    localStorage.setItem('wish-list', JSON.stringify(next));
    if (removed) {
        toast.success('Removed from Wishlist');
    } else {
        toast.info('Not found in Wishlist');
    }
}

export {addToStoredReadList,getStoredReadList, removeFromStoredReadList}
export {addToStoredWishList,getStoredWishList, removeFromStoredWishList}
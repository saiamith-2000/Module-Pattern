const linearSearch=function search(arr,x){
    let n=arr.length;
    for(let i=0;i<n;i++){
        if(arr[i]===x){return i;}
    }
    return undefined;
}

const binarySearch=function search(arr,x){
    let n=arr.length;
    let low=0,high=n-1;
    while(low<=high){
        let mid=low+Math.floor((high-low)/2);
        if(arr[mid]===x){return mid;}
        else if(arr[mid]<x){low=mid+1;}
        else{high=mid-1;}
    }
    return undefined;
}

module.exports={
    linearSearch,
    binarySearch,
}
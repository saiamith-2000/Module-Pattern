const linearSearch=function search(arr,x){
    const n=arr.length;
    for(let i=0;i<n;i++){
       if(arr[i]===x){return i;}
    }
    return undefined;
}

const binarySearch=function search(arr,x){
    const n=arr.length;
    let low=0;let high=n-1;
    while(lo<=hi){
        let mid=low+Math.floor((high-low)/2);
        if(arr[mid]===x){return mid;}
        else if(arr[mid]>x){high=mid-1;}
        else{low=mid+1;}
    }
    return undefined;
}

module.exports={
    linearSearch,
    binarySearch,
}
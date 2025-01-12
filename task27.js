// WAP print the following pattern using nested loops:
// 1
// 22
// 333
// 4444
// 55555

let n=5;
for(let i=0;i<=n;i++){
    let pattern=''
    for(let j=0;j<i;j++){
        pattern+=i
    }
    console.log(pattern);
}

// WAP to print the following pattern 
// 1 0 1 0 1
// 0 1 0 1 0
// 1 0 1 0 1
// 0 1 0 1 0
// 1 0 1 0 1

for(let i=1;i<=n;i++){
    let pattern=''
    if(i%2!=0){
        for(let j=1;j<=n;j++){
            if(j%2!=0){
                pattern+='1'
            }
            else{
                pattern+='0'
            }
        }
    }
    else{
        for(let j=1;j<=n;j++){
            if(j%2!=0){
                pattern+='0'
            }
            else{
                pattern+='1'
            }
        }
        
    }
    console.log(pattern);
    
}

// A
// AA
// AAA
// AAAA
// AAAAA

for(let i=1;i<=n;i++){
    let pattern=''
    for(let j=1;j<=i;j++){
        pattern+='A';
    }
    console.log(pattern);
}
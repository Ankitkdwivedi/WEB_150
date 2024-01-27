let n=20
let c3=1;
let c5=1;
for(let i=1;i<=n;i++){
    let ans=''
    if(c3==3){
        ans+='fizz';
        c3=0
    }
    if(c5==5){
        ans+='buzz';
        c5=0
    }
    if(ans==''){
        ans+=i;
    }
    console.log(ans);
    c3++;
    c5++;
}
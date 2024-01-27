let fs=require('fs');
let data="ankit dwivedi"

fs.writeFile('abc.txt',data,{
    encoding:'utf-8',
    flag:'w'
},(err)=>{
    if(err){throw err};
    console.log('done')
});

// fs.readFile('abc.txt',{},(err,d)=>{    //encoding utf8 of .tostring method can be used
//     if(err){throw err}
//     else console.log('d :>> ', d.toString());
// })


// fs.appendFile('abc.txt',data,(err)=>{
//     console.log('err :>> ', err);
// });

// fs.unlink('abc.txt',(err)=>{
//     if(err) console.log('err :>> ', err);
//     else console.log('done :>> ', 'done');
// })


const imageadd = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];

const block = document.createElement("div");
for(let add of imageadd){
    const img = document.createElement("img");
    img.setAttribute("src", add);
    block.append(img)
}
document.body.append(block);


const blk = document.createElement("div")
const flagimg = document.createElement("img");
flagimg.setAttribute("src","flag.jpg");
flagimg.setAttribute("class","flag");
blk.append(flagimg)
blk.setAttribute("class","bg")
document.body.append(blk)

const texts = ['Population : 323,947,000',"Region : Americas","Capital : Washington, D.C"]

const h1 = document.createElement("h1")
h1.innerText = "United States of America"
blk.append(h1)

for(let text of texts ){
    const para = document.createElement("p")
    para.innerText = text 
    blk.append(para)
}



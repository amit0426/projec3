
export{sNews,append};

let sNews = async (url)  =>{
    try{

        let res = await fetch(url);
        let data = await res.json();
        return data.articles;
        // console.log(data);
    }catch (errr){
        console.log(errr)

    }
}


let append = (data,container) => {
    // console.log(data)
    data.forEach(ele => {
        console.log(ele)
        
        let maindiv = document.createElement("div");
        let idiv = document.createElement("div");
        let image = document.createElement("img");
        image.src = ele.urlToImage;
        let author = document.createElement("h2");
        author.innerText = ele.author;
        let des = document.createElement("p");
        des.innerText = ele.description;

        let div  = document.createElement("div");
        div.setAttribute("id","au")
        div.append(author,des);
        idiv.append(image);
        maindiv.append(idiv,div);
        container.append(maindiv);


    });
}



// author: "Aanchal Magazine"
// content: "The Centre and the states are at loggerheads over taxes and duties on petrol and diesel. While the Centre feels the states are not reducing VAT in line with the Centre’s cut in excise duty, the state… [+6925 chars]"
// description: "The Prime Minister has noted that certain states have not reduced VAT; states have attributed rising fuel prices to central taxes. How is fuel taxed, and how are collections shared between the Centre and states?"
// publishedAt: "2022-04-29T06:02:45Z"
// source: {id: null, name: 'The Indian Express'}
// title: "Explained: States vs Centre on fuel taxes petrol diesel price hike - The Indian Express"
// url: "https://indianexpress.com/article/explained/states-vs-centre-on-fuel-taxes-petrol-diesel-price-hike-7892286/"
// urlToImage: "https://images.indianexpress.com/2022/04/fuel-price.jpeg"
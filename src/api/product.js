import axios from 'axios'

const url = "https://nekocup.github.io/api/mapleStory.json"

// 熱門商品
export function getHotSale(){
    return new Promise((res,rej)=>{
    axios.get(url).then((response)=>{
        let allData = response.data.product
        let hotSale = allData.filter((data)=>{
            return data.hot === true
        })
        res(hotSale) 
    }).catch((err)=>{
        rej(err)    
    })        
    })

}

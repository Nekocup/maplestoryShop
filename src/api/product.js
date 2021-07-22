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

// 分類商品
export function getSale(classify){
    return new Promise((res,rej)=>{
    axios.get(url).then((response)=>{
        let allData = response.data.product
        if(classify !== "全部"){
        let Sales = allData.filter((data)=>{
            return data.class == classify
        })
          res(Sales)           
        }
        res(allData)
    }).catch((err)=>{
        rej(err)    
    })        
    })

}
import React from 'react';


const lables = [
    {id:1, title:"Panchatantra Stories for Children", text:"The Panchatantra is a collection of short stories from India, written more than 5000 years ago! This is a collection of stories from that legendary collection. The stories inculcate moral values in children in a subtle and fun manner. Enjoy the stories, where plants and animals can converse with human beings too!.", image:"https://images-na.ssl-images-amazon.com/images/I/51f23psflyL._SX368_BO1,204,203,200_.jpg"},
    {id:2, title:"Hanuman, Ganesha, Ramayana", text:"This amazing collection of 5 books titled ‘My First mythology tale’ helps parents to easily introduce their curious kids to the world of Indian mythology. It comprises some interesting and enchanting stories about Mahabharata, Krishna, Hanuman, Ganesha and Ramayana along with", image:"https://images-na.ssl-images-amazon.com/images/I/51dqONk3oQL._SX390_BO1,204,203,200_.jpg"},
    {id:3, title:"The Illustrated Stories Of Akbar and Birbal", text:"The stories of ‘Akbar and Birbal’ are the most cherished folklores of India that have been passed from one generation to another, enthralling both young and adult readers. This book is a beautifully illustrated compilation of several tales of wit and wisdom, built upon the themes of loyalty and friendship.", image:"https://images-na.ssl-images-amazon.com/images/I/51rMGPnhcqL._SX320_BO1,204,203,200_.jpg"}
];

function Numberlist(props){  

    return(
        <div>
            {lables.map((lable) =><Numbers key={lable.id} title={lable.title} text={lable.text} src={lable.image} />)}
        </div>
    );

}


export default Numberlist;

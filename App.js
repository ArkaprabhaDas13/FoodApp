
import React from 'react'
import ReactDOM from 'react-dom/client'


const Header = ()=>{
    return(
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src="https://img.freepik.com/premium-vector/food-ordering-app-logo-with-points-fork-shapes-center_666184-195.jpg"/>
            </div>

            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>CART</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (props)=>{
    
    const {resData} = props
    console.log(resData);

    return(
        <div className='res-card'>
            <img className='res-logo' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/"+resData.imageId} alt="" />
            <h3>{resData.action.text}</h3>
            <p>{resData.action.type}</p>
        </div>
    )
}

let resObj = [
    {
        "id": "750234",
        "imageId": "v1674029855/PC_Creative%20refresh/3D_bau/banners_new/Poori.png",
        "action": {
          "link": "https://www.swiggy.com/collections/80377?collection_id=80377&tags=layout_BAU_Contextual%2Cpoori&type=rcv2",
          "text": "Poori",
          "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
          "altText": "restaurant curated for poori",
          "altTextCta": "open"
        },
        "entityId": "80377",
        "frequencyCapping": {

        }
      },
      {
        "id": "749876",
        "imageId": "v1674029844/PC_Creative%20refresh/3D_bau/banners_new/Chole_Bature.png",
        "action": {
          "link": "https://www.swiggy.com/collections/80382?collection_id=80382&tags=layout_CCS_CholeBhature&type=rcv2",
          "text": "Chole Bhature",
          "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
          "altText": "restaurant curated for chhole bhatoore",
          "altTextCta": "open"
        },
        "entityId": "swiggy://collectionV2?collection_id=80382&tags=layout_CCS_CholeBhature",
        "frequencyCapping": {

        }
      },
      {
        "id": "750131",
        "imageId": "v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png",
        "action": {
          "link": "https://www.swiggy.com/collections/80424?collection_id=80424&tags=layout_CCS_Dosa&type=rcv2",
          "text": "Dosa",
          "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
          "altText": "restaurants curated for dosa",
          "altTextCta": "open"
        },
        "entityId": "swiggy://collectionV2?collection_id=80424&tags=layout_CCS_Dosa",
        "frequencyCapping": {

        }
      },
      {
        "id": "750643",
        "imageId": "v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Idli.png",
        "action": {
          "link": "https://www.swiggy.com/collections/80440?collection_id=80440&tags=layout_CCS_Idli&type=rcv2",
          "text": "Idli",
          "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
          "altText": "restaurants curated for idly",
          "altTextCta": "open"
        },
        "entityId": "swiggy://collectionV2?collection_id=80440&tags=layout_CCS_Idli",
        "frequencyCapping": {

        }
      },
      {
        "id": "750201",
        "imageId": "v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Paratha.png",
        "action": {
          "link": "https://www.swiggy.com/collections/80475?collection_id=80475&tags=layout_BAU_Contextual%2Cparatha%2Cads_pc_paratha&type=rcv2",
          "text": "Paratha",
          "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
          "altText": "restaurants curated for paratha",
          "altTextCta": "open"
        },
        "entityId": "80475",
        "frequencyCapping": {

        }
      },
      {
        "id": "749868",
        "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png",
        "action": {
          "link": "https://www.swiggy.com/collections/83655?collection_id=83655&tags=layout_CCS_Cake&type=rcv2",
          "text": "Cakes",
          "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
          "altText": "restaurant curated for cake",
          "altTextCta": "open"
        },
        "entityId": "swiggy://collectionV2?collection_id=83655&tags=layout_CCS_Cake",
        "frequencyCapping": {

        }
      },
      {
        "id": "750216",
        "imageId": "v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pav_Bhaji.png",
        "action": {
          "link": "https://www.swiggy.com/collections/80362?collection_id=80362&tags=layout_PavBhaji_Contextual&type=rcv2",
          "text": "Pav Bhaji",
          "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
          "altText": "restaurant curated for pav bhaji",
          "altTextCta": "open"
        },
        "entityId": "swiggy://collectionV2?collection_id=80362&tags=layout_PavBhaji_Contextual",
        "frequencyCapping": {

        }
      },
      {
        "id": "750591",
        "imageId": "v1675667625/PC_Creative%20refresh/Biryani_2.png",
        "action": {
          "link": "https://www.swiggy.com/collections/83639?collection_id=83639&search_context=biryani&tags=layout_CCS_Biryani&type=rcv2",
          "text": "Biryani",
          "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
          "altText": "restaurants curated for biryani",
          "altTextCta": "open"
        },
        "entityId": "swiggy://collectionV2?collection_id=83639&tags=layout_CCS_Biryani&search_context=biryani",
        "frequencyCapping": {

        }
      },
      {
        "id": "750204",
        "imageId": "v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Parotta.png",
        "action": {
          "link": "https://www.swiggy.com/collections/80477?collection_id=80477&tags=layout_BAU_Contextual%2Cparotta&type=rcv2",
          "text": "Parotta",
          "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
          "altText": "restaurant curated for parotta",
          "altTextCta": "open"
        },
        "entityId": "80477",
        "frequencyCapping": {

        }
      },
      {
        "id": "750225",
        "imageId": "v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Salad.png",
        "action": {
          "link": "https://www.swiggy.com/collections/80394?collection_id=80394&tags=layout_CCS_Salad&type=rcv2",
          "text": "Salad",
          "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
          "altText": "restaurant curated for salad",
          "altTextCta": "open"
        },
        "entityId": "swiggy://collectionV2?collection_id=80394&tags=layout_CCS_Salad",
        "frequencyCapping": {

        }
      },
      {
        "id": "749760",
        "imageId": "v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Khichdi.png",
        "action": {
          "link": "https://www.swiggy.com/collections/80455?collection_id=80455&tags=layout_BAU_Contextual%2Ckhichdi&type=rcv2",
          "text": "Khichdi",
          "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
          "altText": "restaurants curated for khichdi",
          "altTextCta": "open"
        },
        "entityId": "80455",
        "frequencyCapping": {

        }
      },
      {
        "id": "750561",
        "imageId": "v1674029842/PC_Creative%20refresh/3D_bau/banners_new/Vada.png",
        "action": {
          "link": "https://www.swiggy.com/collections/80425?collection_id=80425&tags=layout_BAU_Contextual%2Cvada&type=rcv2",
          "text": "Vada",
          "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
          "altText": "restaurants curated for vada",
          "altTextCta": "open"
        },
        "entityId": "80425",
        "frequencyCapping": {

        }
      },
      {
        "id": "750232",
        "imageId": "v1674029847/PC_Creative%20refresh/3D_bau/banners_new/Pongal.png",
        "action": {
          "link": "https://www.swiggy.com/collections/80375?collection_id=80375&tags=layout_BAU_Contextual%2Cpongal&type=rcv2",
          "text": "Pongal",
          "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
          "altText": "restaurants curated for pongal",
          "altTextCta": "open"
        },
        "entityId": "80375",
        "frequencyCapping": {

        }
      },
      {
        "id": "745861",
        "imageId": "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Shakes.png",
        "action": {
          "link": "https://www.swiggy.com/collections/83673?collection_id=83673&tags=layout_CCS_Shakes&type=rcv2",
          "text": "Shake",
          "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
          "altText": "restaurants curated for shakes",
          "altTextCta": "open"
        },
        "entityId": "swiggy://collectionV2?collection_id=83673&tags=layout_CCS_Shakes",
        "frequencyCapping": {

        }
      },
      {
        "id": "750641",
        "imageId": "v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Jalebi.png",
        "action": {
          "link": "https://www.swiggy.com/collections/80442?collection_id=80442&tags=layout_BAU_Contextual%2Cjalebi&type=rcv2",
          "text": "Jalebi",
          "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
          "altText": "restaurant curated for jalebi",
          "altTextCta": "open"
        },
        "entityId": "80442",
        "frequencyCapping": {

        }
      },
      {
        "id": "750256",
        "imageId": "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rasgulla.png",
        "action": {
          "link": "https://www.swiggy.com/collections/80388?collection_id=80388&tags=layout_BAU_Contextual%2Crasgulla&type=rcv2",
          "text": "Rasgulla",
          "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
          "altText": "restaurant curated for rasgulla",
          "altTextCta": "open"
        },
        "entityId": "80388",
        "frequencyCapping": {

        }
      },
      {
        "id": "750589",
        "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png",
        "action": {
          "link": "https://www.swiggy.com/collections/83637?collection_id=83637&search_context=burger&tags=layout_CCS_Burger&type=rcv2",
          "text": "Burgers",
          "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
          "altText": "restaurants curated for burger",
          "altTextCta": "open"
        },
        "entityId": "swiggy://collectionV2?collection_id=83637&tags=layout_CCS_Burger&search_context=burger",
        "frequencyCapping": {

        }
      },
      {
        "id": "750604",
        "imageId": "rng/md/carousel/production/cbb85a3c1684891105294d11f8359996",
        "action": {
          "link": "https://www.swiggy.com/collections/80493?collection_id=80493&tags=layout_CCS_Tea&type=rcv2",
          "text": "Tea",
          "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
          "altText": "restaurants curated for tea",
          "altTextCta": "open"
        },
        "entityId": "swiggy://collectionV2?collection_id=80493&tags=layout_CCS_Tea",
        "frequencyCapping": {

        }
      },
      {
        "id": "750586",
        "imageId": "v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Gulab_Jamun.png",
        "action": {
          "link": "https://www.swiggy.com/collections/80430?collection_id=80430&tags=layout_BAU_Contextual%2Cgulab_jamun&type=rcv2",
          "text": "Gulab Jamun",
          "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
          "altText": "restaurant curated for gulab jamun",
          "altTextCta": "open"
        },
        "entityId": "80430",
        "frequencyCapping": {

        }
      },
      {
        "id": "750208",
        "imageId": "v1674029847/PC_Creative%20refresh/3D_bau/banners_new/Pastry.png",
        "action": {
          "link": "https://www.swiggy.com/collections/80355?collection_id=80355&tags=layout_BAU_Contextual%2Cpastry&type=rcv2",
          "text": "Pastry",
          "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
          "altText": "restaurant curated for Pastry",
          "altTextCta": "open"
        },
        "entityId": "80355",
        "frequencyCapping": {

        }
      }
]



const Body = ()=>{
    return(
        <div className="body">
            
            <div className="search">
                Search
            </div>
            
            <div className="res-container">
                {/* <RestaurantCard resName="Meghna Foods" cuisine="Indian, Chinese" rating="4.0"/> */}
                <RestaurantCard resData = {resObj[0]}/>
                <RestaurantCard resData = {resObj[1]}/>
                <RestaurantCard resData = {resObj[2]}/>
                <RestaurantCard resData = {resObj[3]}/>
                <RestaurantCard resData = {resObj[4]}/>
                <RestaurantCard resData = {resObj[5]}/>
                <RestaurantCard resData = {resObj[6]}/>
                <RestaurantCard resData = {resObj[7]}/>

                {/* <RestaurantCard resName="WowMomo" cuisine="North Bengal" rating="4.5"/> */}
            </div>
        </div>

    )
}



const AppLayout = ()=>{
    return(
        <div className='app'>
            <Header/>
            <Body/>
        </div>
    )
}

const heading = React.createElement("h1", {id:"heading"}, "Namaste React");

const root = ReactDOM.createRoot(document.getElementById('root'));          // create a Root to render in the index.html

root.render(<AppLayout/>)